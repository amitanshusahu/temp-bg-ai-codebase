-- CreateEnum
CREATE TYPE "public"."MaterialCategory" AS ENUM ('CIVIL', 'PLUMBING', 'ELECTRICAL', 'INTERIOR', 'EXTERIOR', 'OTHER');

-- CreateTable
CREATE TABLE "public"."MaterialInvoice" (
    "id" TEXT NOT NULL,
    "dateOfReceipt" TIMESTAMP(3) NOT NULL,
    "vendorName" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "deliveryChallanNumber" TEXT NOT NULL,
    "vehicleNumber" TEXT NOT NULL,
    "materialCategory" "public"."MaterialCategory" NOT NULL,
    "hnsCode" TEXT NOT NULL,
    "uom" TEXT NOT NULL,
    "vendorContactNumber" TEXT NOT NULL,
    "poNumber" TEXT NOT NULL,
    "poDate" TIMESTAMP(3) NOT NULL,
    "purposeOfMaterial" TEXT NOT NULL,
    "invoiceAttachment" TEXT NOT NULL,
    "mrnNumber" TEXT NOT NULL,
    "ginNumber" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "paidOn" TIMESTAMP(3),
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "updatedBy" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MaterialInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InvoiceMaterialItem" (
    "id" TEXT NOT NULL,
    "materialInvoiceId" TEXT NOT NULL,
    "category" "public"."MaterialCategory" NOT NULL,
    "hnsCode" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "ratePerUnit" DOUBLE PRECISION NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "updatedBy" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "InvoiceMaterialItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DcEntry" (
    "id" TEXT NOT NULL,
    "dateOfReceipt" TIMESTAMP(3) NOT NULL,
    "vendorName" TEXT NOT NULL,
    "dcNumber" TEXT NOT NULL,
    "vehicleNumber" TEXT NOT NULL,
    "materialDescription" TEXT NOT NULL,
    "uom" TEXT NOT NULL,
    "receivedQuantity" DOUBLE PRECISION NOT NULL,
    "purposeOfMaterial" TEXT NOT NULL,
    "dcAttachment" TEXT NOT NULL,
    "bmrnNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" TEXT,
    "updatedBy" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "DcEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."InvoiceMaterialItem" ADD CONSTRAINT "InvoiceMaterialItem_materialInvoiceId_fkey" FOREIGN KEY ("materialInvoiceId") REFERENCES "public"."MaterialInvoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
