// e.stopPropagation() - just cuts-off the cycle when the cycle reach at it.

document.querySelector(".grand-parent").addEventListener(
  "click",
  (e) => {
    console.log("grand-parent");
  },
  false
);

document.querySelector(".parent").addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("parent");
  },
  true
);

document.querySelector(".child").addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  false
);
