/*
  Warnings:

  - You are about to alter the column `teamDoxxed` on the `Coin` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Coin` MODIFY `teamDoxxed` VARCHAR(191) NOT NULL;
