var mergeSort = (arr, left, right) => {
  let pivot;

  if (left < right) {
    pivot = Math.floor((left + right) / 2);

    mergeSort(arr, left, pivot);
    mergeSort(arr, pivot + 1, right);
    // console.log("\n ori", arr.slice(left, right + 1), left, pivot, right);

    merge(arr, left, pivot, right);

    // console.log(" after", arr.slice(left, right + 1), left, pivot, right);
    // console.log("\n");
  }
};

var merge = (arr, left, pivot, right) => {
  let start2 = pivot + 1;
  let start1 = left;

  let k = left;

  const L1 = [];

  const L2 = [];

  for (let i = left; i < pivot + 1; i++) {
    L1.push(arr[i]);
  }

  for (let i = pivot + 1; i < right + 1; i++) {
    L2.push(arr[i]);
  }

  while (start1 <= pivot && start2 <= right) {
    if (L1[-left + start1] <= L2[-(pivot + 1) + start2]) {
      arr[k] = L1[-left + start1];

      start1++;
    } else {
      arr[k] = L2[-(pivot + 1) + start2];

      start2++;
    }
    k++;
  }

  while (start1 <= pivot) {
    arr[k] = L1[-left + start1];
    k++;
    start1++;
  }

  while (start2 <= right) {
    arr[k] = L2[-(pivot + 1) + start2];
    k++;
    start2++;
  }
};

const temps = [
  [1, 9, 3, 2, 5, 8, 10, 12, 11, 3, 2, 4, 5],
  [2, 0, 1, 4, 7, 9, 10, 3, 2],
  [2, 0, 1, 4, 5, 3, 2, 3],
];

var checkSorted = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (i > 0 && arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
};

temps.forEach((arr) => {
  mergeSort(arr, 0, arr.length - 1);

  console.log(arr);
  console.log(checkSorted(arr));
});
