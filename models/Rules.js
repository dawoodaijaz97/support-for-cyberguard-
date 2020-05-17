const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RuleSchema = new Schema({

    ruleName:{
        unique:true,
        type:String,
        required: true
    },
    ruleType:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    ruleDescription:{
        type:String,
        required:true
    },
    severityLevel:{
        type:String,
        required:true
    }
},{timestamps:true});

RuleSchema.statics.getRules = function(rules_id){
    let Rule = this;
    return Rule.find({_id:{$in:rules_id}}).then((rules)=>{
        return rules;
    });

};

let Rule = mongoose.model("rules", RuleSchema, "rules");
module.exports = {
    Rule
};