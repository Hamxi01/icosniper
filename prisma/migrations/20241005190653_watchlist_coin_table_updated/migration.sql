/*
  Warnings:

  - A unique constraint covering the columns `[userId,coinId]` on the table `WatchlistCoin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `WatchlistCoin_userId_coinId_key` ON `WatchlistCoin`(`userId`, `coinId`);
