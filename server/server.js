// === VARIABLES/REQUIRED EXTERNAL THINGS =========================
const express = require('express')
, bodyParser = require('body-parser')
, controller = require('./controller');

const app = express();

// === MIDDLEWARE =========================
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

// === ENDPOINTS =========================

app.get("/api/users", controller.getUsersByQuery);
app.get("/api/users/:id", controller.getUserById);

app.post("/api/users", controller.postNewUser);

app.delete("/api/users/:id", controller.deleteUserById);

// =====LISTEN==================================

const port = 3001;
app.listen(port, () => console.log('Listening on port: ', port));
