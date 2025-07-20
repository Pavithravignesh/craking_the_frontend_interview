const searchTextNode = document.getElementById("searchText");

const magicFnVar = magicFn(debounce, 3000);

function magicFn(fn, delay) {
  // i should clear the timeout
  let timer = null;
  console.log(timer);
  // return a timeout
  return () => {
    let context = this;
    // argu = arguments;
    clearTimeout(timer); // if it doesn't clears then every click will be executes the setTimeout()
    timer = setTimeout(() => {
      // make the debounce fn as it belongs here,
      fn.apply(context);
    }, delay);
  };
}

function debounce() {
  console.log(searchTextNode);
}

// looking for the appreciate action
window.addEventListener("keyup", magicFnVar);
