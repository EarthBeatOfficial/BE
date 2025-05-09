/*
  Warnings:

  - You are about to drop the column `distance_id` on the `route` table. All the data in the column will be lost.
  - You are about to drop the `distance` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `distance` to the `route` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "route" DROP CONSTRAINT "route_distance_id_fkey";

-- AlterTable
ALTER TABLE "route" DROP COLUMN "distance_id",
ADD COLUMN     "distance" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "walk_log" ALTER COLUMN "distance" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "distance";
