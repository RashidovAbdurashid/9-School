import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-mist-200 dark:border-navy-800">
      <div className="container-content py-14 grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-[13.5px] text-graphite-500 dark:text-mist-200/60 max-w-[32ch]">
            Общеобразовательная школа №9 — обучение, развитие и поддержка каждого ученика.
          </p>
        </div>

        <div>
          <h4 className="text-[13.5px] font-semibold text-navy-950 dark:text-white mb-3">Школа</h4>
          <ul className="space-y-2 text-[13.5px] text-graphite-500 dark:text-mist-200/65">
            <li><a href="#about" className="hover:text-accent-700 dark:hover:text-accent-400">О школе</a></li>
            <li><a href="#programs" className="hover:text-accent-700 dark:hover:text-accent-400">Образование</a></li>
            <li><a href="#achievements" className="hover:text-accent-700 dark:hover:text-accent-400">Достижения</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13.5px] font-semibold text-navy-950 dark:text-white mb-3">Информация</h4>
          <ul className="space-y-2 text-[13.5px] text-graphite-500 dark:text-mist-200/65">
            <li><a href="#news" className="hover:text-accent-700 dark:hover:text-accent-400">Новости</a></li>
            <li><a href="#events" className="hover:text-accent-700 dark:hover:text-accent-400">Мероприятия</a></li>
            <li><a href="#gallery" className="hover:text-accent-700 dark:hover:text-accent-400">Галерея</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[13.5px] font-semibold text-navy-950 dark:text-white mb-3">Контакты</h4>
          <ul className="space-y-2 text-[13.5px] text-graphite-500 dark:text-mist-200/65">
            <li>+998 71 200 09 09</li>
            <li>info@school9.uz</li>
            <li>г. Ташкент, ул. Мустакиллик, 9</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-mist-200 dark:border-navy-800">
        <div className="container-content py-5 text-[12.5px] text-graphite-500 dark:text-mist-200/50">
          © 2026 Школа №9. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
