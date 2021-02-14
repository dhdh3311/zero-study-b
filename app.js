'use strict';

const express = require('express');
const app = express();

const userList = []; 
const user = {
    id: userList.length,
    name: "",
    twtId: "",
} 

app.use(express.json());

app.listen(3000, "127.0.0.1", function () {
    console.log("server listen at localhost:3000...");
  });

app.get("/users", function(req, res){
    console.log("user list: ");
    console.log(userList);

    res.send(userList);
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

