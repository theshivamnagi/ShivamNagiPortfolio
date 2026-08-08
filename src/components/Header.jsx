import ThemeToggle from './ThemeToggle'
import { LogoMark } from './icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#hero"
          aria-label="Shivam Nagi — home"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-primary transition-colors hover:border-accent hover:text-accent"
        >
          <LogoMark />
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
