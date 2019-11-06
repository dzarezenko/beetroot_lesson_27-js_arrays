let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

/*let filterEven = (e) => {
  return (e % 2 == 0);
}

let arr1 = arr.filter(filterEven);
console.log(arr1);
console.log(arr);

arr.push("test");
arr.push("hello");
console.log(arr);
let x = arr.find((e) => {
  return (typeof e == "string");
});
console.log(x);*/

let arr1 = arr.map((e) => {
  return (e % 2 == 0) ? (e * e) : (e * e * e);
});
console.log(arr1);
//console.log(arr);

let arr2 = arr1.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;

  // return a - b
});
console.log(arr2);

console.log(arr);
let sum = arr.reduce((total, e) => {
  return total + e;
}, 0);
console.log(sum);

let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1+= arr[i];
}
console.log(sum1);

let sum2 = 0;
for (let key in arr) {
  sum2+= arr[key];
}
console.log(sum2);
