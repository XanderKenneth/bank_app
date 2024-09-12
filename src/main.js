import express from "express";
import { config } from "./config/env.js"
import { createAccountTable } from "./account/account.model.js";
import { createUserTable } from "./user/user.model.js";
import { signup,signin,deleteduser,getallusers,getuserid } from "./user/user.controller.js";
import { userRouter } from "./user/user.routes.js";




const app = express();

app.use(express.json()); // body parser


app.use('/users', userRouter)




// app.post("/signup/createaccount",createAccount)

app.listen(config.port, async() => {
  await createUserTable();
  await createAccountTable();
  console.log(`server is running on http://localhost: ${config.port}`);
});





