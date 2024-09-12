import { createUser} from "./user.services.js";
import { getallusersservices, getalluseridservices, getUserByEmail, deleteUserservices } from "./user.services.js";
import { signupSchema ,signinSchema} from "./user.validator.js";
import { comparePassword, hashpassword } from "../utils/bcrypt.js";
import {sanitize, sanitizeUserArray } from "../utils/sanitizeUsers.js";
import { generateToken } from "../utils/jwt.js";


export const signup = async  (req,res) => {

    const { error, value} = signupSchema.validate(req.body)

    // console.log(error)

    if(error) return res.status(400).json({
        message: error.details[0].message
    })


    const { firstname,lastname,email,password} = value;

    const hashedpassword = await hashpassword(password)

    // console.log(hashedpassword);

    const userExists =  await getUserByEmail(email);

    if (userExists.length > 0) return res.status(409).json({
        message: `User with email ${email} already exists`
    })

    const [userdetails] = await createUser(firstname,lastname, email, hashedpassword);

    return res.status(201).json({
        "message":"user has been created ",
        "data" : sanitize(userdetails)
    })
}

export const getallusers = async (req,res) => {

    const currUser = req.user;

    if (currUser.email == "Kennethumunna123@gmail.com") return res.status(401).json({
        "message": "i hate any Kenneth!!"
    })
    
    const allusers = await getallusersservices();

    

    const sanitized = sanitizeUserArray(allusers);

    return res.status(200).json({
        "message" :"These are all the users",
        "data" : sanitized
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


export const signin = async (req,res) => {

    const { error, value} = signinSchema.validate(req.body)

    if (error) return res.status(400).json({
        "message" : error.details[0].message
    })

    const {email,password} = value;

    const [user] = await getUserByEmail(email);

    if (!user) return res.status(404).json({
        message: "No user with such email"
    })

    const isMatch = await comparePassword(password, user.password)

    if (!isMatch) return res.status(404).json({
        message : "Invalid credentials"
    })

    const accessToken = generateToken(sanitize(user))

    return res.status(200).json({
        message : "User loggedin succesfully",
        accessToken : accessToken
    })           



}