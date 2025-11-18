const express= require("express");

const app=express();

app.use(express.json());

app.get("/get", (req, res)=>{
    res.send("Hello there! GET working.");
});


app.post("/post", (req, res)=>{
    console.log(req.body);
    res.json({
        message:"POST Successful!",
        recievedDATA: req.body
    });
});

app.listen(3000, ()=>{
    console.log("Server RUnning on port: 3000");
});