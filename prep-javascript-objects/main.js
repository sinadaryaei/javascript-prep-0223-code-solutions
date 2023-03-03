
const person = {
  firstName: 'Sina ',
  lastName: 'Daryaei',
  hobby: 'drawing'
};
console.log(person);

const fullName = person.firstName + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'lab technician';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'translator';
console.log("The person's previous job is:", person['previousJob']);

console.log(person);
