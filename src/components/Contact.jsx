import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sent

  function handleSubmit(e) {
    e.preventDefault()
    // Здесь можно подключить реальную отправку (API школы, email-сервис и т.д.)
    // Персональные данные из формы не сохраняются и не отображаются публично.
    setStatus('sent')
    e.target.reset()
  }

  return (
    <section id="contact" className="py-14 md:py-28 bg-mist-50 dark:bg-navy-900/30">
      <div className="container-content grid lg:grid-cols-2 gap-14">
        <div>
          <span className="section-kicker mb-5">Контакты</span>
          <h2 className="font-display text-[32px] md:text-[38px] font-semibold text-navy-950 dark:text-white leading-tight">
            Контакты
          </h2>

          <dl className="mt-8 space-y-5 text-[14.5px]">
            <div className="flex gap-3">
              <dt className="text-graphite-500 dark:text-mist-200/60 w-24 shrink-0">Адрес</dt>
              <dd className="text-navy-950 dark:text-mist-100">г. Ташкент, Мирзо-Улугбекский район, ул. Мустакиллик, 9</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-graphite-500 dark:text-mist-200/60 w-24 shrink-0">Телефон</dt>
              <dd className="text-navy-950 dark:text-mist-100">+998 71 200 09 09</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-graphite-500 dark:text-mist-200/60 w-24 shrink-0">Email</dt>
              <dd className="text-navy-950 dark:text-mist-100">info@school9.uz</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-graphite-500 dark:text-mist-200/60 w-24 shrink-0">Часы работы</dt>
              <dd className="text-navy-950 dark:text-mist-100">Пн–Сб, 8:00–18:00</dd>
            </div>
          </dl>

          <div className="mt-8 rounded-xl overflow-hidden border border-mist-200 dark:border-navy-700 aspect-[16/9]">
            <iframe
              title="Карта расположения школы №9"
              src="https://www.openstreetmap.org/export/embed.html?bbox=69.24%2C41.30%2C69.30%2C41.34&layer=mapnik"
              className="w-full h-full grayscale-[15%]"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-900 rounded-2xl shadow-card p-6 md:p-8 space-y-4 md:space-y-5">
          <div>
            <label htmlFor="name" className="text-[13.5px] font-medium text-navy-950 dark:text-mist-100">Имя</label>
            <input id="name" name="name" required type="text" className="mt-1.5 w-full rounded-md border border-mist-200 dark:border-navy-700 bg-transparent px-3.5 py-2.5 text-[14.5px] focus:border-accent-500" />
          </div>
          <div>
            <label htmlFor="phone" className="text-[13.5px] font-medium text-navy-950 dark:text-mist-100">Телефон</label>
            <input id="phone" name="phone" required type="tel" className="mt-1.5 w-full rounded-md border border-mist-200 dark:border-navy-700 bg-transparent px-3.5 py-2.5 text-[14.5px] focus:border-accent-500" />
          </div>
          <div>
            <label htmlFor="email" className="text-[13.5px] font-medium text-navy-950 dark:text-mist-100">Email</label>
            <input id="email" name="email" type="email" className="mt-1.5 w-full rounded-md border border-mist-200 dark:border-navy-700 bg-transparent px-3.5 py-2.5 text-[14.5px] focus:border-accent-500" />
          </div>
          <div>
            <label htmlFor="message" className="text-[13.5px] font-medium text-navy-950 dark:text-mist-100">Сообщение</label>
            <textarea id="message" name="message" required rows={4} className="mt-1.5 w-full rounded-md border border-mist-200 dark:border-navy-700 bg-transparent px-3.5 py-2.5 text-[14.5px] focus:border-accent-500" />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-accent-600 dark:bg-accent-500 text-navy-950 text-[14.5px] font-semibold hover:bg-accent-500 dark:hover:bg-accent-400 transition-colors"
          >
            Отправить сообщение
          </button>
          {status === 'sent' && (
            <p className="text-[13.5px] text-accent-700 dark:text-accent-400">Сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
          )}
        </form>
      </div>
    </section>
  )
}
