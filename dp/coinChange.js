/**322. Coin Change
Solved
Medium
Topics
Companies
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

/**Initialization of DP Array: This step takes O(amount) time, where amount is the target amount of money. We initialize an array of size amount + 1 and fill it with initial values, which takes linear time.
Updating DP Array: We have two nested loops:
The outer loop runs from 1 to amount, so it iterates amount times.
The inner loop iterates through each coin, but the number of iterations for the inner loop depends on the number of coins available. Let's denote the number of coins as n. Therefore, the inner loop can take at most O(n) time.
The overall time complexity of the solution is O(amount * n), where:

amount is the target amount of money.
n is the number of coins.
In the worst case, if amount is large and n is also large (many coins), the time complexity can be significant.

The space complexity of the solution is O(amount) because we use a DP array of size amount + 1 to store the minimum number of coins needed for each amount.
 */

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
