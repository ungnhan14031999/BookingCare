'use strict';
const {
    Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        static associate(models) {
          // define association here
        }
    }
    Clinic.init({
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};