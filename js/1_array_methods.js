let arr = [1, 2, "hello", 3, 4, 5, true];
console.log(arr);

let e = arr.pop();
console.log(arr);
console.log(e);

let a = arr.push(() => {});
console.log(arr);
console.log(a);

let b = arr.unshift("test");
console.log(arr);
console.log(b);

let c = arr.shift();
console.log(arr);
console.log(c);

console.log(Array.isArray(arr));
console.log(Array.isArray("test"));
console.log(Array.isArray([]));

let str = "Vasya,Pupkin,1995";
let person = str.split(",");
console.log(person);

str = person.join("|");
console.log(str);

console.log(arr.keys());
console.log(arr.values());
for (let el of arr.values()) {
  console.log(el);
}
