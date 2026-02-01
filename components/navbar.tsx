'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeSwitcher } from './theme-switcher'

export function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/education', label: 'EDUCATION' },
    { href: '/work', label: 'WORK' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/skills', label: 'SKILLS' },
  ]

  return (
    <nav className="border-b border-border py-4 px-4 sticky top-0 z-20 bg-gradient-to-r from-primary via-blue-500 to-accent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex gap-6 justify-between items-center">
        <div className="flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-all px-3 py-1 rounded',
                  isActive
                    ? 'bg-white/30 text-white'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}
