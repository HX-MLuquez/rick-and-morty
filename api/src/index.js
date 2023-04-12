const app = require("./app")

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
   console.log(`Server raised in port: http://localhost:${PORT}`);
});







































// const http = require("http");
// const characters = require("./utils/data.js");
// const axios = require("axios");
// const { getCharacterId, getDetailId } = require("./controllers/characters.js");

// const PORT = 3001;
// http
//   .createServer(function (req, res) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     // /rickandmorty/character/:id  /rickandmorty/characters
//     const url = req.url.split("/");
//     const param1 = url[1];
//     const param2 = url[2];
//     const id = url[3];
//     // console.log(url)
//     if (param1 === "rickandmorty" && param2 === "characters") {
//       // /rickandmorty/characters
//       res.writeHead(200, { "Content-type": "application/json" });
//       return res.end(JSON.stringify(characters));
//     }
//     if (param1 === "rickandmorty" && param2 === "character") {
//       // console.log("02::::id:", id);
//       return getCharacterId(req, res, id);
//     }
//     if (param1 === "rickandmorty" && param2 === "detail") {
//       // console.log("02::::id:", id);
//       return getDetailId(req, res, id);
//     }

//     return res
//       .writeHead(404, { "Content-type": "text/plain" })
//       .end("Not found");
//   })
//   .listen(PORT, () => {
//     console.log("in port http://localhost:3001");
//   });
