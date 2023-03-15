/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      keys.push(key);
    }
  }
  return keys;
}
