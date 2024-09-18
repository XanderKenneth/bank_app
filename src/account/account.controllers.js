import { createAccount, getAccountByNumber } from "./account.services.js";
import { createAccountSchema } from "./account.validator.js";


export const createAccountController = async(req, res) =>{

    try {
        
        const user = req.user;

    if(!user) return res.status(401).json({
        message: "You must be logged in to create an account"
    })

    const {error, value} = createAccountSchema.validate(req.body)

    if(error) return res.status(400).json({
        message: error.details[0].message
    })

    const accNum = user.phonenumber.slice(1)

    const [accExists] = await getAccountByNumber(accNum)

    if(accExists) return res.status(409).json({
        message: "You have created an account already!!"
    })

    const acc = await createAccount(user.id, user.phonenumber.slice(1), value.currency, value.type);

    console.log(acc);

    return res.status(201).json({
        message: "User account created",
        account: acc
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        })    
    }


}
