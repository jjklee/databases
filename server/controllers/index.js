var models = require("../models");



module.exports = {
  messages: {

    get: function(req, res) {

      models.messages.get((err, data) => {
        if (err) {
          console.log('Controller get error');
        } else {
          res.json(data);
        }
      });
    }, // a function which handles a get request for all messages

    post: function(req, res) {      
      models.messages.post(req.body, (err) => {
        if (err) {
          console.log('Controller post Error');
        }
        res.send("Sucessfully posted")
      });
    }
  }, // a function which handles posting a message to the database
 

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get((err, data) => {
        if (err) {
          console.log('Controller get error');
        } else {
          res.json(data);
        }
      });
    },
    post: function(req, res) {
      models.users.post(req.body, (err) => {
        if (err) {
          console.log('Controller post Error');
        }
        res.send("Sucessfully posted")
      });
    }
  }
}
  

