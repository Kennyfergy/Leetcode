// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:
// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// brute force
function rotate(nums, k) {
  let n = nums.length;
  k = k % n;
  for (let step = 0; step < k; step++) {
    let previous = nums[n - 1];
    for (let i = 0; i < n; i++) {
      let temp = nums[i];
      nums[i] = previous;
      previous = temp;
    }
  }
}

// using extra array
function rotate(nums, k) {
  let n = nums.length;
  k = k % n;
  let rotated = new Array(n);
  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
}

function rotate(nums, k) {
  let n = nums.length;
  k = k % n;
  let rotated = new Array(n);
  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
}

//in place with reversals
function rotate(nums, k) {
  let n = nums.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
}
