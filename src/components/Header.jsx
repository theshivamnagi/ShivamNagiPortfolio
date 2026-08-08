import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#hero"
          className="font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-accent"
        >
          Shivam Nagi — Spec v1.0
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
