const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()
const port = 8080
const domain = 'http://localhost:8080/'



/**
 * Import MongoClient & connexion à la DB
 */

mongoose.connect('mongodb://localhost/ravenclaw', function(err) {
  if (err) { throw err; }
  else{ console.log("connecté à la base de données") }
});



const UserSchema = mongoose.Schema(
  {
      //_id: mongoose.ObjectId,
      firstnameUser: String,
      lastnameUser: String,
      mailUser: String,
      passwordUser: String,
      roleUser: String,
  }
);


const RessourceSchema = mongoose.Schema(
  {
      //_id: mongoose.ObjectId,
      title: String,
      content: String,
      categories: String
  }
);

let User = mongoose.model('user', UserSchema);
let Ressources = mongoose.model('ressources', RessourceSchema);



app.use(cors())
app.use(bodyParser.json())


//------------------------------------------------------------------- Inscription -------------------------------------------------------------------//


app.post('/register', (req, res) => {


  let newUser = new User({ 
    lastnameUser: `${req.body.nomUser}`, 
    firstnameUser: `${req.body.prenomUser}`, 
    mailUser: `${req.body.mailUser}`, 
    passwordUser: `${req.body.passwordUser}`,
  })

  newUser.save(function (err) {
    if (err) { throw err; }
  });
  res.send({
    name: `firstname : ${req.body.prenomUser}`,
    lastname: `lastname:  ${req.body.nomUser}`,
    mail: `mail :  ${req.body.mailUser}`,
    pass: `password ${req.body.passwordUser} `
  })
})

//------------------------------------------------------------------- Connexion -------------------------------------------------------------------//

app.post('/login', (req, res) => {
  User.findOne({ mailUser: req.body.mailUser }, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
        if(obj.passwordUser == req.body.passwordUser){
          res.send(obj)
        }
      }
    }
  })
})

//------------------------------------------------------------------- CurrentUser -------------------------------------------------------------------//


app.post('/getCurrentUser', (req, res) => {
  User.findById({ _id: req.body.IdUser }, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
          res.send(obj)
      }
    }
  })
})

//------------------------------------------------------------------- Ressources -------------------------------------------------------------------//


app.post('/addRessource', (req, res) => {


  let newRessource = new Ressources({ 
    title: `${req.body.titleRessource}`, 
    content: `${req.body.contentRessource}`, 
    categories: `${req.body.categoriesRessource}`, 
  })

  newRessource.save(function (err) {
    if (err) { throw err; }
  });
  res.send("ajouté")
})


//------------------------------------------------------------------- Ressources - Get All -------------------------------------------------------------------//



app.post('/getAllRessources', (req, res) => {

  Ressources.find({} , function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
          res.send(obj)
      }
    }
  })
})

//------------------------------------------------------------------- Ressources - Delete -------------------------------------------------------------------//



app.post('/deleteRessources', (req, res) => {
console.log(req.body.RessourceId)
  Ressources.deleteOne({_id: req.body.RessourceId} , function(err){
    if(err){
      throw err
    }else{ 
        res.send("Ressource supprimé")      
        console.log("ressource deleted")
    }
  })
})

//------------------------------------------------------------------- Ressources - GetOne -------------------------------------------------------------------//



app.post('/getOneRessource', (req, res) => {
  Ressources.findOne({ _id: req.body.RessourceId }, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
          res.send(obj)
      }
    }
  })
})


//------------------------------------------------------------------- Ressources - Edit -------------------------------------------------------------------//



app.post('/editRessource', (req, res) => {
  Ressources.updateOne({ _id: req.body.idRessource }, { title: req.body.titleRessource, content: req.body.contentRessource, categories: req.body.categoriesRessource}, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
        console.log("Upadting !")
      }
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

