const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let DBScanSchema = new Schema({
    databaseId: {
        type: Schema.Types.String,
        required: false
    },
    databaseName: {
        type: Schema.Types.String,
        required: false
    },
    tablesScanned: {
        type: Schema.Types.Number,
        required: false
    },
    rowsScanned: {
        type: Schema.Types.Number,
        required: false
    },
}, {
    timestamps: true
});



let DBScan = mongoose.model("db_scans", DBScanSchema);
module.exports = {
    DBScan
};