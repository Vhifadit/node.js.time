//pour importer express
const express= require('express')
//permet de cree une application express
const app = express()
/*heu  ce app.use(express.json()) permet 
d\intercepter tout les retour json et 
mettent a dis position ce contenue  */
app.use(express.json())
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
    console.log(req.body)
    res.status(201).json({message:'objet creer'})
})
app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});
/*exportation de cette application afin de pouvoir
y acceder depuis les autres fichier de notre dossier  plus precisement 
depuis le serveur nodec*/
module.exports = app