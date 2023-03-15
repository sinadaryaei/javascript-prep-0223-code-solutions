/* exported getValues */
function getValues(object) {
  const result = [];

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      result.push(object[key]);
    }
  }

  return result;
}
