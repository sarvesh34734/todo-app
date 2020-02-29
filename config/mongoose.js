// require the mongoose lirary
const mongoose=require("mongoose");

// connect to the database
const url= process.env.MONGODB_URI || "mongodb://localhost/todo_app_db";
mongoose.connect(url);

// acquire the connection and check if it is successfull
const db=mongoose.connection;

// if there is an error connecting to the database
db.on("error",console.error.bind("Error connecting to the database: :("));

// display successfull connection upon connecting to the db
db.once("open",function(){
    console.log("Successfully connected to the database :)");
})