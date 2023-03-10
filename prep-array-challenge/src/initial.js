/* exported initial */
function initial(array) {
  var length = array.length;
  // eslint-disable-next-line no-array-constructor
  var result = new Array();
  for (var i = 0; i < length - 1; i++) {
    result[i] = array[i];
  }
  return result;
}
