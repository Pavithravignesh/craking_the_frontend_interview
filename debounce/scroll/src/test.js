const messageNode = document.getElementById("message");

const magicFnVariable = magicFn(debounce, 300);

function magicFn(fn, delay) {
  let timer;
  return () => {
    let context = this,
      argu = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, argu);
    }, delay);
  };
}

function debounce() {
  messageNode.style.display = "block";
  setTimeout(() => {
    messageNode.style.display = "none";
  }, 1000);
}

window.addEventListener("scroll", magicFnVariable);
