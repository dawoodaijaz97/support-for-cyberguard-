const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DCMAlertWebSchema = new Schema({
    foundData: {
        type: Schema.Types.String,
        required: true
    },
    detectionCount: {
        type: Number,
        required: true
    },
    hostAddress: {
        type: Schema.Types.String,
        required: true
    },
    requestDetailId: {
        type: Schema.Types.String,
        required: true
    },scanId: {
        type: Schema.Types.String,
        required: true,
    }
});


let DCMAlertWeb = mongoose.model("DCM_alert_web", DCMAlertWebSchema);
module.exports = {
    DCMAlertWeb
}