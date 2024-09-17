'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/battle', label: 'バトル結果' },
    { href: 'https://www.tiktok.com/coin?lang=ja-JP', label: 'コインチャージ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* ロゴをクリックで"/"に戻るようにリンクでラップ */}
          <Link href="/">
            <img src="/images/masao_logo.jpg" alt="Masao Portfolio Logo" className="h-8 cursor-pointer" />
          </Link>
          <nav className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gray-300">
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
