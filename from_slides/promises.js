import User from '../lib/user';

User.findByEmail('theturtle32@gmail.com')
    .then (user  => console.log(user.name))
    .catch(error => console.log(error));

console.log("Loading User");
