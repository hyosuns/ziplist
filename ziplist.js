const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const one = [];
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      one.push(arr1[i], arr2[i]);
    }
  }
  return one;
}

console.log(zipList(array1, array2));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(array1, array2));
