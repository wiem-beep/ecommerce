const mongoose =require("mongoose")
//mongoose : toblige aalique bech tistaaml le meme strecture le meme type aala khatir mongodb tnajim tdakhil filh plusieur type
const categorieSchema=mongoose.Schema({ 
nomcategorie:{ type: String, required: true,unique:true },
imagecategorie :{ type: String, required: false }
})
module.exports=mongoose.model('categorie',categorieSchema)