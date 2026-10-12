const express=require("express")
const app=express()
const dotenv =require("dotenv")
const mongoose =require("mongoose")
dotenv.config()

// Connexion à la base données
mongoose.connect(process.env.databaselocal)
.then(() => {console.log("DataBase Successfully Connected");}) // si oui 
.catch(err => { console.log("Unable to connect to database", err);// si non
process.exit(); });

app.get("/",(req,res)=>{// localhost:3001/
    res.send("page d'accueil")
})
app.get("/contact",(req,res)=>{ // localhost:3001/contact
    res.send("bienvenue a la page  contact")
})

app.listen(process.env.PORT) // pour dire qui le port 3001 qui utilise