'use strict';
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Friend = sequelize.define('Friend', {
    friendId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {});
  Friend.associate = function (models) {
    // associations can be defined here

  };
  return Friend;
};