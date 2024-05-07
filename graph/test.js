const inputGraph = [
  ["B", "A"],
  // ["H", "D"],
  ["F", "A"],
  ["C", "B"],
  ["D", "C"],
  ["K", "C"],

  ["H", "F"],
];

var testFunc = () => {
  let preMap = {}; // preMap == adjancencyList

  for (let item of inputGraph) {
    if (!preMap[item[0]]) {
      preMap[item[0]] = [];
    }

    if (!preMap[item[1]]) {
      preMap[item[1]] = [item[0]];
    } else {
      preMap[item[1]].push(item[0]);
    }
  }

  console.log(preMap);

  var i = 0;

  const dfs = (friend, badFriend) => {
    i = i + 1;
    console.log(friend, i);

    if (!preMap[friend]?.length) {
      return false;
    }

    for (const item of preMap[friend]) {
      if (item == badFriend || dfs(item, badFriend)) {
        return true;
      }
    }
    preMap[friend] = [];

    return false;
  };

  if (dfs("A", "H")) {
    console.log("time: ", i);

    return "Có quan hệ";
  }
  console.log("time: ", i);

  return "ko quan hệ, Dứt";
};

console.log(testFunc());
