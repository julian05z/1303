const express = require ('express')
const app = express();




app.get('/users',(req,res) => {
    res.send("Hello World")
});

app.listen(4000, ()=>{  
    console.log("listening to prot 4000")
});