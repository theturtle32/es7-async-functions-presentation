var myObj = {};

myObj[Symbol.iterator] = function() {
  var state = 0;
  function next() {
    switch (state++) {
      case 0:  return { value: 1, done: false };
      case 1:  return { value: 2, done: false };
      case 2:  return { value: 3, done: false };
      default: return { value: undefined, done: true };
    }
  }
  return { next };
}

for (let i of myObj) console.log(i);
// 1
// 2
// 3
