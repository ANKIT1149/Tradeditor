import mongoose from "mongoose";
import validator from "validator";

const Userschema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Username is required"],
    },
    
    useremail: {
        type: String,
        require: [true, "Email is required"],
        unique: true,
        validate: validator.isEmail,
    },

    userpassword: {
        type: String,
        require: [true, "Password is required"],
        minlength : [6, "Password length is minimum allowed is 6"],
    },
}, {timestamps: true});

const User = mongoose.model("User", Userschema);

export default User;