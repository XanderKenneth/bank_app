import { executeQuery } from "../config/database.js";

export const createAccountTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS accountS (
        id SERIAL PRIMARY KEY,
        users_id SERIAL,
        FOREIGN KEY (users_id) REFERENCES users(id) ,
        account_number VARCHAR(10) UNIQUE NOT NULL,
        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `;
        try{
            await executeQuery(query);
            console.log("Accounts table created");
        }catch(error) {
            console.log("error creating users table",error);
} 
}