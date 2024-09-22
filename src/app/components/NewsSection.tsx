import Link from 'next/link'

export default function LinkSection() {
  const links = [
    { href: '/battle', label: 'バトル結果' },
    { href: 'https://line.me/ti/g2/PUP2JRRKqZtkKJoTylQetoPUAYxzBo8pIRWRTw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', label: 'サブスク限定オプチャ' },
    { href: 'https://www.tiktok.com/coin?lang=ja-JP', label: 'コインチャージ' },
    { href: 'https://www.freem.ne.jp/win/game/31973', label: 'まさおクエスト' },

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