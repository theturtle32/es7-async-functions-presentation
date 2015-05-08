var myObj = {};

myObj[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
}

for (let i of myObj) console.log(i);
