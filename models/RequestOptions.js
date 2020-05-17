const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Header } = require("./Header");

const RequestOptions = new Schema({
    headers: {
        type: Header,
        required: true
    },
    method: {
        type: Schema.Types.String,
        required: true
    },
    path: {
        type: Schema.Types.String,
        required: true
    },
    port: {
        type: Schema.Types.Number,
        required: true
    },
    hostname: {
        type: Schema.Types.String,
        required: true
    }
});


module.exports = {
    RequestOptions
};