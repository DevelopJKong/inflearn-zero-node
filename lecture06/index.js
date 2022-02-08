const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const app = express();
const PORT = 3000;

//순서
//미들웨어 작성하기

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.json()); // 클라이언트에서 json 데이터를 parsing 할 떄 사용한다
app.use(express.urlencoded({ extended: true })); //form 데이터를 parsing 할때 사용하고
//app.use("요청 경로",express.static('실제 경로'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "jeongbinpassword",
    cookie: {
      httpOnly:true,
    }
  })
);
app.use(multer().array());
app.use(
  (req, res) => {
    console.log("모든 요청에 실행하고 싶다");
    next();
  },
  (req, res, next) => {
    try {
      console.log("에러 발생");
    } catch (error) {
      next(error);
    }
  }
);

app.use("/about", (req, res) => {
  console.log("about 요청에 실행하고 싶다");
  next();
});

//컨트롤러 작성하기
app.get("/", (req, res) => {
  /*res.writeHead(200,{'Content-Type' : 'application/json'});
    res.end(JSON.stringify({ hello : 'jeong'}));*/

  //위와 아래 코드가 같다
  //res.json({ hello: "jeong" });

  // req.cookies; // {mycookie: 'test'}
  // req.signedCookies;
  // res.cookie('name',encodeURIComponent(name), {
  //     expires: new Date(),
  //     httpOnly: true,
  //     path: '/'
  // })
  // res.clearCookie('name',encodeURIComponent(name), {
  //     httpOnly: true,
  //     path: '/'
  // });

  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.send("hello express");
});
app.post("/", (req, res) => {
  res.send("hello express");
});

app.use((req, res, next) => {
  res.send("404");
});

//에러 처리하기
//에러를 처리할때는 매개변수를 네개를 꼭 작성해주어야 한다
app.use((err, req, res, next) => {
  console.error(err);
  res.send("에러 입니다 ");
});

const handleListening = () => {
  console.log(`http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
