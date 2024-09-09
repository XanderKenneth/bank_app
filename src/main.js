import express from "express";
import { users} from "./users.js";
import fs from "fs";
import { config } from "./config/env.js"
import { createAccountTable } from "./account/account.model.js";
import { createUserTable } from "./user/user.model.js";
import { signup } from "./user/user.controller.js";
import { deleteduser } from "./user/user.controller.js";
import { getallusers } from "./user/user.controller.js";
import { getuserid } from "./user/user.controller.js";
// import { createAccount } from "./account/account.services.js";


const app = express();

app.use(express.json()); // body parser


app.post("/signup",signup)

app.get("/allusers",getallusers)

app.get("/getuser/:id",getuserid)

app.post("/deleteuser/:id",deleteduser)


// app.post("/signup/createaccount",createAccount)

app.listen(config.port, async() => {
  await createUserTable();
  await createAccountTable();
  console.log(`server is running on http://localhost:${config.port}`);
});





// {
//   "firstname": "kenneth",
//   "lastname": "umunna",
//   "email": "kennethumunna2",
//   "password": "hfhjfjdffo11#"
// }