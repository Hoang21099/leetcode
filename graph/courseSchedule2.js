// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = new Map();
  let queue = [];
  let indeep = Array(numCourses).fill(0);

  let order = [];

  for (let [e, v] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    indeep[e]++;
  }

  for (let i in indeep) {
    if (indeep[i] === 0) queue.push(i);
  }

  while (queue.length) {
    let node = +queue.shift();

    if (graph.has(node)) {
      for (let e of graph.get(node)) {
        indeep[e]--;

        if (indeep[e] === 0) queue.push(e);
      }
    }
    order.push(node);
  }
  console.log(graph);

  return order;
};

function findAllCourseOrders(numCourses, prerequisites) {
  const adjacencyList = new Array(numCourses).fill(null).map(() => []);
  const inDegree = new Array(numCourses).fill(0);
  const result = [];

  // Build adjacency list and in-degree array
  for (const [course, prerequisite] of prerequisites) {
    adjacencyList[prerequisite].push(course);
    inDegree[course]++;
  }

  let j = 0;

  function dfs(order) {
    j++;
    if (order.length === numCourses) {
      result.push([...order]);
      return;
    }
    j--;

    for (let i = 0; i < numCourses; i++) {
      j++;

      console.log("\n aa", i, inDegree[i]);

      if (inDegree[i] === 0) {
        // Choose a course with no prerequisites
        order.push(i);
        inDegree[i]--;

        // Update in-degree for the courses that depend on the chosen course
        for (const dependentCourse of adjacencyList[i]) {
          inDegree[dependentCourse]--;
        }

        // Recur with the updated order
        dfs(order);

        console.log("\n ss", i);

        // Backtrack
        order.pop();
        inDegree[i]++;
        for (const dependentCourse of adjacencyList[i]) {
          inDegree[dependentCourse]++;
        }
      }
    }
  }

  dfs([]);

  console.log(j);

  return result[0];
}

console.log(
  findAllCourseOrders(8, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
    [4, 2],
    [5, 1],
    [6, 3],
    [7, 2],
  ])
);
