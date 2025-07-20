// borwser fall-back?

const obj = {
  firstName: "firstName",
  lastName: "lastName",
};

function printName(city, town, country, postcode) {
  return `${this.firstName} ${this.lastName} ${city} ${town} ${country} ${postcode}`;
}

const returnedFn = printName.bind(obj);
// console.log(returnedFn());

Function.prototype.myBind = function (...argu) {
  let reference = this,
    paras = argu.slice(1);
  return (...argu) => {
    return reference.apply(argu[0], [...paras, ...argu]);
  };
};

const returnedMyBind = printName.myBind(
  obj,
  "city",
  "town",
  "country"
)("postcode");
console.log(returnedMyBind);
// console.log(returnedMyBind("postcode"));
