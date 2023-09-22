import express from "express";
import { activateUser, getUserInfo, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateUserInfo } from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router()

userRouter.post('/registration', registrationUser)

userRouter.post('/activate-user', activateUser)

userRouter.post('/login', loginUser)

userRouter.post('/logout', isAuthenticated, authorizeRoles("admin"), logoutUser)

userRouter.post('/refresh', updateAccessToken)

userRouter.get('/me', isAuthenticated, getUserInfo)

userRouter.post('/social-auth', socialAuth)

userRouter.put('/user-info', isAuthenticated, updateUserInfo)

userRouter.put('/update-password', isAuthenticated, updatePassword)

export default userRouter