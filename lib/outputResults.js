export default function outputResults(user, friends, interests, company) {
  var table = require('text-table');
  var indent = require('indent-string');
  
  console.log("Loaded.");
  console.log("\n%s\n", "=".repeat(76));
  
  console.log(table([
    ['Name', user.name],
    ['Email', user.email],
    ['Company', company]
  ]));
  
  var friendsText = Array.from(friends)
    .map(function(friend) { return friend.name; })
    .join('\n');
  console.log("Friends:\n%s", indent(friendsText, ' ', 4));
  
  var interestsText = interests.join('\n');
  console.log("Interests:\n%s", indent(interestsText, ' ', 4));
}
