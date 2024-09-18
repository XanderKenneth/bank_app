import { Router } from "express";
import { createAccountController } from "./account.controllers.js";
import { verifyUser } from "../middlewares/verifyUsers.js";


export const AccountRouter = Router()

AccountRouter.post('/create', verifyUser, createAccountController);