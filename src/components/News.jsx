import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { news } from '../data/news.js'

const SCENE_BY_TONE = { navy: 'building', blue: 'sport', graphite: 'event' }

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function News() {
  return (
    <section id="news" className="py-14 md:py-28">
      <div className="container-content">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="section-kicker mb-5">Новости</span>
            <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-navy-950 dark:text-white leading-tight">
              Новости школы
            </h2>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((n) => (
            <article key={n.id} className="group">
              <PhotoPlaceholder scene={SCENE_BY_TONE[n.placeholderTone]} className="aspect-[16/10] rounded-xl" />
              <div className="mt-4">
                <div className="flex items-center gap-3 text-[12.5px] text-graphite-500 dark:text-mist-200/60">
                  <span>{formatDate(n.date)}</span>
                  <span className="w-1 h-1 rounded-full bg-graphite-300 dark:bg-navy-600" />
                  <span className="text-accent-700 dark:text-accent-400 font-medium">{n.category}</span>
                </div>
                <h3 className="mt-2 text-[16px] font-semibold text-navy-950 dark:text-white leading-snug">{n.title}</h3>
                <p className="mt-2 text-[13.5px] text-graphite-500 dark:text-mist-200/70 leading-relaxed">{n.excerpt}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-navy-900 dark:text-white group-hover:text-accent-700 dark:group-hover:text-accent-400 transition-colors">
                  Подробнее
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
