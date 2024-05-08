/**735. Asteroid Collision
 * Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 */

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0 || i === 0) {
      stack.push(asteroids[i]);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroids[i])
      ) {
        stack.pop();
      }

      if (stack[stack.length - 1] + asteroids[i] === 0) {
        stack.pop();
      } else if (stack[stack.length - 1] < 0 || !stack.length) {
        stack.push(asteroids[i]);
      }
    }
  }

  return stack;
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [10]
console.log(asteroidCollision([-2, -2, 1, -2])); // [-2,-2,-2]
console.log(asteroidCollision([-2, -2, 1, -1])); // [-2,-2]
console.log(asteroidCollision([1, -2, -2, -2])); // [-2,-2,-2]
