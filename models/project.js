'use strict';
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Project = sequelize.define('Project', {
    userId:
    {
      type: DataTypes.INTEGER,

      references: {
        model: 'Users',
        key: 'id'
      }
    },

    name: DataTypes.STRING
  }, {});
  Project.associate = function (models) {
    // associations can be defined here
  };
  return Project;
};