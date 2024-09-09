import { executeQuery } from "../config/database.js";


export const createUser = async (firstname, lastname, email, password) => {
    try{
        const query = `INSERT INTO users (firstname,lastname , email, password) VALUES ($1 , $2 ,$3 ,$4) RETURNING *;
        
        `
        const result = await executeQuery(query, [firstname, lastname, email, password]);
        return result;
    }catch(error){
        console.error("error inserting into users!! ",error)
    }
}

export const getallusersservices = async () => {
    try{
        const query = `
        SELECT * FROM users ;
        `

        const result = await executeQuery(query);
        return result;
    }catch(error){
        console.log(`There was an error getting all users`,error);
    }
}

export const getalluseridservices = async (id) => {
    try{
        const query = `
        SELECT * FROM users WHERE id = $1  ;
        `

        const result = await executeQuery(query,[id]);
        return result;
    }catch(error){
        console.log(`User not found`,error);
    }
}

export const deleteUserservices = async (id) => {
    try{
        const query = `DELETE FROM users WHERE id = $1 RETURNING * ;
        `
        const result = await executeQuery (query,[id]);
    }catch(error){
        console.log('There was an error in deleting the user',error);
    }
}