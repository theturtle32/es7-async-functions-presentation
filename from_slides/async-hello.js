function slowHello(name) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => resolve(`Hello slowly, ${name}`), 2000);
  });
}

(async function() {
  console.log("Ok, lets get this going");
  console.log(await slowHello("Brian"));
  console.log("Ok, we're done.");
})();
