"use strict";

var User = require('./lib/user');
var outputResults = require('./lib/outputResults');

var user;
var friends;
var interests;
var company;

console.log("Loading user...");
User.findByEmail('theturtle32@gmail.com', function(err, result) {
  if (err) {
    return console.error("Couldn't load user: %s", err);
  }
  user = result;
  
  console.log("Loading friends...");
  user.loadFriends(function(err, result) {
    if (err) {
      return console.error("Couldn't load %s's friends: %s", user.name, err);
    }
    friends = result;
    
    var parallelCalls = 2;
    var numComplete = 0;
    function checkComplete() {
      if (numComplete === parallelCalls) {
        outputResults(user, friends, interests, company);
      }
    }
    
    console.log("Loading interests and company...");
    user.loadInterests(function(err, result) {
      if (err) {
        return console.log("Couldn't load company: %s", err);
      }
      numComplete ++;
      interests = result;
      checkComplete();
    });
    
    user.loadCompany(function(err, result) {
      if (err) {
        return console.log("Couldn't load company: %s", err);
      }
      numComplete ++;
      company = result;
      checkComplete();
    });
    
  });
});
