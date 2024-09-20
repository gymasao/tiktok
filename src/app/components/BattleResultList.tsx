import { getBattlesWithPagination } from "../lib/action";
import BattleResultListUI from "./BattleResultListUI";

type BattleResultListProps = {
  isAdmin: boolean;
};

// サーバーコンポーネントでデータを取得
export const BattleResultList = async ({ isAdmin }: BattleResultListProps) => {
  const pageSize = 10;
  const { battles, totalBattles } = await getBattlesWithPagination(1, pageSize); // 最初のページのバトルを取得

  // クライアントサイドにUIとデータを渡す
  return <BattleResultListUI battles={battles} totalBattles={totalBattles} isAdmin={isAdmin} />;
};
