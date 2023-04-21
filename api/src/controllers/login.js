require("dotenv").config(); // process.env
const { User } = require("../db");

const DB_EMAIL = process.env.EMAIL;
const DB_PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

function login(req, res) {
  // const {id}= req.params // pendiente
  const { password, email } = req.query;
  // /login?password=1234&email=www
  try {
    if (!password || !email) {
      return res
        .status(500)
        .json({ message: "There isn't a password or email" });
    }
    if (password === DB_PASSWORD && email === DB_EMAIL) {
      res.status(STATUS_OK).json({ access: true });
    } else {
      // console.log("in error");
      res.status(STATUS_OK).json({ access: false });
    }
  } catch (error) {
    res.status(STATUS_ERROR).json(error);
  }
}

async function register(req, res) {
  const { password, email, id } = req.query;
  console.log(":::::::::::::::");
  try {
    if (!password || !email) {
      return res
        .status(500)
        .json({ message: "There isn't a password or email" });
    }
    if (password === DB_PASSWORD && email === DB_EMAIL) {
      const user = await User.create({ password, email, id });
      res.status(STATUS_OK).json(user);
    } else {
      res.status(STATUS_ERROR).json({ message: "password incorrect" });
    }
  } catch (error) {
    res.status(STATUS_ERROR).json(error);
  }
}

module.exports = {
  login,
  register,
};
