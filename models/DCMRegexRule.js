const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DCMRegexRuleSchema = new Schema({
    ruleId:{
        type:String,
        required:true,
        ref:"rules"
    },
    ruleRegex:{
        type:String,
        required:true
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


let DCMRegexRule = mongoose.model("DCM_regex_rules",DCMRegexRuleSchema, "DCM_regex_rules");
module.exports = {
    DCMRegexRule
};
