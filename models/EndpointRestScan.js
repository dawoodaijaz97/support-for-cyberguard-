const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let EndpointRestScanSchema = new Schema({

    totalFilesScanned: {
        type: Schema.Types.Number,
        required: false
    },
    totalDetections: {
        type: Schema.Types.Number,
        required: false
    },
    alerts: [{
        type: Schema.Types.String,
        required: false
    }],
    endpointsScanned: {
        type: Schema.Types.Number,
        required: false
    }
}, {
    timestamps: true
});


let EndpointRestScan = mongoose.model("endpoint_rest_scans", EndpointRestScanSchema);
module.exports = {
    EndpointRestScan
};