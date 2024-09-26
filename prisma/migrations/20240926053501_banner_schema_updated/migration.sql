-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `launchDate` DATETIME(3) NOT NULL,
    `auditLink` VARCHAR(191) NULL,
    `teamDoxxed` VARCHAR(191) NULL,
    `softcap` DOUBLE NULL,
    `presaleLink` VARCHAR(191) NULL,
    `hardcap` DOUBLE NULL,
    `presaleDate` DATETIME(3) NULL,
    `whitelist` BOOLEAN NULL,
    `description` VARCHAR(191) NOT NULL,
    `socials` JSON NOT NULL,
    `contactEmail` VARCHAR(191) NOT NULL,
    `contactTelegram` VARCHAR(191) NOT NULL,
    `marketCap` DOUBLE NULL,
    `price` DOUBLE NULL,
    `volume` DOUBLE NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TokenContractAddress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coinId` INTEGER NOT NULL,
    `Chain` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vote` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coinId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Banner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `media` VARCHAR(191) NOT NULL,
    `launchDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `placement` VARCHAR(191) NOT NULL,
    `value` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `mediaType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PromotedCoin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coinId` INTEGER NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HottestPair` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coinId` INTEGER NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `News` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `tags` JSON NOT NULL,
    `categories` JSON NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Meta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitorIp` VARCHAR(191) NOT NULL,
    `visitTime` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `browser` VARCHAR(191) NOT NULL,
    `os` VARCHAR(191) NOT NULL,
    `device` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `referrer` VARCHAR(191) NULL,
    `pageViews` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Coin` ADD CONSTRAINT `Coin_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TokenContractAddress` ADD CONSTRAINT `TokenContractAddress_coinId_fkey` FOREIGN KEY (`coinId`) REFERENCES `Coin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_coinId_fkey` FOREIGN KEY (`coinId`) REFERENCES `Coin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PromotedCoin` ADD CONSTRAINT `PromotedCoin_coinId_fkey` FOREIGN KEY (`coinId`) REFERENCES `Coin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HottestPair` ADD CONSTRAINT `HottestPair_coinId_fkey` FOREIGN KEY (`coinId`) REFERENCES `Coin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
