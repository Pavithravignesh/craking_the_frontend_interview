// Handler function for button click
function handleClick() {
  const now = new Date().toLocaleTimeString();
  document.getElementById(
    "status"
  ).textContent = `Button action triggered at ${now}`;
  console.log("✅ Throttled click at", now);
}

// Reusable throttle function
function throttle(func, delay) {
  let lastCall = 0;
  console.log(lastCall);
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Throttled version of the handler
const throttledClick = throttle(handleClick, 1000); // allow 1 call per second

// Attach to button
document
  .getElementById("throttleBtn")
  .addEventListener("click", throttledClick);
