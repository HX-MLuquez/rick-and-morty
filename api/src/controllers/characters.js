const axios = require("axios");

function getCharacterId(req, res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((v) => v.data)
    .then((ch) => {
      console.log(ch);
      const character = {
        id: ch.id,
        name: ch.name,
        gender: ch.gender,
        species: ch.species,
        origin: ch.origin?.name,
        image: ch.image,
        status: ch.status,
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(character));
    });
}

function getDetailId(req, res, id) {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((v) => v.data)
    .then((ch) => {
      console.log(ch);
      const character = {
        id: ch.id,
        name: ch.name,
        gender: ch.gender,
        species: ch.species,
        origin: ch.origin?.name,
        image: ch.image,
        status: ch.status,
        location: ch.location.name,
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(character));
    });
}

/*
 <img src={character.image} alt={character.name} />
      <div>
        <h1>{character.name}</h1>
        <h2>{character.species}</h2>
      </div>

      <div className={style.text_contain}>
        <h3>{character.status}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.origin?.name}</h3>
        <h3>{character.location?.name}</h3>
*/
module.exports = {
  getCharacterId,
  getDetailId,
};
