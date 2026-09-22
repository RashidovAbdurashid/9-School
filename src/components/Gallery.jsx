import { useState } from 'react'
import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { galleryCategories, galleryItems } from '../data/gallery.js'

const SCENE_BY_TONE = { navy: 'building', blue: 'sport', graphite: 'event' }

export default function Gallery() {
  const [active, setActive] = useState('Все')
  const [lightbox, setLightbox] = useState(null)

  const items = active === 'Все' ? galleryItems : galleryItems.filter((i) => i.category === active)

  return (
    <section id="gallery" className="py-14 md:py-28">
      <div className="container-content">
        <span className="section-kicker mb-5">Галерея</span>
        <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-navy-950 dark:text-white leading-tight">
          Фотогалерея
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${
                active === c
                  ? 'bg-accent-600 dark:bg-accent-500 border-accent-600 dark:border-accent-500 text-navy-950'
                  : 'border-mist-200 dark:border-navy-700 text-graphite-600 dark:text-mist-200/75 hover:border-accent-500 hover:text-accent-700'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-2 sm:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item)}
              className="block w-full break-inside-avoid rounded-lg overflow-hidden focus-visible:outline-2 focus-visible:outline-accent-500"
            >
              <PhotoPlaceholder
                scene={SCENE_BY_TONE[item.tone]}
                label={item.caption}
                className={i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] bg-navy-950/90 flex items-center justify-center p-6 fade-in"
        >
          <div className="max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <PhotoPlaceholder scene={SCENE_BY_TONE[lightbox.tone]} className="aspect-[4/3] rounded-xl" />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-white text-[14.5px]">{lightbox.caption}</p>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Закрыть"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/25 text-white hover:border-white/60"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5l14 14M19 5L5 19" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
