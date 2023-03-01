/*
  Warnings:

  - You are about to drop the column `phot_url` on the `vehicle` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "sold" BOOLEAN NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://www.ofertadia.com.br/wp-content/themes/deals/images/store-default.png',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_vehicle" ("brand", "createdAt", "description", "id", "image", "name", "sold", "updatedAt", "year") SELECT "brand", "createdAt", "description", "id", "image", "name", "sold", "updatedAt", "year" FROM "vehicle";
DROP TABLE "vehicle";
ALTER TABLE "new_vehicle" RENAME TO "vehicle";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
