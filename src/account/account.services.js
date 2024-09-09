// import { executeQuery } from "../config/database.js";

// export const createAccount = async (users_id, account_number) =>{
//     try{
//     const query = `INSERT INTO accounts (users_id, account_number) VALUES ($1, $2) RETURNING *`

//     const results = await executeQuery(query, [users_id,account_number])
//     }catch{
//         console.log("Error creating account");
//     }
// }