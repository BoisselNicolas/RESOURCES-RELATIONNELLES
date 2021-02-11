const express = require("express"); // create our app w/ express
const bodyParser = require("body-parser"); // pull information from HTML POST (express4)
const cors = require("cors");
const mongoose = require('mongoose'); // mongoose for mongodb
const morgan = require('morgan'); // log requests to the console (express4)
const methodOverride = require('method-override') // simulate DELETE and PUT (express4)

const app = express();

app.use(morgan('dev'));     // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));  // parse application/x-www-form-urlencoded
app.use(bodyParser.json());   // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));   // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function(req,res, next) {
  res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Routes
const routes = require("./routes/user.routes");
routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Connection
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  })

/*const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to serdaigle application." });
});

require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });*/
