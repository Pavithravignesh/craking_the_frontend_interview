// make your action
function actionFn() {
  const width = window.innerWidth;
  const heigth = window.innerHeight;
  const timeStamp = new Date().toLocaleTimeString();
  document.getElementById(
    "display"
  ).textContent = `Resizing: width ${width}, heigth ${heigth} @ ${timeStamp}`;
  console.log(`Resizing: width ${width}, heigth ${heigth} @ ${timeStamp}`);
}

// make throttling the action
function betterActionFn(fn, delay) {
  let flag = true; // making a way to execute the fn()
  return (...argu) => {
    if (flag) {
      // for the second click will be false from the current scope, here's aren't using things from closure!
      flag = false; // restrcit the way to any further execution of the fn()
      // providing better context
      let context = this,
        argu = arguments;
      fn.apply(context, argu);
      // provide some delay
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

window.addEventListener("resize", betterActionFn(actionFn, 3000));
