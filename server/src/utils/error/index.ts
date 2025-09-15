import { Response } from "express";
import { AppError } from "./errors";

export function errorHandler(err: unknown, context: string, res: Response) {
  console.error(`[${context}]`, err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      logs: err.logs || []
    });
  }

  // fallback for unexpected errors
  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });
}
