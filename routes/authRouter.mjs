import express from 'express'
import AuthController from '../controllers/AuthController.mjs'
import auth from '../midlleWare/auth.mjs'


const authRouter = express.Router()

authRouter.post('/register', AuthController.register)
authRouter.post('/login', AuthController.login)
authRouter.get('/auth-user', auth, AuthController.getAuthUser)
authRouter.post('/activate', AuthController.activateUser)
authRouter.post("/recover-password", AuthController.recoverPassword);
authRouter.post("/update-password", AuthController.updatePassword);


export default authRouter