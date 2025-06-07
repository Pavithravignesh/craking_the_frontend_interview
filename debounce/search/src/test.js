const searchTextNode = document.getElementById("searchText");

const magicFnVar = magicFn(debounce, 300);

function magicFn(fn, delay) {
  // i should clear the timeout
  let timer;
  console.log(timer);
  // return a timeout
  return () => {
    let context = this,
      argu = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      // make the debounce fn as it belongs here,
      fn.apply(context, argu);
    }, delay);
  };
}

function debounce() {
  console.log(searchTextNode);
}

// looking for the appreciate action
window.addEventListener("keyup", magicFnVar);
