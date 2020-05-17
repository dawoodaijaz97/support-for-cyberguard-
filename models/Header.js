const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Header = new Schema({
    Host: {
        type: Schema.Types.String,
        required: true
    },
    Accept: {
        type: Schema.Types.String,
        required: true
    },
    Referer: {
        type: Schema.Types.String,
        required: true
    },
    Connection: {
        type: Schema.Types.String,
        required: true
    },
    Cookie: {
        type: Schema.Types.String,
        required: true
    }
});

module.exports = {
    Header
}