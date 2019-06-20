var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT text FROM messages", (err, messages) => {
        if (err) return console.log('error');
        console.log('messages : ', result);
        callback(null, messages);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {

      //change message to data.message, data.user...
      db.query(`INSERT INTO messages (text) VALUES (${data.message})`, (err, result) => {
        if (err) return console.log('error');
        console.log('posted message : ', result);
        callback(null, result);
    })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query("SELECT username FROM users", (err, users) => {
        if (err) return console.log('error');
        console.log('users : ', result);
        callback(null, users);
      });
    },
    post: function (name) {
      db.query(`INSERT INTO users (username) VALUES (${name})`, (err, result) => {
        if (err) return console.log('error');
        console.log('posted username : ', result);
    })
    }
  }
};

