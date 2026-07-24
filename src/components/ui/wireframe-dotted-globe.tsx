"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"
import landData from "@/assets/ne_110m_land.json"
import dotsData from "@/assets/world-dots.json"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
}

interface DotData {
  lng: number
  lat: number
  visible: boolean
}

export default function RotatingEarth({ width = 800, height = 800, className = "" }: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

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

    const allDots: DotData[] = (dotsData as [number, number][]).map(([lng, lat]) => ({
      lng,
      lat,
      visible: true,
    }))
    const landFeatures = landData

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

    let autoRotate = true
    const rotationSpeed = 0.5

    const rotate = () => {
      if (autoRotate) {
        targetRotation[0] += rotationSpeed
      }

      currentRotation[0] += (targetRotation[0] - currentRotation[0]) * 0.08
      currentRotation[1] += (targetRotation[1] - currentRotation[1]) * 0.08
      projection.rotate(currentRotation as [number, number, number])
      render()
    }

    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      if (window.innerWidth < 1024) return
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
      if (window.innerWidth < 1024) return
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const bounds = wrapper.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width
      const y = (event.clientY - bounds.top) / bounds.height

      const isInside = x >= 0 && x <= 1 && y >= 0 && y <= 1
      if (!isInside) return

      autoRotate = false
      targetRotation[0] = (x - 0.5) * 40
      targetRotation[1] = (0.5 - y) * 28
    }

    const handlePointerLeave = () => {
      autoRotate = true
      targetRotation[1] = 0
    }

    const handleWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024) return
      event.preventDefault()
      const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1
      const globeRadius = currentSize / 3
      const newRadius = Math.max(globeRadius * 0.5, Math.min(globeRadius * 3, projection.scale() * scaleFactor))
      projection.scale(newRadius)
      render()
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("wheel", handleWheel)
    wrapperRef.current.addEventListener("pointermove", handlePointerMove)
    wrapperRef.current.addEventListener("pointerleave", handlePointerLeave)

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

  return (
    <div ref={wrapperRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full bg-transparent dark"
        style={{ maxWidth: "100%", height: "100%" }}
      />
      <div className="hidden lg:block absolute bottom-4 left-4 text-xs text-muted-foreground px-2 py-1 rounded-md dark bg-neutral-900">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  )
}