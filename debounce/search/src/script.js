let count = 0;
function getData() {
  console.log("hit " + count++);
}

const deBounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      argu = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, argu);
    }, delay);
  };
};

const makeTheCall = deBounce(getData, 300);
