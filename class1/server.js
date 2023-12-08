//server instantiate
const express = require('express');
const app = express() ;

//server live on port 8000
app.listen(8000 , ()=>{
    console.log('server is running on port 8000');
})

//used to parse json in express ->PUT or PUSH 
var bodyParser = require('body-parser');

//parse json() and add to req.body();
app.use(bodyParser.json());

app.get('/', (req , res)=>{
    res.send("heelolo")
})

app.post('/api/cars', (req, res)=>{
    const {name , brand} = red.body;
    console.log(name , brand);
    res.send({name , brand});
})