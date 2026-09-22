import { programs } from '../data/programs.js'

const ICONS = {
  math: <path d="M4 4h16M4 12h6M13 12h7M4 20h16M9 8l3-4M15 16l3 4" />,
  informatics: <path d="M4 5h16v11H4zM9 20h6M12 16v4M8 9l2 2-2 2M13 13h3" />,
  english: <path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2zM14 3v5h5" />,
  russian: <path d="M6 4h12M6 4v16M6 4c4 2 4 6 0 8M18 4v16M18 12c-4-2-4 6 0 8" />,
  science: <path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" />,
  history: <path d="M12 8v5l3 2M21 12a9 9 0 11-3.4-7M21 3v5h-5" />,
  sport: <circle cx="12" cy="12" r="9" />,
  creative: <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />,
}

export default function Programs() {
  return (
    <section id="programs" className="py-14 md:py-28 bg-mist-50 dark:bg-navy-900/30">
      <div className="container-content">
        <div className="max-w-[52ch]">
          <span className="section-kicker mb-5">Образование</span>
          <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-navy-950 dark:text-white leading-tight">
            Образовательные направления
          </h2>
          <p className="mt-4 text-[15.5px] text-graphite-500 dark:text-mist-200/75 leading-relaxed">
            Учебный план объединяет точные, естественные и гуманитарные предметы с творческим и
            физическим развитием — сбалансированная программа для каждого ученика.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mist-200 dark:bg-navy-800 rounded-2xl overflow-hidden">
          {programs.map((p) => (
            <div key={p.key} className="bg-white dark:bg-navy-900 p-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-accent-700 dark:text-accent-400">
                {ICONS[p.key]}
              </svg>
              <h3 className="mt-4 text-[15px] font-semibold text-navy-950 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-[13.5px] text-graphite-500 dark:text-mist-200/70 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
