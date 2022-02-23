-- CreateTable
CREATE TABLE "Restaurant" (
    "id" SERIAL NOT NULL,
    "area" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "foodType" TEXT NOT NULL,
    "mainFood" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);
