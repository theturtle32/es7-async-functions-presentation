function *myGenerator() {
  yield 1;
  console.log("Hello, %s!", yield 2);
  yield 3;
}

var i = myGenerator();
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next("Brian").value);
