'use server';

import { revalidatePath } from 'next/cache';
import prisma from './prisma';

// バトル結果を追加する関数
export const addBattleResult = async (formData: FormData) => {
  const win = formData.get('win') === 'true';  // チェックボックスは'on'またはundefinedとして送信される
  const point = parseInt(formData.get('point') as string, 10);
  const first = formData.get('first') as string;
  const second = formData.get('second') as string;
  const third = formData.get('third') as string;
  const opponent = formData.get("opponent") as string;

  await prisma.battle.create({
    data: {
      win,
      point,
      first,
      second,
      third,
      opponent,
    },
  });

  // ページの再検証
  revalidatePath('/');
};

// バトル結果を削除する関数
export const deleteBattleResult = async (id: number) => {
  await prisma.battle.delete({
    where: { id },
  });

  // ページの再検証
  revalidatePath('/');
};

// すべてのバトル結果を取得する関数
// ページごとにバトル結果を取得する関数
export const getBattlesWithPagination = async (page: number, pageSize: number = 20) => {
  try {
    const battles = await prisma.battle.findMany({
      orderBy: {
        created_at: 'desc',
      },
      skip: (page - 1) * pageSize, // スキップするデータ数
      take: pageSize, // 1ページあたりの取得件数
    });

    const totalBattles = await prisma.battle.count(); // 総バトル数を取得
    return { battles, totalBattles };
  } catch (error) {
    console.error("Error fetching battles:", error);
    return { battles: [], totalBattles: 0 };
  }
};