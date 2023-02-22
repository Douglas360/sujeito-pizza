-- CreateTable
CREATE TABLE "t_category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "t_product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_order" (
    "id" TEXT NOT NULL,
    "table" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "t_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_item" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "t_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "t_product" ADD CONSTRAINT "t_product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "t_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_item" ADD CONSTRAINT "t_item_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "t_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_item" ADD CONSTRAINT "t_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "t_product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
