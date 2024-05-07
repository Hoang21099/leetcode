// A Naive recursive Javascript program to
// find minimum of coins to make a given
// change V

// m is size of coins array
// (number of different coins)
function minCoins(coins, m, V) {
  // Base case
  if (V == 0) return 0;

  // Initialize result
  let res = Number.MAX_VALUE;

  // Try every coin that has smaller
  // value than V
  for (let i = 0; i < m; i++) {
    if (coins[i] <= V) {
      let sub_res = minCoins(coins, m, V - coins[i]);

      // Check for INT_MAX to avoid overflow and
      // see if result can minimized
      if (sub_res != Number.MAX_VALUE && sub_res + 1 < res) res = sub_res + 1;
    }
  }
  return res;
}

// Driver code
let coins = [2,3];
let m = coins.length;
let V = 5;

console.log(minCoins(coins, m, V));




// Quick Note - Greedy Programming v/s Dynamic Programming
// Coin Change Problem: DP and Recursion Approach
// A Definitive Guide to Knapsack Problem
// How to Solve Subset Sum Problem?
// Understanding Huffman Coding in detail
// Understand the working of KMP Algorithm
// Longest Common Substring Problem
// Longest Common Subsequence problem: solved
// A Quick Guide to Manacher's Algorithm
// Learning About Bipartite Graphs
// Graph Coloring Problem: Explained
// Detect Cycle in Direct Graph
// Directed Acyclic Graph: Representation
// Prim's Algorithm: Explanation, Code, and Applications
// Working of Kruskal's Algorithm
// Prims and Kruskal algorithm for Maximum Spanning Tree
// Bellman Ford Algorithm in detail with code
// Floyd-Warshall Algorithm and its Implementation
// Understand Travelling Salesman Problem
// Branch And Bound Algorithm: Explained
// How to Evaluate Postfix Expression
// Introduction to Round-Robin Scheduling
// Disjoint set (Union find Algorithm)
// State Space Reduction in Algorithms
// Apriori Algorithm
// What is A* Search Algorithm?
// Outline of Article
// Naive approach - Brute Force Recursion
// Pro Approach - Dynamic Programming & Recursion [Optimal Time Complexity]
// All codes are in C++, Java, and Python.

// Introduction
// Problem: Given a set of coins and a value 'V'. Find the number of ways

// we can make a change of 'V'.  

// OR

// You are given an array of coins of size n, each representing a coin of a distinct denomination. Target is another value that you are given. Discover the various combinations that make up the desired quantity. Consider that there are endless quantities of each type of coin.

// Ex : Problem: S = {1,2,3} V = 3

// Possible ways to make change are; {3}, {2,1}, {1,1,1}

// Note: {1,2} are not counted as separate as it is the same as {2,1}

// Naive Approach - Exponential Complexity
// We can use a brute force recursion to fix this issue crudely. We can try every conceivable combination of taking coins to equal the desired amount, adding them all up to determine how many ways there are to get the desired amount.
// The simplest scenario would be when we have no coins or when the goal is to reach zero.
// Time Complexity: O(targetn) // Exponential
// Space Complexity: O(targetn) // Exponential
// int coinChange(vector<int> &coins, int n, int target) {
//    if(target == 0) {
//        return 1;
//    }
//    if(target < 0) {
//        return 0;
//    }
//    if(n <= 0  && target > 0) {
//        return 0;
//    }
//    return coinChange(coins, n - 1, target) + coinChange(coins, n, target - coins[n - 1]);
// }
// int numberOfCombinations(vector<int> &coins, int target) {
//    int n = coins.size();
//    return coinChange(coins, n, target);
// }
