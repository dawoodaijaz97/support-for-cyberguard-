const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DatabaseSchema = new Schema({
    databaseName: {
        type: Schema.Types.String,
        required: true,
        unique:true,
    },
    databaseIP:{
        type: Schema.Types.String,
        required:true,
    },
    databasePort:{
        type: Schema.Types.Number,
        required:true
    },
    databaseUsername:{
        type: Schema.Types.String,

    },
    databasePassword:{
        type: Schema.Types.String,
    },
    createdBy: {
        type: Schema.Types.String,
        required: true
    },
    databasePolicyGroup:{
        type: Schema.Types.String,
        required: true
    }
},{timestamps:true});


let Database = mongoose.model("databases", DatabaseSchema, "databases");
module.exports = {
    Database
};