console.log("⚡ async-script.js: Trying to access DOM...");

const headingAsync = document.getElementById("heading");

if (headingAsync) {
  setTimeout(() => {
    console.log("✅ async-script.js: Found heading:", headingAsync.textContent);
  }, 3000);
} else {
  console.log("❌ async-script.js: DOM not ready, heading not found!");
}
