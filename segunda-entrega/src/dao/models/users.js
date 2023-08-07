import mongoose from 'mongoose';

const userCollection = 'Users';

const usersSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:Number,
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["M","F"]
    },
    role:{
        type:String,
        default:'user'
    },

})

export const userModel = mongoose.model(userCollection,usersSchema);