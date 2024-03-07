// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const searchValue = function (nums, target, isLeft) {
  let i = isLeft ? 0 : nums.length - 1;
  const end = isLeft ? nums.length - 1 : 0;
  while (i !== end) {
      if (nums[i] === target) {
          return i;
      }

      if ((isLeft && nums[i] > target) || (!isLeft && nums[i] < target)) {
          return -1;
      }

      if (isLeft) {
          i++;
      } else {
          i--;
      }
  }

  return -1

}

var searchRange = function (nums, target) {
  const arr = [-1, -1];

  if (nums.length === 0) return arr;

  arr[0] = searchValue(nums, target, true);
  arr[1] = searchValue(nums, target, false);

  return arr;
};