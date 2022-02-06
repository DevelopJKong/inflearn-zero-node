const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

//순서
//미들웨어 작성하기

app.use((req,res) => {
    console.log("모든 요청에 실행하고 싶다");
    next();
});

app.use("/about",(req,res) => {
    console.log("about 요청에 실행하고 싶다");
    next();
});


//컨트롤러 작성하기
app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about",(req,res)=> {
    res.send("hello express");
});
app.post("/",(req,res)=> {
    res.send("hello express");
});

app.use((req,res,next) => {
    res.send("404");
});

//에러 처리하기
//에러를 처리할때는 매개변수를 네개를 꼭 작성해주어야 한다
app.use((err,req,res,next) => {
    console.error(err);
    res.send("에러 입니다 ")
})



const handleListening = () => {
    console.log(`http://localhost:${PORT}`);
}


app.listen(PORT,handleListening);