const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DCMAlertEndpointSchema = new Schema({
    foundData: {
        type: Schema.Types.String,
        required: true
    },
    hostName: {
        type: Schema.Types.String,
        required: true
    },
    hostAddress: {
        type: Schema.Types.String,
        required: true
    },
    event:{
        type: Schema.Types.String,
        required: true
    },
    file:{
        type: Schema.Types.String,
        required: true
    }

});


let DCMAlertEndpoint = mongoose.model("DCM_alert_endpoint", DCMAlertEndpointSchema);
module.exports = {
    DCMAlertEndpoint
};