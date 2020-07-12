const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DCMAlertDBRestSchema = new Schema({

    foundData: {
        type: Schema.Types.String,
        required: true
    },
    detectionCount: {
        type: Number,
        required: true
    },
    databaseId: {
        type: Schema.Types.String,
        required: true
    },
    databaseName: {
        type: Schema.Types.String,
        required: true
    },
    tableName: {
        type: Schema.Types.String,
        required: true
    },
    scanId: {
        type: Schema.Types.String,
        required: true,
    }
});


let DCMAlertDBRest = mongoose.model("DCM_alert_DB_rest", DCMAlertDBRestSchema);
module.exports = {
    DCMAlertDBRest
};