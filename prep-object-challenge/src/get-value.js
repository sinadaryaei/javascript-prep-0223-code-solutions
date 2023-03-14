/* exported getValue */
function getValue(object, key) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    return object[key];
  }
  return undefined;
}
