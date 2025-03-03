const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ravinamohite07:gah7omMhOUmA5EiP@namstenode.budiy.mongodb.net/sanitization"
    );
};

module.exports = connectDB;
