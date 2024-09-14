import Image from 'next/image'

type Listener = {
  id: number
  name: string
  image: string
}

const listeners: Listener[] = [
  { id: 1, name: "Ura", image: "/images/ura.jpg" },
  { id: 2, name: "よっしー", image: "/images/yosshi.jpg" },
  { id: 3, name: "まいこ", image: "/images/maiko.jpg" },
  { id: 4, name: "さえ", image: "/images/sae.jpg" },
  { id: 5, name: "ひよこ", image: "/images/hiyoko.jpg" },
  { id: 6, name: "machiko", image: "/images/machiko.jpg" },
  { id: 7, name: "プリン", image: "/images/purin.jpg" },
  { id: 8, name: "たかパラ", image: "/images/takapara.jpg" },
  { id: 9, name: "もっち", image: "/images/mocchi.jpg" },
  { id: 10, name: "Sara", image: "/images/sara.jpg" },
]

export default function GridSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">先月活躍したリスナー</h2>
      <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
        {listeners.map((listener, index) => (
          <div 
            key={listener.id} 
            className={`bg-gray-200 rounded-lg p-4 flex flex-col items-center justify-center
              ${index === 0 ? 'col-span-4' : 
                (index === 1 || index === 2) ? 'col-span-2' : 'col-span-1'}`}
          >
            <Image
              src={listener.image}
              alt={listener.name}
              width={80}
              height={80}
              className="rounded-full mb-2"
            />
            <p className="text-center font-semibold">{listener.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}