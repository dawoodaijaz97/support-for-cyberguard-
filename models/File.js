const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const FileSchema = new Schema({
    fileNameOriginal: {
        type: String,
        required: true
    },
    fileNameStorage:{
        type:String,
        required:true
    },
    fileSize: {
        type: Schema.Types.Number,
        required: true,
    },
    filePath: {
        type: String,
        required: true
    },
    mimeType:{
        type: String,
        required: true
    },
    encoding:{
        type: String,
        required: true
    },
    fileSignature: {
        type:String,
        required:true,
    },
    contentSignature:{
        type:String,
        required:true,
    },
});

FileSchema.statics.getFiles = function(file_ids){
  let File = this;
  return File.find({_id:{$in:file_ids}}).then((files)=>{
      return files;
  });
};

let File = mongoose.model("files",FileSchema, "files");
module.exports = {
    File
};
