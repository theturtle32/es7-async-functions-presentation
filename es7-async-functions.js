"use strict";

import User from './lib/user'
import outputResults from './lib/outputResults'

async function loadAndPrint() {
  try {
    console.log("Loading user...");
    var user = await User.findByEmail('theturtle32@gmail.com');

    console.log("Loading friends...");
    var friends = await user.loadFriends();

    console.log("Loading interests and company...");
    var [interests, company] =
      await Promise.all([ user.loadInterests(), user.loadCompany() ]);
    
    outputResults(user, friends, interests, company);
  }
  catch(e) {
    console.log("Unable to load user info:\n%s", e.stack);
  }
};

loadAndPrint()
  .then(  ()  => console.log("\nAll done!") )
  .catch( (e) => console.error(e) );
