const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IDMAlertWebSchema = new Schema({

    matchPercentage: {
        type: Schema.Types.Number,
        required: true
    },
    fileId: {
        type: Schema.Types.String,
        required: true
    },
    hostAddress: {
        type: Schema.Types.String,
        required: true
    },
    requestDetailId: {
        type: Schema.Types.String,
        required: true
    },
    scanId: {
        type: Schema.Types.String,
        required: true,
    }
});


let IDMAlertWeb = mongoose.model("IDM_alert_web", IDMAlertWebSchema);
module.exports = {
    IDMAlertWeb
};