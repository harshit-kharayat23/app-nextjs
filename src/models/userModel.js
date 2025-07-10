import mongoose from "mongoose";


const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:[true,"Please Provide username"],
        unique:true,
    },
    email:{
        type:String,
        unique:[true,"Please Provide Email"],
        lowercase:true,
        required:true,
    },
    password:{
        type:string,
        required:[true,"Please Provide Password"],
        trim:true,
    }



})

const User=mongoose.model("User",userSchema);
export default User;

