const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let WebScanSchema = new Schema({

    scannedRequests: {
        type: Schema.Types.Number,
        required: false
    },
}, {
    timestamps: true
});



let WebScan = mongoose.model("web_scans", WebScanSchema);
module.exports = {
    WebScan
};