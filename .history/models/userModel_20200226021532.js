const mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");

    const UserSchema = new mongoose.Schema({
        username: String,
        password: String

    });
UserSchemma.plugin(passportLocalMongoose);