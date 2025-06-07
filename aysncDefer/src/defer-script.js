console.log("⏳ defer-script.js: Trying to access DOM...");

const headingDefer = document.getElementById("heading");

if (headingDefer) {
  console.log("✅ defer-script.js: Found heading:", headingDefer.textContent);
} else {
  console.log("❌ defer-script.js: DOM not ready, heading not found!");
}
