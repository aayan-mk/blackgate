export default function OrbGridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: '#000000',
        backgroundImage: `
          linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%',
      }}
    />
  )
}