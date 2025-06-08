const throttleFn = betterActionFn(actionFn, 1000);

document
  .getElementById("input-field")
  .addEventListener("keyup", throttleFn);

function actionFn() {
  console.log("fired a API call!");
}

function betterActionFn(fn, delay) {
  let flag = true;
  return () => {
    if (flag) {
      flag = false; // colse the way for some delay;
      let context = this,
        argu = arguments;
      fn.apply(context, argu);
      setTimeout(() => {
        flag = true;
      }, 1000);
    }
  };
}
