/*
  Warnings:

  - You are about to drop the column `metdata` on the `zapRun` table. All the data in the column will be lost.
  - Added the required column `metadata` to the `zapRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."zapRun" DROP COLUMN "metdata",
ADD COLUMN     "metadata" JSONB NOT NULL;
