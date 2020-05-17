const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AlertSchema = new Schema({
    policyId: {
        type: Schema.Types.String,
        required: true
    },
    ruleId: {
        type: Schema.Types.String,
        required: true
    },
    timestamp: {
        type: Schema.Types.String,
        required: true,

    },
    severityLevel: {
        type: Schema.Types.String,
        required: true,
    },
    ruleType: {
        type: Schema.Types.String,
        required: true,
    },
    detectionType: {
        type: Schema.Types.String,
        required: true,
    },
    childId: {
        type: Schema.Types.String,
        required: true,
    }
});


let Alert = mongoose.model("alerts", AlertSchema);
module.exports = {
    Alert
}