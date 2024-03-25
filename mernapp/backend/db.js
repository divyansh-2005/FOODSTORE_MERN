const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://divyansh:dev2022@cluster0.cfpmu1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = () => {
    mongoose.connect(mongouri)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
}

module.exports = mongoDB;
