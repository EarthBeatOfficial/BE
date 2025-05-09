/*
  Warnings:

  - You are about to drop the `duration` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "route" DROP CONSTRAINT "route_distance_id_fkey";

-- DropTable
DROP TABLE "duration";

-- CreateTable
CREATE TABLE "distance" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "distance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "route" ADD CONSTRAINT "route_distance_id_fkey" FOREIGN KEY ("distance_id") REFERENCES "distance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
