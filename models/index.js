'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');
const { getUsers } = require('./users')
const getLifes = require('./life')

const getProjectModel = require('./project')
const getFriendModel = require('./friend')

// new sequlize object created
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {

  Users: getUsers(sequelize),
  Lifes: getLifes(sequelize),
  Project: getProjectModel(sequelize),
  Friend: getFriendModel(sequelize)

};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
