const express=require("express")
const app=express()
const dotenv =require("dotenv")
const mongoose =require("mongoose")
dotenv.config()
app.use(express.json())  //format json

const categorieRouter=require("./routes/categorie.route.js")
app.use('/api/categories', categorieRouter)

const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter);

const articleRouter =require("./routes/article.route")
app.use('/api/articles', articleRouter);


// Connexion à la base données
mongoose.connect(process.env.databasecloud)
.then(() => {console.log("DataBase Successfully Connected");}) // si oui 
.catch(err => { console.log("Unable to connect to database", err);// si non
process.exit(); });

app.get("/",(req,res)=>{// localhost:3001/
    res.send("page d'accueil")
})
app.get("/contact",(req,res)=>{ // localhost:3001/contact
    res.send("bienvenue a la page  contact")
})



app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });

module.exports = app;// github

    
// pour dire qui le port 3001 qui l'utilise