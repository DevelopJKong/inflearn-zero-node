const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;





app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about",(req,res)=> {
    res.send("hello express");
});
app.post("/",(req,res)=> {
    res.send("hello express");
});


app.use((req,res) => {
    console.log("모든 요청에 실행하고 싶다");
    next();
});



const handleListening = () => {
    console.log(`http://localhost:${PORT}`);
}


app.listen(PORT,handleListening);