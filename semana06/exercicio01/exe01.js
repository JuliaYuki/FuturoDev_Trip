const promiseA = new Promise((resolve, reject) => {
  let value = 10;

  if (value % 2 === 0) {
    resolve();
  } else {
    reject();
  }
});

promiseA
  .then((result) => console.log("Número validado é par", result))
  .catch((error) => console.log("Error: número informado é impar", error))
  .finally(() => console.log("Finished"));
