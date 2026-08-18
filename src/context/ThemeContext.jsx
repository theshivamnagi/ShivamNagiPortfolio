import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }) {
  const [themePreference, setThemePreference] = useState(getInitialTheme)
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)
  const theme = themePreference === 'system' ? systemTheme : themePreference

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', themePreference)
  }, [theme, themePreference])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event) => {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setThemePreference(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
