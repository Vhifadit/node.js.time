//importation du package http de node 
//on a ainsi acces a l'objet http nous 
//permettant de creer un serveur 
const http = require('http')
/*c'est la fonction qui sera appelle 
a chaque foisque le serveur recois une requette 
res=requette et res=reponse  */
const server = http.createServer((req, res)=>{
    //res.end permet d'afficher la reponse 
    res.end('voila la reponse du  premier server')
})
//pour permettre au serveur d'ecouter les requettes 
server.listen(process.env.Port || 3000)
