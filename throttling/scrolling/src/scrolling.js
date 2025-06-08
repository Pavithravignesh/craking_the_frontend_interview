// make the action
function actionFn() {
  console.log("here");
  const displayNode = document.getElementById("display");
  displayNode.style.display = "block";
  displayNode.textContent = `you have stopped scroling!`;
  setTimeout(() => {
    displayNode.style.display = "none";
  }, 1000);
}

// adding throttling to it
function betterActionFn(fn, delay) {
  // let's provide some certain for the execution thread
  let flag = true; // closure(betterActionFn) for the callBack which got to be returned
  return () => {
    if (flag) {
      flag = false;
      // making the call particular to this fn
      let context = this,
        argu = arguments;
      fn.apply(context, argu);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

window.addEventListener("scroll", betterActionFn(actionFn, 5000));
