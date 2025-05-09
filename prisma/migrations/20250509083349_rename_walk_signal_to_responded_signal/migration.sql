/*
  Warnings:

  - You are about to drop the `walk_signal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "walk_signal" DROP CONSTRAINT "walk_signal_response_id_fkey";

-- DropForeignKey
ALTER TABLE "walk_signal" DROP CONSTRAINT "walk_signal_signal_id_fkey";

-- DropForeignKey
ALTER TABLE "walk_signal" DROP CONSTRAINT "walk_signal_walklog_id_fkey";

-- DropTable
DROP TABLE "walk_signal";

-- CreateTable
CREATE TABLE "responded_signal" (
    "id" SERIAL NOT NULL,
    "walklog_id" INTEGER NOT NULL,
    "signal_id" INTEGER NOT NULL,
    "response_id" INTEGER NOT NULL,
    "responded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "responded_signal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "responded_signal" ADD CONSTRAINT "responded_signal_walklog_id_fkey" FOREIGN KEY ("walklog_id") REFERENCES "walk_log"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responded_signal" ADD CONSTRAINT "responded_signal_signal_id_fkey" FOREIGN KEY ("signal_id") REFERENCES "signal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responded_signal" ADD CONSTRAINT "responded_signal_response_id_fkey" FOREIGN KEY ("response_id") REFERENCES "response"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
