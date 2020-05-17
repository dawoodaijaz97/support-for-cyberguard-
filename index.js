const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const {Policy} = require('./models/Policy');
const {Rule} = require("./models/Rules");
const {DataIdentifier} = require("./models/DataIdentifier");
const {File} = require("./models/File");
const {Alert} = require("./models/Alert");
const {DCMAlertWeb} = require("./models/DCMAlertWeb");
const {DCMAlertEndpoint} = require("./models/DCMAlertEndpoint");
const {RequestDetails} = require("./models/requestDetails");
const {WebScan} = require("./models/WebScan");
const {IDMAlertWeb} = require("./models/IDMAlertWeb");
const {Endpoint} = require("./models/Endpoint");
const {DCMIdentifierRule} = require("./models/DCMDataIdentifierRule");
const {EndpointRestScan} = require("./models/EndpointRestScan");
const {DCMAlertEndpointRest} = require("./models/DCMAlertEndpointRest");
const {DCMRegexRule} = require("./models/DCMRegexRule");
const {IDMRule} = require("./models/IDMRule");
const {InterceptFile} = require("./models/InterceptFile");


let connect = function () {
    console.log("connecting to database");
    let promise = mongoose.connect("mongodb://127.0.0.1:27017/CyberGuard_Database", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    mongoose.connection.once("once", function () {
        console.log("Connected To Mongoose");
    });
    mongoose.connection.on("error", function () {
        console.log("Error On Connecting With Mongoose");
    });
    return promise;

};

let args = process.argv;
let mode = args[2];

console.log(mode);

connect().then(async function () {

    if (mode === "delete_all") {

        //delete_all_data



    } else if (mode === "delete_alerts_rules") {
        await Alert.remove({});
        console.log(1);
        await DCMAlertEndpoint.remove({});
        console.log(2);
        await DCMAlertEndpointRest.remove({});
        console.log(3);
        await DCMAlertWeb.remove({});
        console.log(4);
        await DCMIdentifierRule.remove({});
        console.log(5);
        await DCMRegexRule.remove({});
        console.log(6);
        await EndpointRestScan.remove({});
        console.log(7);
        await File.remove({});
        console.log(8);
        await IDMAlertWeb.remove({});
        console.log(9);
        await IDMRule.remove({});
        console.log(10);
        await Policy.remove({});
        console.log(11);
        await RequestDetails.remove({});
        console.log(12);
        await Rule.remove({});
        console.log(12);
        await WebScan.remove({});
        console.log(14);
        await InterceptFile.remove({});
        console.log(15);
        return "done";
    } else if (mode === "delete_alerts") {
        await Alert.remove({});
        console.log(1);
        await DCMAlertEndpoint.remove({});
        console.log(2);
        await DCMAlertEndpointRest.remove({});
        console.log(3);
        await DCMAlertWeb.remove({});
        console.log(4);
        await EndpointRestScan.remove({});
        console.log(5);
        await File.remove({});
        console.log(6);
        await IDMRule.remove({});
        console.log(7);
        await RequestDetails.remove({});
        console.log(8);
    }

});