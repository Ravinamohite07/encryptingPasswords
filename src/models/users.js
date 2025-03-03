const mongoose = require("mongoose");
const validator = require("validator")

const userSchema = new mongoose.Schema({
   firstName: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 50,
   },
   lastName: {
    type: String,
   },
   emailId: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
    validate(value) {
        if(!validator.isEmail(value)){
            throw new Error("invalid email address.."+ value);
            
        }
    }
   },
   password: {
    type: String,
    required: String,
   },
   age: {
    type: Number,
    min: 18,
   },
   gender: {
    type: String,
    validate(value){
        if(!["male","female","other"].includes(value)){
            throw new Error ("Gender data is not valid...!");
        }
    },
   },
   photoUrl: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_1280.png",
   },
   About: {
    type: String,
    default: "This is default value..!"
   },
   Skills: {
    type: [String],
   },
},{
    timestamps:true,
});

//const User = mongoose.model("User",userSchema);
//module.exports = userModel;
module.exports = mongoose.model("User",userSchema);
//module.exports = User;