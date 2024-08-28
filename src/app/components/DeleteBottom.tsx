import { deleteBattleResult } from "../lib/action";

export const DeleteBattleResult = ({ id }: { id: number }) => {
  const deleteBattleResultWithId = deleteBattleResult.bind(null, id);

  return (
    <form action={deleteBattleResultWithId}>
      <button className="px-3 py-1 text-sm font-medium text-white bg-rose-600 rounded-lg cursor-pointer hover:bg-red-700 focus:ring-4 focus:ring-rose-300">
        削除
      </button>
    </form>
  );
};
