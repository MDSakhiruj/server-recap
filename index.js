const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const Port = process.env.Port || 5000;

const productCollection = require("./Data/data.json");

app.get("/",(req, res)=>{
    res.send('Now server is running');
});

app.get("/allProduct",(req, res) =>{
    res.send(productCollection);
});

app.get("/product/:id",(req, res) =>{
    const id = req.params.id;
    console.log(id);
    const getSingleItem = productCollection?.find((p) => p.id == id);
    if(!getSingleItem){
        res.send("Product don't found in database")
    }
    res.send(getSingleItem);
})


app.listen(Port, () =>{
    console.log("server is running", Port);
})

module.exports = app;