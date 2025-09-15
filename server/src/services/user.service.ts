import { AppError } from "@/utils/error/errors";
import { prisma } from "@/utils/prisma";


export const userService = {
  getUserById: async (id: string) => {
    const user = await prisma.user.findUnique({
      where: { id }
    });
    if (!user) {
      throw new AppError("User not found", 404);
    }
    return user;
  },
};
