const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const request_data_schema = new Schema({
    type: {
        type: Schema.Types.String,
        required: true
    },
    data: {
        type: Schema.Types.Buffer,
        required: true
    }
});


module.exports = {
    request_data_schema
}