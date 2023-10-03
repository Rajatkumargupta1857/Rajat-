import express from 'express';
import mongoose from 'mongoose';

// import dotenv from 'dotenv';
// dotenv.config();
// require('dotenv').config()


//  mongoose.connect(process.env.MONGO).then(()=>{
//     console.log("you are connected to the mongoose");
//  }).catch((err)=>{
//     console.log(err)
//  })
mongoose.connect("mongodb+srv://rajatkumargupta80:MauKINfOOCX32ssE@cluster0.uwpw3pv.mongodb.net/RealEstateXpress?retryWrites=true&w=majority&appName=AtlasApp").then(()=>{
    console.log("mongoose is connected");
}).catch((err)=>{
    console.log(err);
})


const app= express();

app.listen(5173, ()=>{
    console.log("Server is running on port  5173 !!");
})