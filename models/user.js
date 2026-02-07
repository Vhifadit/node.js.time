//pour creer des doc utilisateurs

const mongoose= require('mongoose')
/*mongoose-unique-validator  améliore les
 messages d'erreur lors de l'enregistrement 
 de données uniques.*/
const uniqueValidator=require('mongoose-unique-validator')


const userSchema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    /*l'attribut unique a ete ajouter ici 
    afin que ca soit qu'un utilsation ne 
    s'inscrive pas   avec plusieurs email*/
    password:{type:String,required:true}
})
userSchema.plugin(uniqueValidator)

module.exports= mongoose.model('User',userSchema)