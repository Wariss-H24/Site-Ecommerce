const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
        useUnifiedTopology: true
        })
        console.log("✅ MongoDB connecté avec succès");
        
    } catch (error) {
        console.error("✖ Errueur de connexion MongoDB : ", error.message);
        process.exit(1);
    }
}
module.exports = connectDB;