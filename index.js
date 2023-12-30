var maximumSubarraySum = function (nums, k) {
  let windowSum = 0;
  let maxSum = 0;

  let len = nums.length;

  let start = 0;

  const map = new Map();

  for (let i = 0; i < len; i++) {
    windowSum += nums[i];

    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    console.log(map, "BEFORE");

    if (i - start + 1 > k) {
      windowSum -= nums[start];
      if (map.get(nums[start]) > 1) {
        map.set(nums[start], map.get(nums[start]) - 1);
      } else {
        map.delete(nums[start]);
      }
      start++;
      console.log("masuk gan");
    }

    console.log(map, "AFTER");
    console.log("===========================");

    if (i - start + 1 === k && map.size === k) {
      maxSum = Math.max(maxSum, windowSum);
    }
  }

  return maxSum;
};

console.log(maximumSubarraySum([1, 4, 4, 5, 4, 7, 8], 3));
