// Write your function here
function keep(arr, num) {
  return arr.filter(function(i) {  // filters elements that match the number to its own array
    return i === num;
  });
}

console.log(keep([1, 2, 3, 2, 1], 2));