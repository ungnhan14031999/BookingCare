'use strict';
const {
    Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        static associate(models) {
            // define association here
        }
    }
    Schedule.init({
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        doctorID: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};