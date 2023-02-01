const express = require ('express')
const app = express();

const users = [
    {id: 1, name: "Peter Burkard"},
    {id: 2, name: "Janin Möckel"},
    {id: 3, name: "Nicola Süss"},
    {id: 4, name: "Leano Hunzicker"},
    {id: 5, name: "Mila Jud"},
    {id: 5, name: "Mia Mutard"},
    
];

app.get('/',(req,res) => {
    res.send("Hello World")
});

app.listen(4000, ()=>{  
    console.log("listening to prot 4000")
});