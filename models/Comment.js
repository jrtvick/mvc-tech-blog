const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    // id: {

    // },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    },
  {
    sequelize
  }
);

module.exports = Comment;
