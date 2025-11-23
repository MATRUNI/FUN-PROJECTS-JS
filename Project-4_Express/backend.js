const express = require("express");
const cors= require("cors");

const app=express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const home = require("os").homedir();

=======
const home=require("os").homedir();
let pwd=home;
>>>>>>> 544eb8c33d1c22afb783f53fe80f8a8a7ac331ab
const fs=require("fs");

app.get("/home", (req, res) =>
{
    fs.readdir(home, (err, fileNames)=>
    {
        if(err)
            throw err;
        res.json(filterDot(fileNames))
    })
});

app.post("", (req, res)=>{
    if(req.body.forward)
    {
        // console.log("BODY: ", req.body);
        pwd+="/"+req.body.body;
        // console.log(pwd)
        res.json({
            message: "Accepted",
            data: req.body
        });
    }
    else
    {
        pwd=pwd.replace("/"+req.body.body, "");
        console.log(pwd);
        res.json({
            message: "Accepted",
            data: req.body
        });
    }
});


app.get("",(req, res)=>{
    fs.readdir(pwd, (err, files)=>{
        if(err)
            throw err;
        res.json(filterDot(files))
    });
});


app.listen(3000, ()=>{
    console.log("Server Running on port: 3000");
    console.log("http://localhost:3000");
})

function filterDot(item)
{
    return item.filter(e=>{
        if(e[0]!=".")
            return e;
    });
}