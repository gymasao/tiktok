'use client'

import Header from '../components/Header'
import { CreateBattleResultForm } from "../components/CreateBattleResult"
import { BattleResultList } from "../components/BattleResultList"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="max-w-2xl mx-auto p-6 relative overflow-hidden">
        {/* タイトル */}
        <h1 className="text-center text-4xl font-extrabold mb-6 tracking-widest uppercase relative z-10">
          TIKTOK BATTLES
        </h1>

        {/* バトル結果フォーム */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black p-6 rounded-lg shadow-lg relative z-10 border border-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Record Your Battle</h2>
          <CreateBattleResultForm />
        </div>

        {/* バトル結果リスト */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black p-6 rounded-lg shadow-lg relative z-10 border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Battle Results</h2>
          <BattleResultList isAdmin={true} />
        </div>
      </main>
    </div>
  )
}