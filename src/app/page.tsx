import { BattleResultList } from "./components/TodoList";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 min-h-screen text-white relative overflow-hidden">
      <h1 className="text-center text-4xl font-extrabold mb-6 tracking-widest uppercase relative z-10">
        TIKTOK
      </h1>
      {/* お得なチャージリンク */}
      <div className="flex justify-center mb-6">
        <a
          href="https://www.tiktok.com/coin?lang=ja-JP"
          className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
        >
          お得なチャージ
        </a>
        <a
          href="https://line.me/ti/g2/PUP2JRRKqZtkKJoTylQetoPUAYxzBo8pIRWRTw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
          className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
        >
          サブスク専用オプチャ
        </a>
        <a
          href="https://www.amazon.co.jp/hz/wishlist/ls?requiresSignIn=1&ref_=nav_AccountFlyout_wl"
          className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 ease-in-out"
        >
          欲しいものリスト
        </a>
      </div>

      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black p-6 rounded-lg shadow-lg relative z-10 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Battle Results</h2>
        <BattleResultList isAdmin={false} />
      </div>
    </div>
  );
}
