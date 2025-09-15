import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function createUsers() {
  const users: {
    email: string;
    role: UserRole;
  }[] = [
      { email: 'srinulikitha526@gmail.com', role: 'STORE_INCHARGE' },
      { email: 'anbumani@gtb.in', role: 'PROCUREMENT_MANAGER' },
      { email: 'gopi.m@gtb.in', role: 'ACCOUNTS_MANAGER' },
      { email: 'vijay@gtb.in', role: 'ADMIN' }
    ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        password: 'Gtc@123',
        role: user.role,
      },
    });
  }
}

createUsers()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    console.log("Created Users");
    await prisma.$disconnect();
  });
