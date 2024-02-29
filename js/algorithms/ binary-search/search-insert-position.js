// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, 
// return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  let startIndex = 0;
  let endIndex = nums.length - 1;

  while(startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);

      if(nums[middleIndex] < target) {
          startIndex = middleIndex + 1;
      } else if(nums[middleIndex] > target) {
          endIndex = middleIndex - 1;
      } else {
          return middleIndex;
      }
  }

  return startIndex;
};
