const http = require("http")
const { readFile } = require("fs")
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Hi, Welcome!`)
    return
  } else if (req.url === "/api") {
    readFile(`${__dirname}/Dev-Data/Data.json`, "utf-8", (rej, data) => {
      res.end(data)
    })
  }
})
server.listen(3000)
