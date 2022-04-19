const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get("/", (req,res)=>{
    res.send("<h1> Hello Mama, ki khobor ? </h1>");
});


app.listen(port, ()=>{
    console.log("listening from ", port);
});
