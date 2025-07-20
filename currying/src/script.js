// currying using function closure
function curriedMul(a) {
  return function (b) {
    return a * b;
  };
}

// console.log(curriedMul(2)(2));
function doAdd(a, b) {
  return a + b;
}

const returnValue = doAdd.bind(this); // optional pre-fill some argu
console.log(returnValue(3, 2));
