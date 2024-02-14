'use strict';
const {
    Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinic_Specialty extends Model {
        static associate(models) {
          // define association here
        }
    }
    Doctor_Clinic_Specialty.init({
        address: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Doctor_Clinic_Specialty',
    });
    return Doctor_Clinic_Specialty;
};