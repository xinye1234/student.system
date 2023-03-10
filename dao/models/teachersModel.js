const { Schema ,model } = require('mongoose');

const teachersSchema = new Schema({
    teacherName: String,
    phone: {
        type: String,
        default:'121212121234'
    },
}, {versionKey: false });
const teachersModel = model('teachersModel',teachersSchema,"teachers");

module.exports.teachersModel = teachersModel;