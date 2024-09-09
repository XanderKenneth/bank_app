import bcrypt from 'bcryptjs';

export const hashpassword = async(password) =>{
    const salt = await bcrypt.genSalt(10);

    const hashedpassed = await bcrypt.hash(password, salt)

    return hashedpassed
}