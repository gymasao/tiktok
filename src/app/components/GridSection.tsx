import Image from 'next/image'

type Listener = {
  id: number
  name: string
  image: string
}

const listeners: Listener[] = [
  { id: 1, name: "Top Listener", image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Alice", image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Bob", image: "/placeholder.svg?height=100&width=100" },
  { id: 4, name: "Charlie", image: "/placeholder.svg?height=100&width=100" },
  { id: 5, name: "David", image: "/placeholder.svg?height=100&width=100" },
  { id: 6, name: "Eve", image: "/placeholder.svg?height=100&width=100" },
  { id: 7, name: "Frank", image: "/placeholder.svg?height=100&width=100" },
  { id: 8, name: "Grace", image: "/placeholder.svg?height=100&width=100" },
  { id: 9, name: "Henry", image: "/placeholder.svg?height=100&width=100" },
  { id: 10, name: "Ivy", image: "/placeholder.svg?height=100&width=100" },
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