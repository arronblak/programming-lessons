const pool = require("../data/config");
const router = app => {

  app.get("/users/:id", (request, response) => {

    const id = request.params.id;


    pool.query("SELECT * FROM users WHERE id = ?", id, (error, result) => {


      if (error) throw error;


      response.send(result);


    });


  });



    app.get('/', (request, response) => {
  
  
        response.send({
  
  
            message: 'Node.js and Express REST API'
  
  
        });
  
  
    });
  
  
  }
  
  
  module.exports = router;


