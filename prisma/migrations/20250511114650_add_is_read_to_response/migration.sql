/*
  Warnings:

  - You are about to drop the column `has_unread_response` on the `signal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "response" ADD COLUMN     "is_read" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "signal" DROP COLUMN "has_unread_response";
