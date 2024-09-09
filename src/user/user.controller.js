import { createUser} from "./user.services.js";
import { deleteUserservices } from "./user.services.js";
import { getallusersservices } from "./user.services.js";
import { getalluseridservices } from "./user.services.js";

export const signup = async  (req,res) => {

    
    const { firstname,lastname,email,password} = req.body


    const user = await createUser(firstname,lastname, email, password);

    return res.status(201).json({
        "message":"user has been created ",
        "data" : user
    })
}

export const getallusers = async (req,res) => {
    
    const allusers = await getallusersservices();

    return res.status(201).json({
        "message" :"These are all the users",
        "data" : allusers
    })
}

export const getuserid = async (req,res) => {
    
    const { id } = req.params

    const user = await getalluseridservices(id);

    return res.status(201).json({
        "message" :"These are all the users",
        "data" : user
    })
}

export const deleteduser = async (req,res) => {

    const { id } = req.params
    
    const deleteuser = await deleteUserservices(id);

    return res.status(201).json({
        "message":"user has been deleted ",
        
    })
}