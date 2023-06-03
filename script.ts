import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function main() {
  // ... voce vai escrever as queries do seu prisma client aqui

  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
