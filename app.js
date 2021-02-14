'use strict';

const express = require('express');
const app = express();

const IP = "127.0.0.1";
const HOST = 3000;

const userList = []; 
const user = {
    id: "",
    name: "",
    twtId: "",
} 


app.use(express.urlencoded({ extended: false })); // 정확히 어떤기능인지 정확히 이해 못했음. 공부 중 
app.use(express.json()); // Q. body-parser와 동일한 기능? 

app.listen(HOST, IP, function () {
    console.log("server listen at localhost:3000...");
});

app.get("/users", function(req, res){
    if (userList.length > 0) {
        
        return res.send(userList);
    }
  
    return res.send("There is no user data.")
});

// TODO: refactoring, return 수 줄이기
app.get("/user/:id", function(req, res){
    console.log("req id: "+ req.params.id);

    const userById = userList.find((item)=>{
        return item.id === req.params.id;
    })

    if (userById !== null) {
        return res.send(userById);
    }
  
    return res.send("There is no user of requested id.");
});

app.post("/user", function(req, res){
    console.log(`request address : ${req.path}`);

    user.id = req.body.id;
    user.name = req.body.name;
    user.twtId = req.body.twtId;

    const copiedUser = JSON.parse(JSON.stringify(user)); // deep copy
    userList.push(copiedUser);

    console.log(userList);
    res.send("Successfully added user data!");
})

