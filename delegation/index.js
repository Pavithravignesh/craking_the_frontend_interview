document.querySelector("#parent").addEventListener("click", (e) => {
  //   console.log("parent", e.target.id);
  if (e.target.tagName == "LI") window.location.href = "/" + e.target.id;
  if (e.target.dataset.muthuramalingam !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  } //   console.log(e.target.dataset.uppercase !== undefined);
});

// document.querySelector("#one").addEventListener("click", () => {
//   console.log("one");
// });

// document.querySelector("#two").addEventListener("click", () => {
//   console.log("two");
// });

// document.querySelector("#three").addEventListener("click", () => {
//   console.log("three");
// });
