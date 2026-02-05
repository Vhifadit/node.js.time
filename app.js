//pour importer express
const express= require('express')
//permet de cree une application express

const cors = require('cors'); 
 // Autoriser toutes les origines (pour tester) app.use(cors());
/*heu  ce app.use(express.json()) permet 
d\intercepter tout les retour json et 
mettent a dis position ce contenue  */
const Thing =require('./models/Thing')

const mongoose = require('mongoose');
const app = express()
app.use(express.json());

// Connexion à MongoDB Atlas avec Mongoose
mongoose.connect("mongodb+srv://daagbohounondekavhifadit_db_user:oQ99mJepwhb6aOV9@cluster0.yzdqbov.mongodb.net/?appName=Cluster0",)
 .then(() => console.log('Connexion réussie à MongoDB avec Mongoose !'))
.catch(err => console.error('Erreur de connexion :', err));





/*c'est un response qui permet a 
a une applis d'acceder a un api
 si les deux ne tournais pas sur 
 les mm ports */
app.use((req, res, next) => {
    //l'origine qui a le droit d'accerder a notre api c'est tout le monde 
  res.setHeader('Access-Control-Allow-Origin', '*');
  //on donne l'autorisation d'utiliser cette entete ainsi que certaines methodes
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.post('/api/stuff',(req,res,next) =>{
  delete req.body._id
  const thing = new Thing({
    ...req.body
  })
thing.save()
.then(() =>res.status(201).json({message:'objet enregistre'}))
.catch(error =>res.status(400).json({error}))
})


app.get('/api/stuff/:id',(req,res,next) =>{
    Thing.findOne({ _id: req.params.id})
    .then(thing =>res.status(200).json(thing))
    .catch(error =>res.status(404).json({error}))
})


/**/ 
app.get('/api/stuff',(req, res, next) => {
 Thing.find()
 .then(things=>res.status(200).json(things))
 .catch(error=>res.status(400).json({error}))
 
});
/*exportation de cette application afin de pouvoir
y acceder depuis les autres fichier de notre dossier  plus precisement 
depuis le serveur nodec*/
module.exports = app