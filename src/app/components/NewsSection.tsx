import Link from 'next/link'

export default function LinkSection() {
  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-blue-500 text-white text-center py-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}