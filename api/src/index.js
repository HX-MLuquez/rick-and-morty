const http = require("http");
const characters = require("./utils/data.js");

const PORT = 3001;
http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // /rickandmorty/character/:id  /rickandmorty/characters
    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];
    // console.log(url)
    if (param1 === "rickandmorty" && param2 === "characters") {
      // /rickandmorty/characters
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(characters));
    }
    if (param1 === "rickandmorty" && param2 === "character") {
      // /rickandmorty/character/:id   // 1 al 40
      const character = characters.find((ch) => {
        return ch.id === Number(id);
      });
      if (character)
        return res
          .writeHead(200, { "Content-type": "application/json" })
          .end(JSON.stringify(character));
    }

    return res
      .writeHead(404, { "Content-type": "text/plain" })
      .end("Not found");
  })
  .listen(PORT, () => {
    console.log("in port http://localhost:3001");
  });
