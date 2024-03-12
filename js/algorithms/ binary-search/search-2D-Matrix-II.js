// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
 

// Example 1:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

// Example 2:
// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matrix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -109 <= target <= 109

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  debugger;
  let start = 0;
  let end = matrix.length;
  let middle = Math.floor((start + end) / 2);

  while(start < end) {
      if(matrix[middle][middle] === target) return true;

      if(matrix[middle][0] < target && matrix[middle][middle] > target){
          let temp = middle - 1;
          
          while(temp > 0) {
              if(matrix[middle][temp] === target) return true;
              temp--;
          }

      }
      
      if(matrix[middle][0] > target) {
          start = middle + 1;
      } else {
          end = middle;
      }

      middle = Math.floor((start + end) / 2);
  }

  return false;
};

// solution 2

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)