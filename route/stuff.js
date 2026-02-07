const express=require('express')//importation du framework express
const router=express.Router()//creation d'un routeur

const stuffCtrl=require('../controllers/stuff')/*impor-
du controller depuis le ficher stuff.js du doc controllers
pour garder la logique metier des fonction des routes
*/ 


/*on vois ici chaque route clairement qu'au depart 
et des noms de fonction qui disent exactement ce 
que la reponse renvoye par la route */
router.post('/',stuffCtrl.createThing)

router.put('/:id',stuffCtrl.modifyThing)

router.get('/:id',stuffCtrl.getOneThing)

router.get('/',stuffCtrl.getAllThings);

router.delete('/:id',stuffCtrl.deleteThing)
module.exports=router//pour rendre le router exportable