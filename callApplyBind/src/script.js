function printName(city, town, country) {
  return `${this.firstName} ${this.lastName} ${city} ${town} ${country}`;
}

const person1 = {
  firstName: "person1 firstname",
  lastName: "person1 lastname",
};

console.log(printName.call(person1, "city", "town", "country"));
console.log(printName.apply(person1, ["city", "town", "country"]));
const returnedValue = printName.bind(person1, "city", "town", "country");
console.log(returnedValue());
