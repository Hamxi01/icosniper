-- DropForeignKey
ALTER TABLE `PromotedCoin` DROP FOREIGN KEY `PromotedCoin_coinId_fkey`;

-- AddForeignKey
ALTER TABLE `PromotedCoin` ADD CONSTRAINT `PromotedCoin_coinId_fkey` FOREIGN KEY (`coinId`) REFERENCES `Coin`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
