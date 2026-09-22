import PhotoPlaceholder from './PhotoPlaceholder.jsx'

export default function Hero() {
  return (
    <section id="top" className="pt-24 pb-14 md:pt-40 md:pb-28">
      <div className="container-content grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 items-center">
        <div className="fade-in">
          <span className="section-kicker mb-4 md:mb-5">Общеобразовательная школа</span>
          <h1 className="font-display text-[32px] leading-[1.18] sm:text-[38px] md:text-[54px] md:leading-[1.1] font-semibold text-navy-950 dark:text-white text-balance">
            Школа №9 — место, где начинается будущее
          </h1>
          <p className="mt-5 md:mt-6 text-[15.5px] md:text-[17px] leading-relaxed text-graphite-500 dark:text-mist-200/80 max-w-[46ch]">
            Создаём знания, развиваем способности и помогаем каждому ученику раскрыть свой потенциал.
          </p>
          <div className="mt-7 md:mt-9 flex flex-wrap sm:items-center gap-3 sm:gap-4">
            <a
              href="#about"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-md bg-accent-600 dark:bg-accent-500 text-navy-950 text-[14.5px] font-semibold hover:bg-accent-500 dark:hover:bg-accent-400 transition-colors"
            >
              О школе
            </a>
            <a
              href="#news"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-md border border-mist-200 dark:border-navy-700 text-navy-900 dark:text-mist-100 text-[14.5px] font-medium hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-400 transition-colors"
            >
              Новости школы
            </a>
          </div>
        </div>

        <div className="relative">
          <PhotoPlaceholder scene="classroom" className="aspect-[4/5] rounded-2xl shadow-card" />
          <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white dark:bg-navy-900 rounded-xl shadow-card px-5 py-4 border border-mist-200/70 dark:border-navy-700">
            <p className="font-display text-2xl font-semibold text-navy-950 dark:text-white">30+</p>
            <p className="text-[12.5px] text-graphite-500 dark:text-mist-200/70">лет школа обучает и развивает</p>
          </div>
        </div>
      </div>
    </section>
  )
}
