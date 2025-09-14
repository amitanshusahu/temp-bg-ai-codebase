import { loginService } from "@/services/auth.service";
import { LoginRequest } from "@/types/zod"
import { errorHandler } from "@/utils/errorHandler"
import { Request, Response } from "express"

export async function loginController(req: Request, res: Response): Promise<Response> {
  try {
    const { email, password } = LoginRequest.parse(req.body);
    const token = loginService(email, password);

    return res.status(200).json({
      success: true,
      message: "login successful",
      data: {
        token
      }
    })
  }
  catch (err) {
    return errorHandler(err, "Error in loginController", res)
  }
}