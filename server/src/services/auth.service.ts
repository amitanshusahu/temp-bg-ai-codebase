import { AppError } from "@/utils/error/errors";
import { generateJwt } from "@/utils/jwt";
import { prisma } from "@/utils/prisma";

export async function loginService(email: string, password: string): Promise<string> {
  const user = await prisma.user.findFirst({
    where: { email, password }
  });

  if (!user) {
    throw new AppError("User not found", 400);
  }

  return generateJwt({ id: user.id, email: user.email });
}

