function slowHello(name) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve(`Hello slowly, ${name}`), 2000);
  });
}

run(function *() {
  console.log("Ok, lets get this going");
  console.log(yield slowHello("Brian"));
  console.log("Ok, we're done.");
});

function isPromise(p) { return p && typeof p.then === 'function'; }
function run(generator) {
  return new Promise((resolve, reject) => {
    var iterator = generator();
    step();
    
    function step(resolution) {
      var yielded = iterator.next(resolution);
      if (yielded.done) return resolve(yielded.value);
      if (isPromise(yielded.value)) return yielded.value.then(step);
      step(yielded.value);
    }
  });
}
