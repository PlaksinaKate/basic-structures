// Search a 2D Matrix
// Medium
// Topics
// Companies
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let start = 0;
  let end = matrix.length;
  let middle = Math.floor((start + end) / 2);

  while(start < end) {
      const length = matrix[middle].length - 1;

      if(matrix[middle][length] >= target && matrix[middle][0] <= target) {
          let start2 = 0;
          let end2 = length;
          let middle2 = 0;

          while(start2 <= end2) {
              middle2 = Math.floor((start2 + end2) / 2);

              if(matrix[middle][middle2] === target) {
                  return true;
              } else if(matrix[middle][middle2] > target) {
                  end2 = middle2 - 1;
              } else {
                  start2 = middle2 + 1;
              }
          }

          return false;

      } 
      
      if(matrix[middle][0] > target) {
          end = middle;
      } else if(matrix[middle][0] < target) {
          start = middle + 1;
      } else {
          start++;
      }
    
        middle = Math.floor((start + end) / 2);
  }

  return false;
};