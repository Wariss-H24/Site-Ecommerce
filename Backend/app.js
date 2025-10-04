const  express = require("express")
const fs= require("fs")
const cors = require("cors")
const app = express()
 app.use(express.json())
//On charge nos donnes depuis Env
app.use(cors());
require("dotenv").config()

//Stoker le json dans une variable 


//Definition des routes 
app.get("/", (req,res)=>{
    res.send("BienVue Sur notre site E-commerce")
})
app.use(cors({ origin: "http://localhost:5174" }));

app.get("/api/E-commerceProduits", (req, res) => {
  fs.readFile('./datas/data.json', (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Fichier introuvable
        return res.status(404).json({ error: "Fichier data.json introuvable" });
      }
      // Autre erreur
      return res.status(500).json({ error: "Erreur lors de la lecture du JSON" });
    }

    try {
      const produits = JSON.parse(data);
      res.status(200).json(produits);
    } catch (parseError) {
      res.status(500).json({ error: "Erreur lors du parsing du JSON" });
    }
  });
});

//FIn dse routes


const hostman = "127.0.0.1"
const port = process.env.PORT || 3000;
console.log(port);
console.log(hostman);

app.listen(port,hostman, ()=>{
    console.log(`serveur demarer sur le port ${port}`)
})