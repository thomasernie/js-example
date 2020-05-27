'use strict';
const { DataTypes } = require('sequelize');
function getUsers(sequelize) {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    Users.Life = Users.hasOne(models.Lifes)
    Users.Friends = Users.belongsToMany(models.Friend, { as: 'friends', through: 'Friend' })
    Users.Project = Users.hasMany(models.Project)
  };
  return Users;
}

module.exports = { getUsers };