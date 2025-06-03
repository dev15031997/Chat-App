import express from "express";
import dotenv from "dotenv"; 
dotenv.config({});

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});