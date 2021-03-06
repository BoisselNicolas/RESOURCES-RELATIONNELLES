const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
    //Validate request
  /*if (!req.body.nomUser && !req.body.prenomUser && !req.body.passwordUser) {
      res.status(400).send({ message: "Content can not be empty!"});
      return;
  }*/

  // Create User
  const user = new User({
      nomUser: 'test',             //req.body.nomUser,
      prenomUser: 'test',          //req.body.prenomUser,
      passwordUser: '123',        //req.body.passwordUser,
      roleUser: 'Citoyen connecté',
      pdsfg: 'zeter'
  });

  // Save User in the database
  user
    .save(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    //res.send('hello');

    User.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};