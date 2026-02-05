//importation de la base de donnee mongodb
const mongoose = require('mongoose')
//creation du model 
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
})
/*exportation du model
aussi la methode model permet de transformer
le model cree en un model utilisable 
*/
module.exports = mongoose.model('Thing',thingSchema)