const express = require("express");
const port=8000;
const app=express();

//setting up database
const db=require("./config/mongoose");
const Todo=require("./models/todo");


// setting up view engine
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.urlencoded());



// setting up static assets
app.use(express.static("assets"));

// get functions for home
app.get("/",function(req,res){
    
    Todo.find({},function(err,tasks){
        if(err)
        {
            console.log("Error fetching database");
            return;
        }
        return res.render("home",{title:"To Do App",
        task_list:tasks,
    })
    })
})

// post action of form
app.post("/create-task",function(req,res)
{
    console.log(req.body);
    Todo.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newTask){
        if(err){
            console.log("Error writing to database");
            return;
        }
        console.log("*********",newTask);
        return res.redirect("/")
    })
})

//delete tasks
app.post("/delete-task",function(req,res){

    console.log(req.body.name);
    Todo.remove({_id:req.body.name},function(err,obj){
        if(err)
        {
            console.log("Error deleting rom database");
            return;
        }
        console.log("records deleted");
        
        
        return res.redirect("/");
    })
    
})







// listening to app a port 8000
app.listen(port,function(err){

    if(err)
    {
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
})