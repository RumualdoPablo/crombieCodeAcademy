/*
  Warnings:

  - You are about to drop the column `products` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `categoyID` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `stock` on the `product` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `categoryID` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Product_category_key` ON `product`;

-- DropIndex
DROP INDEX `Product_categoyID_key` ON `product`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `products`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `category`,
    DROP COLUMN `categoyID`,
    ADD COLUMN `categoryID` INTEGER NOT NULL,
    MODIFY `price` DOUBLE NOT NULL,
    MODIFY `stock` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryID_fkey` FOREIGN KEY (`categoryID`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
