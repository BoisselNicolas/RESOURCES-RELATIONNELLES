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
      categories: String,
      datePublication: String, 
      UserId: String,
  }
);


const CategoriesSchema = mongoose.Schema(
  {
      //_id: mongoose.ObjectId,
      Nom: String,
  }
);

const TypeOfRessourceSchema = mongoose.Schema(
  {
      //_id: mongoose.ObjectId,
      Nom: String,
  }
);

let User = mongoose.model('user', UserSchema);
let Ressources = mongoose.model('ressources', RessourceSchema);
let Categories = mongoose.model('categories', CategoriesSchema);
let TypeOfRessource = mongoose.model('typeofressource', TypeOfRessourceSchema);



app.use(cors())
app.use(bodyParser.json())


//------------------------------------------------------------------- Inscription -------------------------------------------------------------------//


app.post('/register', (req, res) => {


  let newUser = new User({ 
    lastnameUser: `${req.body.nomUser}`, 
    firstnameUser: `${req.body.prenomUser}`, 
    mailUser: `${req.body.mailUser}`, 
    passwordUser: `${req.body.passwordUser}`,
    roleUser: 'Citoyen connecté',
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
    datePublication: Date.now(),
    UserId: `${req.body.idUser}`, 
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

//------------------------------------------------------------------- Categories - Add -------------------------------------------------------------------//

app.post('/addCategories', (req, res) => {

  let newCategories = new Categories({ 
    Nom: `${req.body.nameCat}`, 
  })
  newCategories.save(function (err) {
    if (err) { throw err; }
  });
  res.send("Ajouté")
})

//------------------------------------------------------------------- Categories - Delete -------------------------------------------------------------------//



app.post('/DeleteCategories', (req, res) => {
    Categories.deleteOne({_id: req.body.idCategories} , function(err){
      if(err){
        throw err
      }else{ 
          res.send("Ressource supprimé")      
          console.log("ressource deleted")
      }
    })
  })

//------------------------------------------------------------------- Categories - Get All -------------------------------------------------------------------//

app.post('/GetAllCategories', (req, res) => {
  Categories.find({} , function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
          res.send(obj)
      }
    }
  })
})


//------------------------------------------------------------------- Categories - Edit -------------------------------------------------------------------//



app.post('/EditCategories', (req, res) => {
  Categories.updateOne({ _id: req.body.idCategorie }, { Nom: req.body.nomCategorie }, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
        res.send('Updating')
      }
    }
  })
})

//------------------------------------------------------------------- Categories - GetOne -------------------------------------------------------------------//



app.post('/getOneCategories', (req, res) => {
  Categories.findOne({ _id: req.body.CategorieId }, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
          res.send(obj)
      }
    }
  })
})


//------------------------------------------------------------------- Type Of Ressource - Add -------------------------------------------------------------------//



app.post('/addTypeOfRessource', (req, res) => {
  

  let newTypeOfRessource = new TypeOfRessource({ 
    Nom: `${req.body.NameTypeOfRessource}`, 
  })
  newTypeOfRessource.save(function (err) {
    if (err) { throw err; }
  });
  res.send("Ajouté")
})


//------------------------------------------------------------------- Type Of Ressource - Get All -------------------------------------------------------------------//

app.post('/GetAllTypeOfRessource', (req, res) => {
  TypeOfRessource.find({} , function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
          res.send(obj)
      }
    }
  })
})

//------------------------------------------------------------------- Type Of Ressource - Delete -------------------------------------------------------------------//



app.post('/DeleteTypeOfRessource', (req, res) => {
  TypeOfRessource.deleteOne({_id: req.body.idTypeOfRessource} , function(err){
    if(err){
      throw err
    }else{ 
        res.send("Ressource supprimé")      
        console.log("ressource deleted")
    }
  })
})

//------------------------------------------------------------------- Type Of Ressource - GetOne -------------------------------------------------------------------//



app.post('/getOneTypeOfRessource', (req, res) => {
  TypeOfRessource.findOne({ _id: req.body.idTypeDeRessource }, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
          res.send(obj)
      }
    }
  })
})

//------------------------------------------------------------------- Type Of Ressource - Edit -------------------------------------------------------------------//



app.post('/EditTypeOfRessource', (req, res) => {
  TypeOfRessource.updateOne({ _id: req.body.idTypeDeRessource }, { Nom: req.body.nomTypeOFRessource }, function(err, obj){
    if(err){
      throw err
    }else{ 
      if(obj != null){
        res.send('Updating')
      }
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

