'use strict';
const {
    Model, BOOLEAN, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        static associate(models) {
            // define association here
        }
    }
    Booking.init({
        statusId: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
        patientID: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};