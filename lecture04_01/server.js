const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node</h1>");
    res.write("<p>Hello server</p>");
    res.write("<p>Hello ZeroCho</p>");
  })
  .listen(4000, () => {
    console.log("hello server 😎");
  });

server.on("listening", (error) => {
  console.error(error);
});

server.on("server", (error) => {
  console.error(error);
});
