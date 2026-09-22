import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const LINKS = [
  { href: '#top', label: 'Главная' },
  { href: '#about', label: 'О школе' },
  { href: '#programs', label: 'Образование' },
  { href: '#news', label: 'Новости' },
  { href: '#events', label: 'Мероприятия' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#contact', label: 'Контакты' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-md shadow-[0_1px_0_rgba(14,27,48,0.08)]'
          : 'bg-white/70 dark:bg-navy-950/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-16">
        <Logo />

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14.5px] text-graphite-700 dark:text-mist-100/90 hover:text-accent-700 dark:hover:text-accent-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="text-[14px] font-semibold px-4 py-2 rounded-md bg-accent-600 text-navy-950 hover:bg-accent-500 dark:bg-accent-500 dark:hover:bg-accent-400 transition-colors"
          >
            Связаться со школой
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Открыть меню"
            onClick={() => setOpen((v) => !v)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-mist-200 dark:border-navy-700"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-mist-200 dark:border-navy-800 ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-content py-4 flex flex-col gap-1 bg-white dark:bg-navy-950">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[15px] text-graphite-700 dark:text-mist-100/90"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center text-[14px] font-semibold px-4 py-2.5 rounded-md bg-accent-600 text-navy-950 dark:bg-accent-500"
            >
              Связаться со школой
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
