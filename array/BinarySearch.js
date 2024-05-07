var binarySearch = (arr, left, right, item) => {
  const center = Math.floor((left + right) / 2);

  if (item === arr[center]) {
    return center;
  } else if (item > center) {
    return binarySearch(arr, center, right, item);
  } else {
    return binarySearch(arr, left, center, item);
  }
};

console.log(binarySearch([1, 2, 3, 4, 5], 0, 4, 3));
