// // const express = require("express")

// // const port = 3200;

// // const greetname = (req, res ) => {
// //     res.send('hello i am greeting a person')
// // }
// // const app = express();

// // app.get("/", (req,res) => {
// //     console.log(`hello i am in the main route`);
// //     console.log(`hello this is the new home page`);
// // })

// // app.get("/greet", (req,res) => {
// //     res.send("Hello, World!");
// // })
// // app.get("greet-name", greetname)

// // app.listen(port, () => {
// //     console.log(`server is running `);
// // })









// import express from "express";
// import { users } from "./users.js";
// import fs from "fs";

// const app = express();
// const port = 3200;

// app.use(express.json());

// // Validation middleware
// const validateEmail = (req, res, next) => {
//   const email = req.body.email;
//   const userExist = users.find((user) => user.email === email);
//   if (userExist) {
//     return res.status(409).json({ message: "user with this email already exists" });
//   }
//   next();
// };

// const validateUsername = (req, res, next) => {
//   const username = req.body.username;
//   const userExist = users.find((user) => user.username === username);
//   if (userExist) {
//     return res.status(409).json({ message: "user with this username already exists" });
//   }
//   next();
// };

// // Signup route
// app.post("/signup", validateEmail, validateUsername, (req, res) => {
//   console.log(req.body);
//   const { username, email, password } = req.body;
//   const id = users.length + 1;
//   const newUser = { id, username, email, password };
//   users.push(newUser);

//   const stringUsers = JSON.stringify(users);
//   fs.writeFileSync("/Users/mac/nitdev3.2/src/users.js", `export let users = ${stringUsers}`);

//   return res.status(201).json({
//     message: "user has been created",
//     data: newUser, // Return the new user directly
//   });
// });

// app.listen(port, () => {
//   console.log(`server is running on http://localhost:${port}`);
// });











