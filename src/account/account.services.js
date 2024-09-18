import { executeQuery } from "../config/database.js";

export const createAccount = async (userId, accountNumber, currency, type) =>{
    try{
    const query = `INSERT INTO accounts (userId, account_number, currency, type) VALUES ($1, $2, $3, $4) RETURNING *
    `

    const results = await executeQuery(query, [userId,accountNumber, currency, type])

    return results
    }catch(error){
        throw new Error(error)
    }
}


export const getAccountByNumber = async(accountNumber) =>{
    try {
        const query = `SELECT * FROM accounts where account_number = $1`
        const results = await executeQuery(query, [accountNumber])

        return results
    } catch (error) {
        throw new Error(error);
    }
}
