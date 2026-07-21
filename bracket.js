const person = {
  name: "tobarak Ali",
  profession: "student",
  age: 21,
  isSingle: true,
  "home address": "NewKhali",
  "parent:name": "kodom Ali",
};

console.log(person["home address"]);
console.log(person["parent:name"]);

person["age"] = 24;
person["home address"] = "Dhaka";
// person.home address = not valid
console.log(person);

//variable Diyeo Hoite Pare:
const key = "profession";
console.log(person[key]);

/* Output of this Code: 
NewKhali
kodom Ali
{
  name: 'tobarak Ali',
  profession: 'student',
  age: 24,
  isSingle: true,
  'home address': 'Dhaka',
  'parent:name': 'kodom Ali'
}
student */
