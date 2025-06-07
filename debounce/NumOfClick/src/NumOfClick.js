// Reusable debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Handler function for button click
function handleClick() {
  const now = new Date().toLocaleTimeString();
  document.getElementById(
    "status"
  ).textContent = `Button action triggered at ${now}`;
  console.log("✅ Debounced click at", now);
}

// Debounce wrapper
const debouncedClick = debounce(handleClick, 1000); // 1 second debounce

// Attach to button
document
  .getElementById("debounceBtn")
  .addEventListener("click", debouncedClick);
