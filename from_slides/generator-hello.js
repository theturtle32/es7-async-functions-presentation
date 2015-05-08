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

function run(generator) {
  var p = Promise.defer();
  var i = generator();
  var result = i.next();
  
  function step(resolution) {
    var yielded = i.next(resolution);
    if (yielded.done) return p.resolve(yielded.value);
    resolveable = yielded.value;
    if (resolveable && typeof resolveable['then'] === 'function') {
      return resolveable.next(step);
    }
    step();
  }

  var resolveable = result.value;
  if (resolveable) { resolveable.then(step); }
  return p;
}
