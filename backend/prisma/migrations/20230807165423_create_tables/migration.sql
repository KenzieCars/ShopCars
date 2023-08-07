-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "seller" BOOLEAN DEFAULT false,
    "cellPhone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "street" TEXT,
    "number" INTEGER,
    "complement" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT false,
    "fuel" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "imgCover" TEXT NOT NULL,
    "bestPrice" BOOLEAN DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
