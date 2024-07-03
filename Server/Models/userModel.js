const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    surName : {
        type: String,
        required: [true,"Please enter a name"]
    },
    firstName : {
        type: String,
        required: [true,"Please enter a name"]
    },
    phoneNumber : {
        type: String,
        required: [true,"Please enter a phone number"]
    },
    email : {
        type: String,
        required: [true,"Please enter an email"],
    },
    companyName : {
        type: String,
        required: [true,"Please enter a company name"]
    },
    message : {
        type: String,
        required: [true,"Please enter a message"]
    }
},
    {
        timestamps: true
    })

    const UserModel = mongoose.model("UserModel",userSchema)
    module.exports = UserModel

