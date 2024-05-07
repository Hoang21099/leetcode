class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    // For undirected graph, you would also add the reverse edge
    // this.adjacencyList[vertex2].push(vertex1);
  }

  dfs(start, target) {
    const visited = {};
    const stack = [start];
    const result = [];

    visited[start] = true;

    let count = 0;

    while (stack.length) {
      count += 1;

      const currentVertex = stack.pop();
      result.push(currentVertex);

      console.log("Node ", currentVertex, count);

      for (let neighbor of this.adjacencyList[currentVertex]) {
        count += 1;
        console.log("Child ", neighbor);

        // if (neighbor == target) {
        //     console.log(count);
        //   return true;
        // }

        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    console.log(count);

    return false;
  }

  dfsRecursive(start) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(start);
    return result;
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("H");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("C", "H");

// graph.addEdge("B", "D");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("F", "C");

graph.addEdge("A", "B");
graph.addEdge("A", "H");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "H");

const rs = graph.dfs("B", "H");

if (rs) {
  console.log("Đúm");
} else {
  console.log("Tha");
}

console.log(graph.dfs("B", "H")); // Output: [ 'A', 'C', 'F', 'D', 'E', 'B' ]
