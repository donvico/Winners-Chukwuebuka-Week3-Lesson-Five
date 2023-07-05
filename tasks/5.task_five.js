// Create an array with multiple elements.
// Use the filter() method to create a new array containing only specific elements based on a condition.
// Log the filtered array to the console.

// const multipleArray = ['obasanjo', 'yaradua', 'jonathan', 'buhari', 'tinubu'] //created multiple elements in the array
// multipleArray.filter

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
