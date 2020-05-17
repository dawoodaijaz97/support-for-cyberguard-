const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IDMRuleSchema = new Schema({
    ruleId: {
        type: String,
        required: true
    },
    files: [{
        type:Schema.Types.ObjectId,
        ref:"files"
    }],
    includeTypes: {
        type: String,
        required: true,
    },
    excludeTypes: {
        type: String,
        required: false
    },
    matchPercentage: {
        type: Schema.Types.Number,
        required: true
    }
},{usePushEach: true});
let IDMRule = mongoose.model("IDM_rules", IDMRuleSchema, "IDM_rules");
module.exports = {
    IDMRule
};
