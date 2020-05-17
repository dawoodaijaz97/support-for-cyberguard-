const mongoose = require("mongoose");
const RequestOptions = require("./RequestOptions");
const RequestData = require("./RequestData");
const Schema = mongoose.Schema;

const request_details_schema = new Schema({
    protocol: {
        type: Schema.Types.String,
        required: true
    },
    url: {
        type: Schema.Types.String,
        required: true
    },
    remoteAddress: {
        type: Schema.Types.String,
        required: true,
    },
    timestamp: {
        type: Schema.Types.String,
        required: true
    },
    requestData: {
        type: RequestData,
        required: false
    },
    requestOptions: {
        type: RequestOptions,
        required: true
    },
    checked: {
        type: Schema.Types.Boolean,
        required: true
    }

});

let RequestDetails = mongoose.model("RequestDetails", request_details_schema)

module.exports = {
    RequestDetails
}