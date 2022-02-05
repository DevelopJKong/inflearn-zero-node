const express = require("express");

const app = express();
const PORT = 3000;


app.get("/",(req,res)=> {
    res.send("hello express");
});

app.get("/about",(req,res)=> {
    res.send("hello express");
});
app.post("/",(req,res)=> {
    res.send("hello express");
});



const handleListening = () => {
    console.log(`http://localhost:${PORT}`);
}


app.listen(PORT,handleListening);