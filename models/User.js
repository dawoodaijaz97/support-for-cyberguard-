const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const user_schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        maxlength: 18,
        minlength: 1,
        message: "Username Invalid Or Already Taken"
    },
    password: {
        type: String,
        unique: false,
        require: true,
        trim: true,
        minlength: 8,
        message: "Password Is Not Valid"
    },
    token: {
        type: String,
    }
});

user_schema.statics.addUser = function(myUser) {
    let userModel = this;
    let user = new userModel({ fName: myUser.fName, lName: myUser.lName, email: myUser.email, username: myUser.username, password: myUser.password });
    return user.save().then(() => {
        console.log("User Saved In Database");
        return user.generateToken();
    });
};

user_schema.statics.findByCredentials = function(username, password) {
    let userModel = this;
    return userModel.findOne({ username }).then((user) => {
        if (!user) {
            return Promise.reject({msg:"Invalid Username", status:401});
        }
        console.log("checking password");
        console.log(JSON.stringify(user));
        try {
            bcrypt.genSalt(10).then((salt) => {
                console.log("Generating Salt");
                bcrypt.hash(password, salt).then((hash) => {
                    console.log("Hash"+hash);
                });
            }).catch((e) => {
                console.log(e);
            });
            let res = bcrypt.compareSync(password, user.password);
            console.log("res = " + JSON.stringify(res));
            if (res === true) {
                console.log("Credentials Matched");
                return Promise.resolve(user);
            } else if (res === false)
                return Promise.reject({msg:"Invalid Password", status:401});
        } catch (e) {
            return Promise.reject("Error Occured= " + e);
        }
    });
};

user_schema.methods.generateToken = function() {
    let user = this;
    let token = jwt.sign({ id: user._id.toHexString() }, "This Is The Salt").toString();
    user.token = token;
    return user.save().then(() => {
        return token;
    }).catch((e) => {
        return e;
    });
};


user_schema.pre("save", function(next) {
    let user = this;
    if (user.isModified("password")) {
        bcrypt.genSalt(10).then((salt) => {
            console.log("Generating Salt");
            bcrypt.hash(user.password, salt).then((hash) => {
                console.log("Generating Hash");
                user.password = hash;
                next();
            });
        }).catch((e) => {
            console.log(e);
        });
    } else {
        next();
    }
});

user_schema.statics.findByToken = function(token) {
    console.log("finding token");
    let userModel = this;
    let id;
    try {
        console.log("finding token2");
        let decoded = jwt.verify(token, "This Is The Salt");
        console.log(decoded);
        id = decoded.id;
    } catch (e) {
        console.log("rejected");
        return Promise.reject(e);
    }
    console.log("finding token4");
    return userModel.findOne({ _id: id, token: token }).then((user) => {
        console.log("finding token3");
        console.log("User Verified By Token = " + user);

        return user;
    }).catch((e) => {
        console.log(e);
        return e;
    });
};
user_schema.methods.deleteToken = function() {
    let user = this;
    return user.update({
        $set: {
            token: ""
        }
    });
};


let User = mongoose.model("users", user_schema);

module.exports = {
    User
};