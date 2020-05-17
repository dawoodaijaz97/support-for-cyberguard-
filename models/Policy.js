const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let PolicySchema = new Schema({
    policyName: {
        type: String,
        unique: true,
        required: true,
    },
    policyDescription: {
        type: String,
        required: true
    },
    policyGroup: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    policyStatus: {
        type: Boolean,
        required: true
    },
    rules:[{
        type:Schema.Types.ObjectId,
        ref:"rules"
    }],
    exceptions: {
        type: String,
        required: false
    }


}, {timestamps: true,usePushEach:true});

// PolicySchema.plugin(uniqueValidator);

PolicySchema.statics.getPolicies =  function(){
  let Policy = this;
  let policies = Policy.find({}).then((policies)=> {return policies});
  console.log(policies);
  return policies;
};

let Policy = mongoose.model("policies", PolicySchema, "policies");
module.exports = {
    Policy
};
