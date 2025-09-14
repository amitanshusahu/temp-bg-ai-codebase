import { Router } from "express";

const router = Router();

import { healthCheck } from '@controllers/user.controller'

router.get("/health", healthCheck)

export default router