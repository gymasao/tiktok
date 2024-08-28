/*
  Warnings:

  - You are about to drop the column `date` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `done` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "date",
DROP COLUMN "done",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
