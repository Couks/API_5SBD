import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function processTemporaryTable() {
  const tempOrders = await prisma.temporaryOrder.findMany();

  for (const tempOrder of tempOrders) {
    let customer = await prisma.customer.findUnique({
      where: { email: tempOrder.buyerEmail },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          email: tempOrder.buyerEmail,
          name: tempOrder.buyerName,
          cpf: tempOrder.cpf,
          phoneNumber: tempOrder.buyerPhoneNumber,
        },
      });
    }

    let product = await prisma.product.findUnique({
      where: { sku: tempOrder.sku },
    });

    if (!product) {
      product = await prisma.product.create({
        data: {
          sku: tempOrder.sku,
          name: tempOrder.productName,
          price: tempOrder.itemPrice,
          stock: 5,
        },
      });
    }

    let order = await prisma.order.findUnique({
      where: { orderId: tempOrder.orderId },
    });

    if (!order) {
      order = await prisma.order.create({
        data: {
          orderId: tempOrder.orderId,
          purchaseDate: tempOrder.purchaseDate,
          paymentsDate: tempOrder.paymentsDate,
          customerId: customer.id,
        },
      });
    }

    await prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: product.id,
        quantity: tempOrder.quantityPurchased,
        price: tempOrder.itemPrice,
      },
    });
  }

  console.log("Temporary table data processed.");
}

processTemporaryTable();
