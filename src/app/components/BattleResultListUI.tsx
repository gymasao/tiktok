'use client';

import { useState, useEffect } from 'react';
import { getBattlesWithPagination } from "../lib/action";
import { DeleteBattleResult } from "./DeleteBottom";

type BattleResultListUIProps = {
    battles: any[];
    totalBattles: number;
    isAdmin: boolean;
};

export default function BattleResultListUI({ battles: initialBattles, totalBattles, isAdmin }: BattleResultListUIProps) {
    const [battles, setBattles] = useState(initialBattles);
    const [page, setPage] = useState(1); // 現在のページ番号
    const pageSize = 10;

    // ページが変更されたときにデータを取得する
    useEffect(() => {
        const fetchBattles = async () => {
            const { battles } = await getBattlesWithPagination(page, pageSize);
            setBattles(battles);
        };

        fetchBattles();
    }, [page]);

    const totalPages = Math.ceil(totalBattles / pageSize);

    return (
        <div className="space-y-5">
            {battles.map((battle) => (
                <div
                    key={battle.id}
                    className="flex flex-col items-center p-5 bg-gray-800 rounded-lg shadow-md"
                >
                    <div className="mb-4 text-center">
                        <p className={`font-medium ${battle.win ? 'text-green-400' : 'text-red-500'}`}>
                            勝ち負け: {battle.win ? '勝ち' : '負け'}
                        </p>
                        <p className="text-sm text-gray-300">対戦相手: {battle.opponent}</p>
                        <p className="text-sm text-gray-300">日時: {new Date(battle.created_at).toLocaleString()}</p>
                        <p className="text-sm text-gray-300">ポイント: {battle.point}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex flex-col items-center mb-4 transform scale-110">
                            <div className="bg-yellow-500 text-white px-3 py-1 rounded-t-md w-full text-center">
                                1位
                            </div>
                            <div className="bg-yellow-600 text-white text-sm px-5 py-3 rounded-md shadow-lg w-full text-center">
                                🥇 {battle.first}
                            </div>
                        </div>

                        <div className="flex items-end justify-center space-x-4 w-full">
                            <div className="flex flex-col items-center">
                                <div className="bg-gray-600 text-white px-3 py-1 rounded-t-md w-full text-center">
                                    2位
                                </div>
                                <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-md w-full text-center">
                                    🏅 {battle.second}
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="bg-gray-600 text-white px-3 py-1 rounded-t-md w-full text-center">
                                    3位
                                </div>
                                <div className="bg-gray-700 text-white text-sm px-4 py-2 rounded-md w-full text-center">
                                    🏅 {battle.third}
                                </div>
                            </div>
                        </div>
                    </div>

                    {isAdmin && <DeleteBattleResult id={battle.id} />}
                </div>
            ))}

            {/* ページネーションのボタン */}
            <div className="flex justify-center space-x-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                    前の20件
                </button>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                    次の20件
                </button>
            </div>
            <p className="text-center text-gray-400 mt-4">ページ {page} / {totalPages}</p>
        </div>
    );
}
