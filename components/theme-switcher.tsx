'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      applyTheme('light')
    }
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const htmlElement = document.documentElement
    htmlElement.classList.toggle('dark', newTheme === 'dark')
  }

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) return null

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
  ] as const

  return (
    <div className="flex gap-1 bg-secondary rounded p-1">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => handleThemeChange(value)}
          className={cn(
            'p-1.5 rounded transition-all',
            theme === value
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground/60 hover:text-foreground/80'
          )}
          title={label}
          aria-label={`Switch to ${label} theme`}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  )
}
