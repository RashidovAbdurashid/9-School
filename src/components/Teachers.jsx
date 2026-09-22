import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { teacherStats } from '../data/stats.js'

export default function Teachers() {
  return (
    <section id="teachers" className="py-14 md:py-28">
      <div className="container-content grid md:grid-cols-2 gap-14 items-center">
        <PhotoPlaceholder scene="classroom" className="aspect-[4/3] rounded-2xl shadow-card order-2 md:order-1" />

        <div className="order-1 md:order-2">
          <span className="section-kicker mb-5">Педагогический состав</span>
          <h2 className="font-display text-[30px] md:text-[34px] font-semibold text-navy-950 dark:text-white leading-tight">
            Наш педагогический состав
          </h2>
          <p className="mt-4 text-[15px] text-graphite-500 dark:text-mist-200/75 leading-relaxed max-w-[48ch]">
            Коллектив школы объединяет опытных и квалифицированных преподавателей по всем учебным
            направлениям — от начальной школы до выпускных классов.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6">
            {teacherStats.map((s) => (
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
      </div>
    </section>
  )
}
