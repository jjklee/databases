var models = require("../models");

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get((err, messages) => {
        if (err) console.log('error');
        res.json(messages);
      });
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      console.log('req : ', req)
      models.messages.post(req.body, (err, message) => {
        if (err) return console.log('Controller Error');
        res.send(result)
      });
    }
  }, // a function which handles posting a message to the database
 

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get(req,res)
    },
    post: function(req, res) {
      models.users.post(req,res)
    }
  }
}
  

