export default function NewsSection() {
    const news = [
      { id: 1, title: 'New Project Launch', date: '2023-06-01' },
      { id: 2, title: 'Upcoming Workshop', date: '2023-06-15' },
      { id: 3, title: 'Portfolio Update', date: '2023-06-30' },
    ]
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">News & Updates</h2>
        <ul className="space-y-2">
          {news.map((item) => (
            <li key={item.id} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.date}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }