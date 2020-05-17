const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DCMIdentifierRuleSchema = new Schema({
    ruleId:{
        type:String,
        required:true,
        ref:"rules"
    },
    identifierId:{
        type:String,
        required:true,
    },
    exclude:{
        type:String,
        required:false
    },
    detectionCount:{
        type:String,
        required:true
    },
    minimumIncidents:{
        type:Schema.Types.Number,
        required:true
    }
});


let DCMIdentifierRule = mongoose.model("DCM_identifier_rules",DCMIdentifierRuleSchema);
module.exports = {
    DCMIdentifierRule
}