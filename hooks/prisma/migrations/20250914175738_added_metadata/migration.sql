/*
  Warnings:

  - Added the required column `metdata` to the `zapRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."zapRun" ADD COLUMN     "metdata" JSONB NOT NULL;
