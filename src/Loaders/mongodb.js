const mongoose = require("mongoose");
const dotenv = require("dotenv")

async function startDB(){
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("banco de dados inicializado");
}

module.exports = startDB;