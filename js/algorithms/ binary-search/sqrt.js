// Given a non-negative integer x, return the square root of x rounded down 
// to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

// Constraints:

// 0 <= x <= 231 - 1

// Can be done with Binary using the old classic hi + lo / 2 until you find the sqrt.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let sqrt = 0;
  for(let i = 1; x > 0; i += 2 ){
      x = x - i
      if (x >= 0) {
          sqrt++
      }
  }
  return sqrt
};