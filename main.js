let result = [];
var runningSum = function (nums) {
    let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
     
      result.push(sum);
   
    }
    return result;
};
let arr = [1, 1, 1, 1,1];
console.log(runningSum(arr));

