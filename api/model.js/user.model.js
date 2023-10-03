import mongoose, { Schema } from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        typeof:String,
        require:true,
        unique:true
    },
    email:{
        typeof:String,
        require:true,
        unique:true
    },
    password:{
        typeof:String,
        require:true,
       
    },
},{timestamps:true});
const User=mongoose.model('User',userSchema);

export default User;