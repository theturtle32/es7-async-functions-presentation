import User from './lib/user';
import outputResults from './lib/outputResults';

var user, friends, interests, company;

console.log("Loading user...");
User.findByEmail('theturtle32@gmail.com')
  .then(result => {
    user = result;
    console.log("Loading friends...");
    return user.loadFriends();
  })

  .then(result => {
    friends = result;
    console.log("Loading interests and company...");
    return Promise.all( [
      user.loadInterests(),
      user.loadCompany()
    ] );
  })

  .then((results) => {
    interests = results[0];
    company = results[1];
    outputResults(user, friends, interests, company);
  })
  
  .then(() => console.log("\nAll done!"))

  .catch(e => console.log("Unable to load user info:\n%s", e.stack));
  
