function doFetch() {
  const now = new Date().toLocaleTimeString();
  document.getElementById("status").textContent = `${now}`;
  console.log(`${now}`);
}

function betterFn(fn, delay) {
  let flag = true;
  return () => {
    // under contrain only we can make a call to doFetch
    if (flag) { // for the second click will be false from the current scope, here's aren't using things from closure!
      flag = false;
      let context = this,
        argu = arguments;
      fn.apply(context, argu);
      // make the doFetch available to this context
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const betterFnRef = betterFn(doFetch, 3000);

document.getElementById("throttleBtn").addEventListener("click", betterFnRef);
