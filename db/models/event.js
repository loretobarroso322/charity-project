'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
      title: DataTypes.STRING,
      desc: DataTypes.TEXT,
       imgUrl: DataTypes.STRING
    }, {});
    
  Event.init({
    title: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
