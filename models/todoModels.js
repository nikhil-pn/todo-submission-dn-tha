const { DataTypes } = require("sequelize");
const { createDB } = require("../config/db");

const Todo = createDB.define("todos", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  dueDate: DataTypes.STRING,
  completed: DataTypes.BOOLEAN,
  priority: DataTypes.NUMBER,
});

module.exports = Todo;
