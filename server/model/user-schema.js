import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:1,
        max:20
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:1,
        max:20
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:20
    }

});

const user=mongoose.model('user',userSchema);

export default user;