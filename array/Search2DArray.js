function search2D(arr, num) {
  const m = arr.length;
  const n = arr[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log("🚀 ~ file: Search2DArray.js:10 ~ search2D ~ mid:", (mid % n))

    const midVal = arr[Math.floor(mid / n)][mid % n];

    if (midVal === num) {
      return true;
    } else if (midVal > num) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(
  search2D(
    [
      [1],
    ],
    1
  )
);
