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
