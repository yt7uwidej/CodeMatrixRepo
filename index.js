function rob(nums) {
  if (nums.length === 1) return nums[0];
  const robRange = (start, end) => {
    let prevMax = 0;
    let currMax = 0;
    for (let i = start; i <= end; i++) {
      const temp = currMax;
      currMax = Math.max(currMax, prevMax + nums[i]);
      prevMax = temp;
    }
    return currMax;
  };
  return Math.max(robRange(0, nums.length - 2), robRange(1, nums.length - 1));
}
