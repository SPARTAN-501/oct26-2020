/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 6,2,3,4,9,6,1,0
// 3 and 4

const median = function(arr) {
  // sort the array
  arr.sort();

  // calculate the middle index
  const middleIndex = Math.floor(arr.length / 2); // 4.5 => 4

  // is the array even-numbered or odd-numbered
  if (arr.length % 2 === 0) {
    // even length
    // if even, return average of the two middle values
    const total = arr[middleIndex] + arr[middleIndex - 1];
    const average = total / 2;
    return round(average);
  } else {
    // odd length
    // if odd, return the middle index
    return arr[middleIndex];
  }
};

// Don't change below:
module.exports = { median };
