// create your loops here.
function whileLoop1() {
  let i = 0;
  const newArray = [];

  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
console.log('whileLoop1 output', whileLoop1());

function forLoop1() {
  const newArray = [];

  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 99; i >= 0; i--) {
    console.log('Time till explosion: ' + i);
  }
}
forLoop2();

function forInLoop1(object) {
  // eslint-disable-next-line no-unused-vars
  const propNames = [];

  for (const propName in object) {
    // eslint-disable-next-line no-undef
    propNames.push(propName);
  }
  // eslint-disable-next-line no-undef
  return propNames;
}
const exampleObject = { name: 'Ada LoveLace', age: 'classic', hobby: 'computation', invention: 'analytical engine' };
console.log('forInLoop1 output', forInLoop1(exampleObject));

function forInLoop2(object) {
  const propValues = [];

  for (const propName in object) {
    propValues.push(object[propName]);
  }
  return propValues;
}

const exampleObject2 = { name: 'Sina', age: 30, city: 'Orange County' };

console.log('forInLoop2 output:', forInLoop2(exampleObject2));
