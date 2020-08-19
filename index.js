/*
const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const pathURL = parsedURL.pathname;
    let file;

    pathURL === "/"
      ? (file = "./html/index.html")
      : pathURL !== "/contact" && pathURL !== "/about"
      ? (file = "./html/404.html")
      : (file = `./html${pathURL}.html`);

    fs.readFile(file, (error, data) => {
      let writeMsg;
      let writeNum;
      error
        ? ((writeMsg = error), (writeNum = 404))
        : ((writeMsg = data), (writeNum = 200));
      res.writeHead(writeNum, { "Content-Type": "text/html" });
      res.write(writeMsg);
      res.end();
    });
  })
  .listen(8080);
  */

const express = require("express");
const app = express();
const hostname = "localhost";
const port = 8001;
const root = "./html";

app.get("/", (req, res) => {
  res.sendFile("index.html", { root });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root });
});

app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root });
});

app.get("*", (req, res) => {
  res.sendFile("404.html", { root });
});

app.listen(`${port}`, () =>
  console.log(`Server running at http://${hostname}:${port}!`)
);
