function addTwoNumbers(numb1, numb2) {
  return numb1 + numb2;
}
// eslint-disable-next-line no-unused-vars
const addTwoNumberResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumberResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const hours = 2;
const minutes = convertHoursToMinutes(hours);
console.log('convertHoursToMinutes Exercise:', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

const greeting = getGreeting('World');
console.log('getGreeting Exercise:', greeting);

// eslint-disable-next-line no-unused-vars
function addAndMultiplyBy5(numb1, numb2) {
  const sum = numb1 + numb2;
  const result = sum * 5;
  return result;
}
// eslint-disable-next-line no-unused-vars, no-func-assign
const result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5Result Exercise:', result);

function multiplyAndDivideBy5(numb1, numb2) {
  const result = (numb1 * numb2) / 5;
  return result;
}
// eslint-disable-next-line no-unused-vars, no-func-assign
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5Result Exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(numb1, numb2) {
  return numb1 - numb2;
}
// eslint-disable-next-line no-unused-vars
const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbersResult Exercise:', subtractTwoNumbersResult);

function getCircleCircumfrence(radius) {
  // eslint-disable-next-line no-loss-of-precision
  const pi = 3.141592653589793238;
  const circumference = 2 * pi * radius;
  return circumference;
}
// eslint-disable-next-line no-undef
const circumferenceResult = getCircleCircumfrence(5);
console.log('getCircleCircumfrenceResult Exercise:', circumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
// eslint-disable-next-line no-unused-vars
const getFullnameResult = getFullName('Sina', 'Daryaei');
console.log('getFullName Exercise:', getFullnameResult);

function cube(number) {
  return Math.pow(number, 3);
}
const cubeResult = cube(5);
console.log('cubeResult Exercise:', cubeResult);
