import {Request, Response} from "express"

export async function healthCheck(req: Request, res: Response) : Promise<Response> {
  return res.status(200).json({
    success: true,
    message: "Server is up and running"
  })
}