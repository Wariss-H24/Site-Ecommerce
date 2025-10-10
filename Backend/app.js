const  express = require("express")
const fs= require("fs")
const cors = require("cors")
const app = express()
app.use(express.json())
//On charge nos donnes depuis Env
app.use(cors());
require("dotenv").config()

const connectDB = require("./config/connectDB");
// const { readDB, writeDB } = require("./Util.db");
connectDB();
//On convertis tt ce qui vien du front en JSO
// app.use(bodyParser.json());
//importation du fichier dans routes
//importation du fichier authMiddleware
const { authenticateToken } = require('./middlewears/authMiddleware');
// Routes Auth
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
// const productRoutes = require('./routes/productRoutes');
const {getProducts, getProduct,  createProduct, updateProduct, deleteProduct } = require('./Controllers/productControllers');

// Routes Produits
// app.use('/api', productRoutes);



// Exemple route protégée
app.get('/api/dashboard', authenticateToken, (req, res) => {
  res.json({ message: `Bienvenue ${req.user.email} sur le dashboard` });
});

//Definition des routes 
app.get("/", (req,res)=>{
    res.send("BienVue Sur notre site E-commerce")
})

app.use(cors({
  origin: 'http://localhost:5174',
  //Préciser ce que tu j'acceptes
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.get("/api/E-commerceProduits",getProducts
  // (req, res) => {
  // fs.readFile('./datas/data.json', (err, data) => {
    // if (err) {
    //   if (err.code === "ENOENT") {
        // Fichier introuvable
      //   return res.status(404).json({ error: "Fichier data.json introuvable" });
      // }
      // Autre erreur
    //   return res.status(500).json({ error: "Erreur lors de la lecture du JSON" });
    // }
    // try {
    //   const produits = JSON.parse(data);
    //   res.status(200).json(produits);
    // } catch (parseError) {
    //   res.status(500).json({ error: "Erreur lors du parsing du JSON" });
    // }
  // }
// );
// }
);

app.get("/api/E-commerceProduits/:id",authenticateToken, getProduct
  // (req, res) => {
  // const id = parseInt(req.params.id);
  // fs.readFile('./datas/data.json', (err, data) => {
  //   if (err) {
  //     return res.status(500).json({ error: "Erreur lecture JSON" });
  //   }
  //   try {
  //     const produits = JSON.parse(data).products;
  //     const produit = produits.find(p => p.id === parseInt(req.params.id));

  //     if (!produit) {
  //       return res.status(404).json({ error: "Produit non trouvé" });
  //     }
//       res.status(200).json(produit);
//     } catch (parseError) {
//       res.status(500).json({ error: "Erreur parsing JSON" });
//     }
//   });
// }
);

app.post("/api/E-commerceProduits",createProduct
  //  (req, res) => {
  // const nouveauProduit = req.body;

  // fs.readFile('./datas/data.json', (err, data) => {
  //   if (err) {
  //     return res.status(500).json({ error: "Erreur lecture JSON" });
  //   }

  //   try {
  //     const jsonData = JSON.parse(data);
  //     const produits = jsonData.products || [];

      // Générer un nouvel ID (simple auto-incrément)
      // const nouvelId = produits.length > 0 ? produits[produits.length - 1].id + 1 : 1;
      // nouveauProduit.id = nouvelId;

//       produits.push(nouveauProduit);
//       jsonData.products = produits;

//       fs.writeFile('./datas/data.json', JSON.stringify(jsonData, null, 2), (writeErr) => {
//         if (writeErr) {
//           return res.status(500).json({ error: "Erreur écriture JSON" });
//         }

//         res.status(201).json({ message: "Produit créé avec succès", produit: nouveauProduit });
//       });

//     } catch (parseError) {
//       res.status(500).json({ error: "Erreur parsing JSON" });
//     }
//   });
// }
);

app.put("/api/E-commerceProduits/:id",updateProduct)

app.delete("/api/E-commerceProduits/:id",deleteProduct
//    (req, res) => {
//   const id = parseInt(req.params.id);

//   fs.readFile('./datas/data.json', (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: "Erreur lecture JSON" });
//     }

//     try {
//       const jsonData = JSON.parse(data);
//       const produits = jsonData.products || [];

//       const index = produits.findIndex(p => p.id === id);
//       if (index === -1) {
//         return res.status(404).json({ error: "Produit non trouvé" });
//       }

//       produits.splice(index, 1); // Supprime le produit
//       jsonData.products = produits;

//       fs.writeFile('./datas/data.json', JSON.stringify(jsonData, null, 2), (writeErr) => {
//         if (writeErr) {
//           return res.status(500).json({ error: "Erreur écriture JSON" });
//         }

//         res.status(200).json({ message: "Produit supprimé avec succès" });
//       });

//     } catch (parseError) {
//       res.status(500).json({ error: "Erreur parsing JSON" });
//     }
//   });
// }
);

//FIn dse routes

const hostman = "127.0.0.1"
const port = process.env.PORT || 3000;
console.log(port);
console.log(hostman);

app.listen(port,hostman, ()=>{
  console.log("🔍 URI chargée :", process.env.MONGO_URI);

    console.log(`serveur demarer sur le port ${port}`)
})