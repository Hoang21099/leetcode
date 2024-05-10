/** 518. Coin Change II
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

 

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0);

  dp[0] = 1;

  for (let coin of coins) {
    for (let i = 0; i <= amount; i++) {
      dp[i] += dp[i - coin] || 0;
    }
  }

  console.log(dp);
  return dp[amount];
};

/**
Time Complexity: O(n * amount), where n is the number of coins and amount is the target amount of money. We iterate through each coin for each amount from 1 to amount, so the time complexity is O(n * amount).
 */

console.log(change(5, [1, 2, 5])); // 4
console.log(change(5, [2, 6])); // 4
