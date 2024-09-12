import { Router } from "express";
import { signup,signin,deleteduser,getallusers,getuserid } from "./user.controller.js";
import { verifyUser } from "../middlewares/verifyUsers.js";

export const userRouter = Router()

userRouter.post('/signin',signin)
userRouter.post("/signup",signup)
userRouter.get("/allusers",verifyUser, getallusers)
userRouter.get("/getuser/:id",getuserid)
userRouter.post("/deleteuser/:id",deleteduser)