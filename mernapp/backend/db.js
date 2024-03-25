const mongoose = require('mongoose');
const mongouri = 'mongodb+srv://divyansh:dev2022@cluster0.cfpmu1o.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0';
//added database name in url

const mongoDB = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("Connected to MongoDB");
        const collection = mongoose.connection.db.collection("food_item");
        const data = await collection.find({}).toArray();
        // console.log(data);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = mongoDB;
