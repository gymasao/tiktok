'use client'; // クライアントコンポーネントとしてマーク

import { useEffect, useState } from 'react';
import { getAllNews } from "../lib/action";

// ニュースの型を定義
type NewsItem = {
  id: number;
  title: string;
  created_at: Date;
};

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const fetchedNews = await getAllNews();
      setNews(fetchedNews);
      setLoading(false);
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">News & Updates</h2>
      <ul className="space-y-2">
        {news.map((item) => (
          <li key={item.id} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{new Date(item.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
