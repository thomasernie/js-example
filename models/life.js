'use strict';
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Lives = sequelize.define('Lives', {
    from: DataTypes.DATE,
    till: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {});
  Lives.associate = function (models) {
    // associations can be defined here
  };
  return Lives;
};