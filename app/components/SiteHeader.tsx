'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/angebote', label: 'Angebote' },
  { href: '/buchempfehlungen', label: 'Buchempfehlungen' },
  { href: '/termine', label: 'Termine' },
  { href: '/vita', label: 'Vita' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header>
      {isHome && (
        <div className="relative h-52 sm:h-64">
          <Image
            src="/header-pages.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="bg-white/90 px-6 py-4 text-center">
              <h1 className="font-serif text-4xl text-stone-900 sm:text-5xl">
                Bücher erleben
              </h1>
              <p className="mt-1 text-sm text-stone-700">
                Literaturpädagogin Andrea Warthemann
              </p>
            </div>
          </div>
        </div>
      )}

      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 bg-white px-6 py-4">
        {!isHome && (
          <Link href="/" className="font-serif text-xl text-stone-900">
            Bücher erleben
          </Link>
        )}
        <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-md ${isHome ? 'mx-auto' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'text-stone-900 underline' : 'text-stone-600'}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}