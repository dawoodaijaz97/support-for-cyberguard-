const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EndpointSchema = new Schema({
    endpointHostName: {
        type: Schema.Types.String,
        required: true,
        unique:true,
    },
    createdBy: {
        type: Schema.Types.String,
        required: true
    },
    status: {
        type: Schema.Types.String,
        required: true
    },
    endpointHostIP: {
        type: Schema.Types.String,
        required: true
    },
    lastConnected: {
        type: Schema.Types.String,
        required: true
    },
    endpointLAN:{
        type: Schema.Types.String,
        required: true
    },
    endpointPolicyGroup:{
        type: Schema.Types.String,
        required: true
    }
},{timestamps:true});


let Endpoint = mongoose.model("endpoints", EndpointSchema, "endpoints");
module.exports = {
    Endpoint
};