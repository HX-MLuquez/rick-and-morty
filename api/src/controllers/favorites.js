require("dotenv").config(); // process.env

const STATUS_OK = 200;
const STATUS_ERROR = 404;

let myFavorites = [];

function handleFavorites(swap) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (swap) resolve(myFavorites);
      reject("not found favorites");
    }, 1000);
  });
}

async function postFav(req, res) {
  const favorites = await handleFavorites(true);
  const { id, name, status, species, gender, origin, image, location } = req.body;
  try {
    // console.log(":::::::::", id, name, image);
    if (!id || !name || !image) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "The require information is missing" });
    }
    const character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      location
    };
    // console.log(character)
    favorites.push(character);
    res.status(STATUS_OK).json(favorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}
function deleteFav(req, res) {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(STATUS_ERROR).json({ message: "id not found" });
    }
    const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id));
    myFavorites = newFavorites;
    res.status(STATUS_OK).json(myFavorites);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}

module.exports = {
  postFav,
  deleteFav,
};
/*
Crea una función llamada postFav que reciba por parámetro los objetos req y res.
Agrega en tu arreglo de favoritos el personaje que estarás recibiendo por Body.
Finalmente devuelve tu arreglo de favoritos en formato JSON.
Crea una función llamada deleteFav que reciba por parámetro los objetos req y res.
Filtra a tus personajes favoritos de manera que elimines aquel que tiene el mismo id que recibes por Params.
Finalmente devuelve tu arreglo de favoritos en formato JSON.

Exporta ambas funciones.
*/
