/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create an object
  const stacks = {};

  // iterate through the array
  for (const element of arr) {
    // have we seen this number before?
    if (stacks[element]) {
      // if yes, increment the number of times we've seen it
      stacks[element] += 1;
      // stacks[element] = stacks[element] + 1;
    } else {
      // if no, create a new key value pair inside the object
      stacks[element] = 1;
    }
  }

  // console.log(stacks);

  // create variables for most frequently occurring number and the number of times it occurs
  let frequentNumber = null;
  let numTimesOccurred = -Infinity;

  // iterate through the object
  for (const key in stacks) {
    // compare the values against the number of times variable
    if (stacks[key] > numTimesOccurred) {
      // if higher, store the new values
      frequentNumber = key;
      numTimesOccurred = stacks[key];
    }
  }

  // return the key that occurs the most
  return frequentNumber;
};

// Don't change below:
module.exports = { mode };
