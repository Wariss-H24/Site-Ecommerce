const  express = require("express")
const fs= require("fs")

const app = express()
 app.use(express.json())
//On charge nos donnes depuis Env
require("dotenv").config()

//Stoker le json dans une variable 


//Definition des routes 
app.get("/", (req,res)=>{
    res.send("BienVue Sur notre site E-commerce")
})

app.get("/api/E-commerceProduits", (req, res) => {
  fs.readFile('./datas/data.json',  (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lecture JSON' })
    } else {
      res.status(200).json(JSON.parse(data));
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