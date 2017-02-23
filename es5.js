"use strict";

// Babel is needed for loading these two modules
var User = require('./lib/user').default;
var outputResults = require('./lib/outputResults').default;

var user, friends, interests, company;

console.log("Loading user...");
User.findByEmail('theturtle32@gmail.com', function(err, result) {
  if (err)
    return console.error("Couldn't load user: %s", err);

  user = result;
  
  console.log("Loading friends...");
  user.loadFriends(function(err, result) {
    if (err)
      return console.error("Couldn't load %s's friends: %s", user.name, err);

    friends = result;
    
    var parallelCalls = 2;
    var numComplete = 0;
    function checkComplete() {
      if (numComplete === parallelCalls)
        outputResults(user, friends, interests, company);
    }
    
    console.log("Loading interests and company...");
    user.loadInterests(function(err, result) {
      if (err)
        return console.log("Couldn't load company: %s", err);

      numComplete ++;
      interests = result;
      checkComplete();
    });
    
    user.loadCompany(function(err, result) {
      if (err)
        return console.log("Couldn't load company: %s", err);

      numComplete ++;
      company = result;
      checkComplete();
    });
    
  });
});
