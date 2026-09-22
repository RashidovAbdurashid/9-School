import { schoolStats } from '../data/stats.js'

export default function StatsBar() {
  return (
    <section className="border-y border-mist-200 dark:border-navy-800 bg-mist-50 dark:bg-navy-900/40">
      <div className="container-content py-8 md:py-10 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-7 md:gap-8">
        {schoolStats.map((s, i) => (
          <div key={s.label} className={i === schoolStats.length - 1 ? 'col-span-2 md:col-span-1 text-center md:text-left' : ''}>
            <p className="font-display text-[28px] md:text-[32px] font-semibold text-navy-950 dark:text-white">
              {s.value}
              <span className="text-accent-700 dark:text-accent-400">{s.suffix}</span>
            </p>
            <p className="mt-1 text-[13px] text-graphite-500 dark:text-mist-200/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
