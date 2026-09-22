import { events } from '../data/events.js'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}

export default function Events() {
  return (
    <section id="events" className="py-14 md:py-28 bg-mist-50 dark:bg-navy-900/30">
      <div className="container-content">
        <span className="section-kicker mb-5">Мероприятия</span>
        <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-navy-950 dark:text-white leading-tight">
          Мероприятия
        </h2>

        <ol className="mt-12 relative border-l border-mist-200 dark:border-navy-700 ml-2">
          {events.map((e) => (
            <li key={e.id} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-white dark:bg-navy-950 border-2 border-accent-500" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[13px] font-semibold text-accent-700 dark:text-accent-400">
                  {formatDate(e.date)}
                </span>
                <span className="text-[13px] text-graphite-500 dark:text-mist-200/60">{e.time} · {e.location}</span>
              </div>
              <h3 className="mt-1.5 text-[16.5px] font-semibold text-navy-950 dark:text-white">{e.title}</h3>
              <p className="mt-1.5 text-[14px] text-graphite-500 dark:text-mist-200/75 leading-relaxed max-w-[60ch]">
                {e.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
