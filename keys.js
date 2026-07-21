//* If need to Check all Keys name:
const person = {
  name: "tobarak Ali",
  profession: "student",
  age: 21,
  isSingle: true,
};
const keys = Object.keys(person);
console.log(keys);
/*
 Output:[ 'name', 'profession', 'age', 'isSingle' ]
*/

//*2.If need to Check all Values name:
const values = Object.values(person);
console.log(values);
/*
 Output:[ 'tobarak ALi', 'student', 21, true]
*/

//*3.Delete Data From Object
delete person.isSingle;
delete person["profession"];
console.log(person);
//Output: { name: 'tobarak Ali', age: 21 }

//*4.Juray Juray dibe:
console.log(Object.entries(person));
/* Output: 
[
  [ 'name', 'tobarak Ali' ],
  [ 'profession', 'student' ],
  [ 'age', 21 ],
  [ 'isSingle', true ]
]
*/
