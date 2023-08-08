-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "imgGalery" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
