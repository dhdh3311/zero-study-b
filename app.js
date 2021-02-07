'use strict';

const express = require('express');
const app = express();

const userList = []; 
const user = {
    id: 0,
    name: "",
    twitterId: "",
} 

app.use(express.json());

app.listen(3000, "127.0.0.1", function () {
    console.log("server listen at localhost:3000...");
  });

app.get("/users", function(req, res){
    console.log(`request addr : ${req.path}`);
    
    res.send(userList);
});

app.post("/user", function(req, res){
    console.log(`request addr : ${req.path}`);

    user.name = req.body.name;
    user.twitterId = req.body.twitterId;
    userList.push(user);

    console.log(userList);
    res.send("Successfully added user data!");
})

