import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { studentStats } from '../data/stats.js'

export default function Students() {
  return (
    <section id="students" className="py-14 md:py-28 bg-mist-50 dark:bg-navy-900/30">
      <div className="container-content grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="section-kicker mb-5">Ученики</span>
          <h2 className="font-display text-[30px] md:text-[34px] font-semibold text-navy-950 dark:text-white leading-tight">
            Наши ученики
          </h2>
          <p className="mt-4 text-[15px] text-graphite-500 dark:text-mist-200/75 leading-relaxed max-w-[48ch]">
            Более тысячи учеников от первого до выпускного класса участвуют в учебной, спортивной
            и творческой жизни школы каждый год.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6">
            {studentStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-[26px] font-semibold text-navy-950 dark:text-white">
                  {s.value}
                  <span className="text-accent-700 dark:text-accent-400">{s.suffix}</span>
                </p>
                <p className="mt-1 text-[13px] text-graphite-500 dark:text-mist-200/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <PhotoPlaceholder scene="event" className="aspect-[4/3] rounded-2xl shadow-card" />
      </div>
    </section>
  )
}
