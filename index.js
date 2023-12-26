const fs = require("fs");
const http = require("http");

// -----------Read a file Start ----------

// http
//   .createServer((req, res) => {
//     fs.readFile("index.html", (err, data) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(3000, () => console.log("server running on port number 3000"));

// -----------Read a file End ----------

// -------Create file start--------------

// http
//   .createServer((req, res) => {
//     fs.writeFile("text.text", "hello world", (err) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.write("file created successfully");
//       res.end();
//     });
//   })
//   .listen(3000, () => console.log("server running on port number 3000"));

// -------Create file end--------------

//-------Append data-------

http
  .createServer((req, res) => {
    fs.appendFile("text.text", "This is another text", (err) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(" Data appended  successfully\n", "utf8");
      res.end();
    });
  })
  .listen(3000, () => console.log("server running on port number 3000"));
