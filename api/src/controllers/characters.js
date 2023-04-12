const axios = require("axios");

require("dotenv").config(); // process.env

const URL = process.env.API_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

function getCharById(req, res) {
  const { id } = req.params;
  try {
    axios.get(`${URL}${id}`).then(({ data }) => {
      if (data) {
        const character = {
          id: data.id,
          status: data.status,
          name: data.name,
          species: data.species,
          origin: data.origin?.name,
          image: data.image,
          gender: data.gender,
          location: data.location?.name
        };
        res.status(STATUS_OK).json(character);
      } else {
        res.status(STATUS_ERROR).json({ message: "character not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

function getAllChar(req, res) {
  try {
    axios.get(`${URL}`).then(({ data }) => {
      if (data) {
        // *** ERROR al usar filter y no map para editar los campos y que estaba en data.results
        const characters = data.results.map((ch) => {
          const character = {
            id: ch.id,
            status: ch.status,
            name: ch.name,
            species: ch.species,
            origin: ch.origin?.name,
            image: ch.image,
            gender: ch.gender,
          };
          return character;
        });
        // console.log(":::", characters);
        res.status(STATUS_OK).json(characters);
      } else {
        res.status(STATUS_ERROR).json({ message: "character not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getCharById,
  getAllChar,
};
