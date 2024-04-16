-- CreateTable
CREATE TABLE "Mineral" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT NOT NULL,
    "specs" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Mineral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mineral_name_key" ON "Mineral"("name");
