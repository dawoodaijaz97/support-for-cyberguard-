const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DataIdentifierSchema = new Schema({
    identifierName: {
        type: Schema.Types.String,
        required: true
    },
    identifierRegex: {
        type: Schema.Types.String,
        required: true
    },
    checks: {
        type: [Schema.Types.String],
        required: true,
    },
});


let DataIdentifier = mongoose.model("data_identifiers", DataIdentifierSchema);
module.exports = {
    DataIdentifier
}