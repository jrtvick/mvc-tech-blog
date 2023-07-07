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
    }
    // ,
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   allowNull: false
    // }
    },
  {
    sequelize,
    // timestamps: false,
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'comment'
  }
);

module.exports = Comment;
