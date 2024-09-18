import { executeQuery } from "../config/database.js";

export const createAccountTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS accounts (
        id SERIAL PRIMARY KEY,
        userId SERIAL,
        FOREIGN KEY (userId) REFERENCES users(id) ,
        account_number VARCHAR(10) UNIQUE NOT NULL,
        currency VARCHAR(3) NOT NULL CHECK(currency IN ('USD', 'NGN')),
        balance NUMERIC(10,2) DEFAULT 0.00 NOT NULL,
        CHECK(balance >= 0),
        type VARCHAR(10) NOT NULL CHECK(type in ('savings', 'current')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `;
        try{
            await executeQuery(query);
            console.log("Accounts table created");
        }catch(error) {
            console.log("error creating users table",error);
} 
}