import prisma from "@/app/lib/prisma";
import { DeleteBattleResult } from "./DeleteBottom";

type BattleResultListProps = {
  isAdmin: boolean;
};

export const BattleResultList = async ({ isAdmin }: BattleResultListProps) => {
  // すべてのバトル結果を取得し、作成日時で降順にソート
  const battles = await prisma.battle.findMany({
    orderBy: {
      created_at: 'desc', // 降順でソート
    },
  });

  return (
    <div className="space-y-5">
      {battles.map((battle) => {
        return (
          <div
            key={battle.id}
            className="flex flex-col items-center p-5 bg-gray-800 rounded-lg shadow-md"
          >
            {/* 勝ち負けの結果 */}
            <div className="mb-4 text-center">
              <p className={`font-medium ${battle.win ? 'text-green-400' : 'text-red-500'}`}>
                勝ち負け: {battle.win ? '勝ち' : '負け'}
              </p>
              <p className="text-sm text-gray-300">対戦相手: {battle.opponent}</p>
              <p className="text-sm text-gray-300">日時: {new Date(battle.created_at).toLocaleString()}</p>
              <p className="text-sm text-gray-300">ポイント: {battle.point}</p>
            </div>

            {/* 表彰台スタイルの貢献者リスト */}
            <div className="flex flex-col items-center">
              {/* 1位 */}
              <div className="flex flex-col items-center mb-4 transform scale-110">
                <div className="bg-yellow-500 text-white px-3 py-1 rounded-t-md w-full text-center">1位</div>
                <div className="bg-yellow-600 text-white text-sm px-5 py-3 rounded-md shadow-lg w-full text-center">
                  🥇 {battle.first}
                </div>
              </div>

              {/* 2位と3位を横並びに配置 */}
              <div className="flex items-end justify-center space-x-4 w-full">
                {/* 2位 */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-600 text-white px-3 py-1 rounded-t-md w-full text-center">2位</div>
                  <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-md w-full text-center">
                    🏅 {battle.second}
                  </div>
                </div>

                {/* 3位 */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-600 text-white px-3 py-1 rounded-t-md w-full text-center">3位</div>
                  <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-md w-full text-center">
                    🏅 {battle.third}
                  </div>
                </div>
              </div>
            </div>

            {isAdmin && <DeleteBattleResult id={battle.id} />}
          </div>
        );
      })}
    </div>
  );
};
