export default function Logo({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <rect x="8" y="9" width="9" height="30" rx="2" className="fill-ink" />
      <rect x="31" y="9" width="9" height="30" rx="2" className="fill-ink" />
      <polygon points="8,27 24,12 40,27 40,33 24,18 8,33" className="fill-coral" />
    </svg>
  )
}
