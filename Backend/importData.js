const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const connectDB = require("./Util/db");

dotenv.config(); // charge ton fichier .env

//  Lis le fichier JSON
const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));

const importData = async () => {
  try {
    await connectDB();
    await User.insertMany(data);
    console.log("✅ Données importées avec succès !");
    process.exit();
  } catch (error) {
    console.error("❌ Erreur lors de l’import :", error);
    process.exit(1);
  }
};

importData();
