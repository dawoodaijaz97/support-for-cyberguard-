const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DCMAlertEndpointRestSchema = new Schema({
    foundData: {
        type: Schema.Types.String,
        required: true
    },
    fileName:{
        type: Schema.Types.String,
        required: true
    },
    filePath:{
        type: Schema.Types.String,
        required: true
    },
    endpointId:{
        type: Schema.Types.String,
        required: true
    }

},{usePushEach: true});


let DCMAlertEndpointRest = mongoose.model("DCM_alerts_endpoint_rest", DCMAlertEndpointRestSchema);
module.exports = {
    DCMAlertEndpointRest
};