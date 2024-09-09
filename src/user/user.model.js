import { executeQuery } from "../config/database.js";

export const createUserTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(255),
        lastname  VARCHAR(255) ,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;
    try{
        await executeQuery(query);
        console.log("users table created");
    }catch(error) {
        console.log("error creating users table",error);
    }
}


export const deleteUser = async () => {
    const query = `
    DELETE FROM users WHERE id = $1
    `;
    try{
        await executeQuery(query)
        console.log(`This user has been sucessfully deleted`);
    }catch(error){
        console.log(`There was an error in deleting this user`,error);
    }
}