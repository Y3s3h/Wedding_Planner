-- AlterTable
ALTER TABLE "Package" ADD COLUMN     "inclusions" TEXT[];

-- CreateTable
CREATE TABLE "VendorGallery" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "vendorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VendorGallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VendorGallery" ADD CONSTRAINT "VendorGallery_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
