// Function that runs after resizing stops
function handleResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById(
    "status"
  ).textContent = `Resized to: ${width} x ${height} at ${new Date().toLocaleTimeString()}`;
  console.log("Resized:", width, height);
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Debounced version of the function (runs 500ms after the last resize event)
const debouncedResize = debounce(handleResize, 1000);

// Attach it to the resize event
window.addEventListener("resize", debouncedResize);