const http = require("http");
const fs = require("fs").promises;

const server = http
  .createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    const data = await fs.readFile("./server2.html");
    res.end(data);
  })
  .listen(8000);

server.on("listening", () => {
  console.log("8000번 포트에서 서버 대기 중입니다");
});

server.on("error", (error) => {
  console.error(error);
});
