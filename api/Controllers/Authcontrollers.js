import User from "../Models/User.module.js";
import bcryptjs from "bcryptjs";

export const Signupcontrollers = async (req, res, next) => {
    try {
        const { username, useremail, userpassword } = req.body;

        if (!username || !useremail || !userpassword) {
            return res.status(401).send({
                success: false,
                message : "Please provide all detail",
            })
        };

        const exsistinguser = await User.findOne({ useremail });

        if (exsistinguser) return res.status(401).send({
            success: false,
            message: "Account already exsist"
        });

        const hashedpassword = bcryptjs.hashSync(userpassword, 10);

        const user = await User.create({
            username,
            useremail,
            userpassword: hashedpassword
        });
        
        return res.status(201).send({
            success: true,
            message: "User registered Successfully",
            user
        });

        
    } catch (error) {
        next(error)
    }
}