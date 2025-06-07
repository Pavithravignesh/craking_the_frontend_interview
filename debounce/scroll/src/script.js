// Debounce function
function debounce(fn, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

const message = document.getElementById("message");

function showScrollMessage() {
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 1000);
}

const debouncedScrollHandler = debounce(showScrollMessage, 300);

window.addEventListener("scroll", debouncedScrollHandler);
