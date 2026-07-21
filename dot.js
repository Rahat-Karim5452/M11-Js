const person = {
  name: "tobarak Ali",
  profession: "student",
  age: 21,
  isSingle: true,
};

const age = person.age;
console.log(person);
person.age = 29;
person.isSingle = false;
console.log(person);
