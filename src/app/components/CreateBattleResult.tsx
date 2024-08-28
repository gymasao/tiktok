import { addBattleResult } from "../lib/action";

export const CreateBattleResultForm = () => {
  return (
    <form action={addBattleResult}>
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* 勝ち負けの選択（ラジオボタン） */}
        <div className="flex items-center space-x-4">
          <label htmlFor="win" className="text-sm font-medium text-gray-300">
            勝ち負け:
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="win"
              name="win"
              value="true"
              className="w-4 h-4 bg-gray-100 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <label htmlFor="win" className="text-sm text-green-400">勝ち</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="lose"
              name="win"
              value="false"
              className="w-4 h-4 bg-gray-100 border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500"
              required
            />
            <label htmlFor="lose" className="text-sm text-red-500">負け</label>
          </div>
        </div>

        {/* 対戦相手入力 */}
        <input
          required
          name="opponent"
          placeholder="対戦相手の名前"
          type="text"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2"
          defaultValue=""
        />

        {/* ポイント入力 */}
        <input
          required
          name="point"
          placeholder="バトルで獲得したポイント"
          type="number"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2"
          defaultValue=""
        />

        {/* 貢献1位入力 */}
        <input
          required
          name="first"
          placeholder="貢献1位"
          type="text"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2"
          defaultValue=""
        />

        {/* 貢献2位入力 */}
        <input
          required
          name="second"
          placeholder="貢献2位"
          type="text"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2"
          defaultValue=""
        />

        {/* 貢献3位入力 */}
        <input
          required
          name="third"
          placeholder="貢献3位"
          type="text"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2"
          defaultValue=""
        />

        {/* 送信ボタン */}
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          結果を追加
        </button>
      </div>
    </form>
  );
};
