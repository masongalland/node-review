const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );


// === ENDPOINTS =========================

app.get("/api/users", controller.getUsersByQuery);

app.post("/api/users", controller.postNewUser);







// =======================================

const port = 3001;
app.listen(port, () => console.log('Listening on port: ', port));
