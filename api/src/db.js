require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const { users, favorites } = require("./models");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  // URL
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/bucaramanga`,
  { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
users(sequelize);
favorites(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: 'UserFavorite', timestamps: false });
Favorite.belongsToMany(User, { through: 'UserFavorite', timestamps: false });

module.exports = {
  // User,
  // Favorite,
  ...sequelize.models,
  conn: sequelize,
};

/*
sequelize: {
    models:{
        User: {
            name
            create: f()
            fidOne: f()
        },
        Favorite: {
            name
            create: f()
            fidOne: f()
        }
    },
    define: f(),
    sync: f()
}
*/
