import { achievements } from '../data/stats.js'

export default function Achievements() {
  return (
    <section id="achievements" className="py-14 md:py-28">
      <div className="container-content">
        <div className="max-w-[52ch]">
          <span className="section-kicker mb-5">Достижения</span>
          <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-navy-950 dark:text-white leading-tight">
            Достижения школы
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-x-10 gap-y-10">
          {achievements.map((a) => (
            <div key={a.title} className="flex gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-1 shrink-0 text-accent-700 dark:text-accent-400">
                <path d="M12 15a6 6 0 100-12 6 6 0 000 12zM8.2 14.5L7 21l5-2.5L17 21l-1.2-6.5" />
              </svg>
              <div>
                <h3 className="text-[15.5px] font-semibold text-navy-950 dark:text-white">{a.title}</h3>
                <p className="mt-1.5 text-[14px] text-graphite-500 dark:text-mist-200/75 leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
