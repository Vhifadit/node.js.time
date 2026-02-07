//pour importer express
const express= require('express')
//permet de cree une application express
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())


const stuffRoute=require('./route/stuff')



 // Autoriser toutes les origines (pour tester) app.use(cors());
/*heu  ce app.use(express.json()) permet 
d\intercepter tout les retour json et 
mettent a dis position ce contenue  */
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
//ici on mets dans le router le chemin des routes en une seule fois 
app.use('/api/stuff',stuffRoute)

/*exportation de cette application afin de pouvoir
y acceder depuis les autres fichier de notre dossier  plus precisement 
depuis le serveur nodec*/
module.exports = app