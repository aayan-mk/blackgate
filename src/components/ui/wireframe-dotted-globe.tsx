"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
}

export default function RotatingEarth({ width = 800, height = 800, className = "" }: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current || !wrapperRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    let currentSize = 0
    const projection = d3.geoOrthographic()

    const updateCanvasSize = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const wrapperWidth = wrapper.clientWidth
      const wrapperHeight = wrapper.clientHeight || wrapperWidth
      const size = Math.max(1, Math.floor(Math.min(width, height, wrapperWidth, wrapperHeight)))
      const dpr = window.devicePixelRatio || 1

      currentSize = size
      canvas.width = size * dpr
      canvas.height = size * dpr
      canvas.style.width = `${size}px`
      canvas.style.height = `${size}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const radius = size / 3
      projection
        .scale(radius)
        .translate([size / 2, size / 2])
        .clipAngle(90)

      render()
    }

    const path = d3.geoPath().projection(projection).context(context)
    const targetRotation = [0, 0]
    const currentRotation = [0, 0]

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false

      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]

        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }

      return inside
    }

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry

      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates

        if (!pointInPolygon(point, coordinates[0])) {
          return false
        }

        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) {
            return false
          }
        }

        return true
      } else if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false

            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true
                break
              }
            }

            if (!inHole) {
              return true
            }
          }
        }

        return false
      }

      return false
    }

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds

      const stepSize = dotSpacing * 0.08
      let pointsGenerated = 0

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]

          if (pointInFeature(point, feature)) {
            dots.push(point)
            pointsGenerated++
          }
        }
      }

      console.log(
        `[v0] Generated ${pointsGenerated} points for land feature:`,
        feature.properties?.featurecla || "Land",
      )
      return dots
    }

    interface DotData {
      lng: number
      lat: number
      visible: boolean
    }

    const allDots: DotData[] = []
    let landFeatures: any

    const render = () => {
      if (!currentSize) return

      context.clearRect(0, 0, currentSize, currentSize)

      const currentScale = projection.scale()
      const radius = currentSize / 3
      const scaleFactor = currentScale / radius

      context.beginPath()
      context.arc(currentSize / 2, currentSize / 2, currentScale, 0, 2 * Math.PI)
      context.strokeStyle = "#ffffff"
      context.lineWidth = 2 * scaleFactor
      context.stroke()

      if (landFeatures) {
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = "#ffffff"
        context.lineWidth = 1 * scaleFactor
        context.globalAlpha = 0.25
        context.stroke()
        context.globalAlpha = 1

        context.beginPath()
        landFeatures.features.forEach((feature: any) => {
          path(feature)
        })
        context.strokeStyle = "#ffffff"
        context.lineWidth = 1 * scaleFactor
        context.stroke()

        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])

          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= currentSize &&
            projected[1] >= 0 &&
            projected[1] <= currentSize
          ) {
            context.beginPath()
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI)
            context.fillStyle = "#999999"
            context.fill()
          }
        })
      }
    }

    const loadWorldData = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
        )

        if (!response.ok) throw new Error("Failed to load land data")

        landFeatures = await response.json()

        let totalDots = 0
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 16)
          dots.forEach(([lng, lat]) => {
            allDots.push({ lng, lat, visible: true })
            totalDots++
          })
        })

        console.log(`[v0] Total dots generated: ${totalDots} across ${landFeatures.features.length} land features`)

        render()
        setIsLoading(false)
      } catch (err) {
        setError("Failed to load land map data")
        setIsLoading(false)
      }
    }

    let autoRotate = true
    const rotationSpeed = 0.5
    let hoverAmount = 0

    const rotate = () => {
      if (autoRotate) {
        targetRotation[0] += rotationSpeed
      }

      currentRotation[0] += (targetRotation[0] - currentRotation[0]) * 0.08
      currentRotation[1] += (targetRotation[1] - currentRotation[1]) * 0.08
      projection.rotate(currentRotation)
      render()
    }

    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotation = [...targetRotation]

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const sensitivity = 0.5
        const dx = moveEvent.clientX - startX
        const dy = moveEvent.clientY - startY

        targetRotation[0] = startRotation[0] + dx * sensitivity
        targetRotation[1] = startRotation[1] - dy * sensitivity
        targetRotation[1] = Math.max(-90, Math.min(90, targetRotation[1]))

        autoRotate = false
      }

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)

        setTimeout(() => {
          autoRotate = true
        }, 10)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const bounds = wrapper.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width
      const y = (event.clientY - bounds.top) / bounds.height

      const isInside = x >= 0 && x <= 1 && y >= 0 && y <= 1
      if (!isInside) return

      hoverAmount = 1
      autoRotate = false
      targetRotation[0] = (x - 0.5) * 40
      targetRotation[1] = (0.5 - y) * 28
    }

    const handlePointerLeave = () => {
      hoverAmount = 0
      autoRotate = true
      targetRotation[1] = 0
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1
      const newRadius = Math.max(radius * 0.5, Math.min(radius * 3, projection.scale() * scaleFactor))
      projection.scale(newRadius)
      render()
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("wheel", handleWheel)
    wrapperRef.current.addEventListener("pointermove", handlePointerMove)
    wrapperRef.current.addEventListener("pointerleave", handlePointerLeave)

    loadWorldData()

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
    })

    resizeObserver.observe(wrapperRef.current)
    window.addEventListener("resize", updateCanvasSize)
    updateCanvasSize()

    return () => {
      rotationTimer.stop()
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("wheel", handleWheel)
      wrapperRef.current?.removeEventListener("pointermove", handlePointerMove)
      wrapperRef.current?.removeEventListener("pointerleave", handlePointerLeave)
      window.removeEventListener("resize", updateCanvasSize)
      resizeObserver.disconnect()
    }
  }, [width, height])

  if (error) {
    return (
      <div className={`dark flex items-center justify-center bg-card rounded-2xl p-8 ${className}`}>
        <div className="text-center">
          <p className="dark text-destructive font-semibold mb-2">Error loading Earth visualization</p>
          <p className="dark text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div ref={wrapperRef} className={`relative w-full h-full ${className}`} style={{ opacity: error ? 1 : undefined }}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full bg-transparent dark"
        style={{ maxWidth: "100%", height: "100%" }}
      />
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-bg-primary/40 text-xs tracking-[0.3em] uppercase text-text-secondary">
          Loading globe
        </div>
      )}
      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground px-2 py-1 rounded-md dark bg-neutral-900">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  )
}