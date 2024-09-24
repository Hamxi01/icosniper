/*
  Warnings:

  - You are about to drop the column `address` on the `Coin` table. All the data in the column will be lost.
  - You are about to drop the column `chain` on the `Coin` table. All the data in the column will be lost.
  - You are about to drop the `Presale` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Presale` DROP FOREIGN KEY `Presale_coinId_fkey`;

-- AlterTable
ALTER TABLE `Coin` DROP COLUMN `address`,
    DROP COLUMN `chain`,
    ADD COLUMN `hardcap` DOUBLE NULL,
    ADD COLUMN `presaleDate` DATETIME(3) NULL,
    ADD COLUMN `presaleLink` VARCHAR(191) NULL,
    ADD COLUMN `softcap` DOUBLE NULL,
    ADD COLUMN `whitelist` BOOLEAN NULL;

-- DropTable
DROP TABLE `Presale`;

-- CreateTable
CREATE TABLE `TokenContractAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coinId` INTEGER NOT NULL,
    `Chain` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TokenContractAddress` ADD CONSTRAINT `TokenContractAddress_coinId_fkey` FOREIGN KEY (`coinId`) REFERENCES `Coin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
