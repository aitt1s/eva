import { Router, Request, Response } from 'express'

import authRoutes from './auth'
import { jwtMiddleWare } from './auth/auth-services'

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/hello', jwtMiddleWare, (req: Request, res: Response) => {
  res.send("If you see this, it means you logged!")
})

export default routes