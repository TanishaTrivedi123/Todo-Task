const mongoose = require("mongoose");

const MONGOURL = "mongodb+srv://todo-app:7hsfPkz3CXov6Jrj@cluster0.btdzt.mongodb.net/todoDB?retryWrites=true&w=majority"

const db = async () => {
    try{
        await mongoose.connect(MONGOURL);
        console.log("Database is connected successfully");
    }
    catch(error){
        console.log("Database is not connected successfully");
    }
}

module.exports = db;