import PhotoPlaceholder from './PhotoPlaceholder.jsx'

const VALUES = [
  { title: 'Качество обучения', text: 'Сбалансированная программа с упором на понимание, а не заучивание.' },
  { title: 'Индивидуальный подход', text: 'Учитываем сильные стороны и темп развития каждого ученика.' },
  { title: 'Современная среда', text: 'Оснащённые кабинеты, библиотека и пространство для внеклассной работы.' },
  { title: 'Открытость', text: 'Постоянная связь с родителями и прозрачная школьная жизнь.' },
]

export default function About() {
  return (
    <section id="about" className="py-14 md:py-28">
      <div className="container-content grid md:grid-cols-2 gap-14 items-start">
        <div>
          <span className="section-kicker mb-5">О школе</span>
          <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-navy-950 dark:text-white leading-tight">
            О школе №9
          </h2>
          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-graphite-700 dark:text-mist-200/85">
            <p>
              Школа №9 работает уже более тридцати лет и остаётся одним из ведущих образовательных
              учреждений района. За это время сложился сильный педагогический коллектив и устойчивые
              традиции, которые продолжают развиваться вместе с новыми образовательными стандартами.
            </p>
            <p>
              Учебная программа охватывает точные науки, языки, естественные дисциплины и творческие
              направления. Особое внимание уделяется практическим занятиям, проектной работе и развитию
              самостоятельного мышления учеников на всех ступенях обучения.
            </p>
            <p>
              Мы стремимся создать среду, в которой ребёнок чувствует себя уверенно: от первого звонка
              до выпускного вечера. Школьная жизнь не ограничивается уроками — ученики участвуют в
              олимпиадах, спортивных секциях, творческих коллективах и общественных проектах.
            </p>
          </div>

          <dl className="mt-9 grid sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="border-l-2 border-accent-500 pl-4">
                <dt className="text-[14.5px] font-semibold text-navy-950 dark:text-white">{v.title}</dt>
                <dd className="mt-1 text-[13.5px] text-graphite-500 dark:text-mist-200/70 leading-relaxed">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <PhotoPlaceholder scene="building" className="aspect-[4/5] md:aspect-[3/4] rounded-2xl shadow-card md:sticky md:top-28" />
      </div>
    </section>
  )
}
