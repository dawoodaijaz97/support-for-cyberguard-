const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const InterceptFileSchema = new Schema({

    fileName: {
        type: String,
        required: true
    },
    fileSize: {
        type: Schema.Types.Number,
        required: true,
    },
    filePath: {
        type: String,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    },
    extention: {
        type: String,
        required: true
    },
    requestDetailId: {
        type: String,
        required: true
    }
});



let InterceptFile = mongoose.model("intercept_files", InterceptFileSchema);
module.exports = {
    InterceptFile
};