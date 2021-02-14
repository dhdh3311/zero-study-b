'use strict';

const express = require('express');
const app = express();

const IP = "127.0.0.1";
const HOST = 3000;

const userList = []; 
const user = {
    id: userList.length,
    name: "",
    twtId: "",
} 

app.use(express.json()); // Q. body-parser와 동일한 기능? 

app.listen(HOST, IP, function () {
    console.log("server listen at localhost:3000...");
});

app.get("/users", function(req, res){
    if (userList.length > 0) {
        res.send(userList)
    }
  
    res.send("There is no user data.")
});

app.post("/user", function(req, res){
    console.log(`request address : ${req.path}`);

    user.id = userList.length;
    user.name = req.body.name;
    user.twtId = req.body.twtId;
    userList.push(user);

    console.log(userList);
    res.send("Successfully added user data!");
})

