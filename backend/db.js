const mongoose = require("mongoose");

const MONGOURL = "mongodb://localhost:27017/ITGeeks"

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