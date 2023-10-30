let arr = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

function sortString(arr) {
  return arr.sort((a, b) => b.split(' ').length - a.split(' ').length);
}

console.log(sortString(arr));
