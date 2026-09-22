export default function Logo({ variant = 'full', className = '' }) {
  // Минималистичный знак: цифра «9», верхняя петля которой — раскрытая книга
  // (тонкая линия — корешок/разворот страниц). Один акцентный цвет (золото)
  // на тёмном фоне — читается и в самом маленьком размере (favicon, мобильная шапка).
  const Mark = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="40" height="40" rx="10" className="fill-navy-950 dark:fill-navy-900" />
      <circle cx="17.5" cy="16.5" r="8.5" className="fill-accent-500" />
      <path
        d="M25.5 19c0.6 5.8-3 10.6-8.7 11.6"
        className="stroke-accent-500"
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M17.5 9v15" className="stroke-navy-950 dark:stroke-navy-900" strokeWidth="1.4" />
    </svg>
  )

  if (variant === 'mark') return Mark

  return (
    <a href="#top" className={`flex items-center gap-3 group ${className}`}>
      {Mark}
      <span className="leading-tight">
        <span className="block font-display font-semibold text-[17px] text-navy-900 dark:text-white tracking-tight">
          Школа №9
        </span>
        <span className="block text-[11.5px] text-graphite-500 dark:text-mist-200/70">
          Образование • Знания • Будущее
        </span>
      </span>
    </a>
  )
}
