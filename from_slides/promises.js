var User = require('../lib/user');

var promise = User.findByEmail('theturtle32@gmail.com');
promise.then(user => console.log(user.name));
promise.catch(error => console.log(error));
console.log("Loading User");
