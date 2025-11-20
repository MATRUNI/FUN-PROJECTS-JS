const express = require("express");
const cors= require("cors");

const app=express();

app.use(cors());

const home=require("os").homedir();

const fs=require("fs");

app.get("/home", (req, res)=>
{
    fs.readdir(home, (err, fileNames)=>
    {
        if(err)
            throw err;
        res.json(filterDot(fileNames))
    })
})

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