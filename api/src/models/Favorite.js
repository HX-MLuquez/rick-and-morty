/*
FAVORITE
id
name
status
species
gender
image 
origin 
location
*/

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
      },
      origin: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['Male', 'Female', 'unknown', 'Genderless']],
        }
      },
      location: {
        type: DataTypes.STRING,
      },
    //   pesoEspiritul: {
    //     type: DataTypes.FLOAT, // num con decimales
    //   }
    },
    { timestamps: false }
  );
};
