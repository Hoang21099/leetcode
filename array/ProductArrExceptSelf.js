// var productExceptSelf = function (nums) {
//   let sufArr = nums.map((item) => 1);
//   let preArr = nums.map((item) => 1);

//   let ans = [1];

//   let left = 1;
//   let right = nums.length - 2;

//   while (right >= 0 || left < nums.length) {
//     if (right >= 0) {
//       sufArr[right] = sufArr[right + 1] * nums[right + 1];
//       right--;
//     }

//     if (left < nums.length) {
//       preArr[left] = preArr[left - 1] * nums[left - 1];
//       left++;
//     }
//   }

//   for (let i = 0; i <= nums.length - 1; i++) {
//     ans[i] = preArr[i] * sufArr[i];
//   }

//   return ans;
// };

var productExceptSelf = function (nums) {
   
    let ans = [1];
    let sufix = 1;
    let prefix = 1;

    for(let i=0;i<nums.length ;i++){
        ans[i] = prefix;
        prefix *=nums[i];
    }

    for(let i=nums.length-1;i>=0;i--){
        ans[i] *= sufix;
        sufix *= nums[i];
    }
   
    return ans;
  };

productExceptSelf([1, 2, 3, 4]);
