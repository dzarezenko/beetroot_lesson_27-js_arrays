let arr = [1, 2, "hello", 3, 4, 5, true];

console.log(arr);
console.log(typeof arr);
console.log(arr.length);

for (let k in arr) {
  console.log(`${k}: ${arr[k]} (` + typeof arr[k] + `)`);
}
