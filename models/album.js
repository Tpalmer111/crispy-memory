'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.album.hasOne(models.user)
      models.album.hasOne(models.review)
      models.album.hasOne(models.comment)
    }
  }
  album.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    release: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'album',
  });
  return album;
};