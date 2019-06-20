var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT users.username, messages.text, messages.roomname FROM users INNER JOIN messages ON users.users_id = messages.usernameID", (err, messages) => {
        if (err) {
          console.log('Models get error')
          callback(err);
        } else {
          callback(null, messages);
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      db.query(`INSERT INTO messages(usernameID, text, roomname) VALUES ((SELECT users_id FROM users WHERE username = "${data.username}"), "${data.text}", "${data.roomname}")`, (err) => {
     
        if (err) {
          console.log('Models post error');
        } else {
          callback(null, data)
        }
    })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query("SELECT username FROM users", (err, users) => {
        if (err) {
          console.log('user error');
        } else {
          callback(null, users);
        }
      });
    },
    post: function (data, callback) {  
      db.query(`INSERT INTO users (username) VALUES ("${data.username}")`, (err) => {
        if (err) {
          console.log('user error');
        } else {
          callback(null, data);
        }
    })
    }
  }
};

