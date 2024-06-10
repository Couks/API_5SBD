"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
  // Cria um novo usuário
  const newCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
    },
  });
  console.log("Created new customer:", newCustomer);
  // Obtém todos os usuários
  const allCustomers = await prisma.customer.findMany();
  console.log("All customers:", allCustomers);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
