var array = [1,2,3];

var i = array.values(); // returns an iterator

console.log(i.next()); //{ value: 1, done: false }
console.log(i.next()); //{ value: 2, done: false }
console.log(i.next()); //{ value: 3, done: false }
console.log(i.next()); //{ value: undefined, done: true }
