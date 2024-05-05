function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let product = 1;
  for (let i = 0; i < n; i++) {
    result[i] *= product;
    product *= nums[i];
  }
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
}
