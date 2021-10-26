const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const User = require("./User");
const Blog = require("./Blog");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    comment_content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: User, key: "id" },
    },

    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Blog, key: "id" },
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    freezeTableName: true,
    modelName: "comment",
  }
);
module.exports = Comment;
