var canFinish = (numCourses, prerequisite) => {
  let preMap = Array(numCourses).fill([]);

  for (const [e, v] of prerequisite) {
    preMap[v] = [...(preMap[v] ?? []), e];
  }

  console.log(preMap);

  let visited = {};

  function dfs(course) {
    if (visited[course]) {
      console.log("aaa");
      return false;
    }

    if (!preMap[course].length) {
      return true;
    }

    visited[course] = true;

    for (let item of preMap[course]) {
      if (!dfs(item)) {
        console.log(item, "ss", preMap);

        return false;
      }
    }

    visited[course] = false;
    preMap[course] = [];

    return true;
  }

  for (const course in preMap) {
    if (!dfs(course)) {
      console.log(course);
      return false;
    }
  }

  console.log(preMap);

  return true;
};

console.log(
  canFinish(3, [
    [1, 0],
    [2, 1],
  ])
);
