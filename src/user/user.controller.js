import { createUser} from "./user.services.js";
import { getallusersservices, getalluseridservices, getUserByEmail, deleteUserservices } from "./user.services.js";
import { signupSchema } from "./user.validator.js";
import { hashpassword } from "./utils/bcrypt.js";

export const signup = async  (req,res) => {

    const { error, value} = signupSchema.validate(req.body)

    // console.log(error)

    if(error) return res.status(400).json({
        message: error.details[0].message
    })


    const { firstname,lastname,email,password} = value;

    const hashedpassword = await hashpassword(password)

    console.log(hashedpassword);

    const userExists =  await getUserByEmail(email);

    if (userExists.length > 0) return res.status(409).json({
        message: `User with email ${email} already exists`
    })

    const user = await createUser(firstname,lastname, email, hashedpassword);

    return res.status(201).json({
        "message":"user has been created ",
        "data" : user
    })
}

export const getallusers = async (req,res) => {
    
    const allusers = await getallusersservices();

    return res.status(200).json({
        "message" :"These are all the users",
        "data" : allusers
    })
}

export const getuserid = async (req,res) => {
    
    const { id } = req.params

    const user = await getalluseridservices(id);

    return res.status(201).json({
        "message" :"This is the the user",
        "data" : user
    })
}

export const deleteduser = async (req,res) => {

    const { id } = req.params
    
    const deleteuser = await deleteUserservices(id);

    return res.status(204).json({
        "message":"user has been deleted ",
        
    })
}