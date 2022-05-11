const express = require('express');


const bodyParser = require('body-parser');


const port = 3000;


const app = express();


const routes = require('./routes/routes');


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({


    extended: true,


}));




routes(app)





const server = app.listen(port, (error) => {


  if (error) return console.log(error);


  console.log(`Server listening on port ${server.address().port}`);


});
