-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "inclusions" TEXT[] DEFAULT ARRAY[]::TEXT[];
