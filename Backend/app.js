const  express = require("express")
require("dotenv").config()


const app = express()
 app.use(express.json())


const hostman = "127.0.0.1"
const port = process.env.PORT || 3000;
console.log(port);
console.log(hostman);

app.listen(port,hostman, ()=>{
    console.log(`serveur demarer sur le port ${port}`)
})