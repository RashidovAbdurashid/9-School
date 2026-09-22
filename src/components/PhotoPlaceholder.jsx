// Единый компонент-заглушка для фотографий (вместо реальных снимков).
// При подключении реальных фото просто замените содержимое на <img src="..." />
// и удалите этот компонент — во всех местах он подключается по единому интерфейсу.
const SCENES = {
  building: (
    <svg viewBox="0 0 400 280" className="w-full h-full">
      <rect width="400" height="280" fill="url(#g1)" />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#33291A" />
          <stop offset="1" stopColor="#1C1710" />
        </linearGradient>
      </defs>
      <rect x="60" y="90" width="280" height="150" fill="#4A3B22" />
      <rect x="60" y="60" width="280" height="35" fill="#6B5730" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={80 + i * 36} y="115" width="20" height="26" fill="#E0C673" opacity="0.85" />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} x={80 + i * 36} y="160" width="20" height="26" fill="#E0C673" opacity="0.6" />
      ))}
      <rect x="185" y="196" width="30" height="44" fill="#1C1710" />
    </svg>
  ),
  classroom: (
    <svg viewBox="0 0 400 280" className="w-full h-full">
      <rect width="400" height="280" fill="#F5F0E6" />
      <rect x="0" y="0" width="400" height="120" fill="#E9E0CC" />
      <rect x="40" y="30" width="140" height="70" rx="4" fill="#241D14" />
      <rect x="52" y="42" width="116" height="46" fill="#6B5730" />
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <rect key={`${r}-${c}`} x={40 + c * 68} y={150 + r * 30} width="46" height="18" rx="2" fill="#6B5730" opacity={0.9 - r * 0.15} />
        ))
      )}
    </svg>
  ),
  book: (
    <svg viewBox="0 0 400 280" className="w-full h-full">
      <rect width="400" height="280" fill="#241D14" />
      <path d="M120 70c40-16 66-16 80 0v140c-14-16-40-16-80 0V70z" fill="#FBF9F4" />
      <path d="M280 70c-40-16-66-16-80 0v140c14-16 40-16 80 0V70z" fill="#C9A227" />
      <path d="M200 70v140" stroke="#1C1710" strokeWidth="2" />
    </svg>
  ),
  sport: (
    <svg viewBox="0 0 400 280" className="w-full h-full">
      <rect width="400" height="280" fill="#33291A" />
      <circle cx="200" cy="140" r="60" fill="none" stroke="#E0C673" strokeWidth="6" />
      <path d="M140 140h120M200 80v120" stroke="#E0C673" strokeWidth="4" />
      <rect x="20" y="230" width="360" height="10" fill="#6B5730" />
    </svg>
  ),
  event: (
    <svg viewBox="0 0 400 280" className="w-full h-full">
      <rect width="400" height="280" fill="#4A3B22" />
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx={30 + (i % 4) * 110} cy={40 + Math.floor(i / 4) * 80} r="6" fill="#E0C673" opacity={0.3 + (i % 3) * 0.2} />
      ))}
      <rect x="110" y="100" width="180" height="90" rx="6" fill="#241D14" />
    </svg>
  ),
}

export default function PhotoPlaceholder({ scene = 'building', className = '', label }) {
  return (
    <div className={`relative overflow-hidden bg-mist-100 dark:bg-navy-800 ${className}`}>
      {SCENES[scene] || SCENES.building}
      {label && (
        <span className="absolute bottom-2 left-2 text-[11px] px-2 py-0.5 rounded bg-navy-950/60 text-white backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  )
}
