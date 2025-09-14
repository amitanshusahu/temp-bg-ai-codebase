import express from 'express'
import cors from 'cors'

export const app = express();

import userRoutes from '@routes/user.routes'

app.use(cors())
app.use(express.json());

app.use("/api/v1/user", userRoutes)