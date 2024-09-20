import { addNews } from "../lib/action";

export const CreateNews = () => {
  return (
    <form action={addNews}>
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* 対戦相手入力 */}
        <input
          required
          name="title"
          placeholder="お知らせを記入"
          type="text"
          className="max-w-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2"
          defaultValue=""
        />
        {/* 送信ボタン */}
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          お知らせを追加
        </button>
      </div>
    </form>
  );
};
