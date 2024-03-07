function soma(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = soma(5);

console.log(add5(2));
