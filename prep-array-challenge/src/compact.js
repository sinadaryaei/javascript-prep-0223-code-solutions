/* exported compact */
function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
