// // console.log(this); // {}
// // TODO:
// // console.log("arr".length); // how this string got length?

// // TODO: obj1 - literal
// const obj1 = {
//   aaa: "aaa",
//   name: "name",
//   age: 17,
//   address: "address",
// };

// // console.log(obj1);

// obj1.name = "new name";
// obj1.age = "new age";
// obj1.address = "new address";

// // console.log(obj1);

// // TODO: obj2 - constructor
// const obj2 = new Object();
// obj2.color = "color";
// obj2.bg = "bg";
// obj2.shadow = "shadow";

// // console.log(obj2);

// // TODO: obj3 - create()
// const obj3 = Object.create(obj1);
// // console.log(obj3);
// // console.log(obj3.aaa);
// // console.log(Object.getPrototypeOf(obj3));

// // TODO: obj4 - defineProperty()
// const obj4 = Object.create({});

// Object.defineProperty(obj4, "secret", { value: "secret", enumerable: false });

// // console.log(obj4);
// // console.log(Object.getPrototypeOf(obj4));
// // console.log(obj4);

// for (let key in obj4) {
//   //   console.log(key);
// }

// let pen = "outer_pen";

// let something = {
//   one: "one",
//   updateOne: function () {
//     this.one = "updateOne";
//     return this;
//   },
//   updateTwo: function () {
//     this.one = "updateTwo";
//     return this;
//   },
//   updateThree: function () {
//     this.one = "updateThree";
//     console.log(this.one);
//     return this;
//   },
// };

// // something.updateOne().updateTwo().updateThree();

// // setting the protoType
// Object.setPrototypeOf(obj3, obj1);

// // console.log(obj3);

// let str = "hitesh   ";

// // console.log(str.length);

// String.prototype.trueLength = function () {
//   console.log(`trimmed value: ${this.trim().length}`);
// };

// // str.trueLength();

// // constructor way of dedcation
// const str1 = new String("str");
// const nub1 = new Number(1);
// const arr1 = new Array("1", "2", "3", "4");

// console.log(obj1.__proto__.__proto__);

const personDetails = {
  name: "test",
};

// going to update age
Object.defineProperties(personDetails, {
  age: {
    set() {
      return 
    },
  },
});

console.log(personDetails);