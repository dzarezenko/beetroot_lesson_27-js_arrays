let list = [
  {product: "cake",  qty: 10, bought: true,},
  {product: "milk",  qty: 3, bought: false,},
  {product: "tea",  qty: 2, bought: true,},
  {product: "meat",  qty: 1, bought: false,},
];

//- Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
list.sort((a, b) => a.bought - b.bought);//начал смотреть со второй строки, два раза последнюю и ни разу первую???????
console.log(list);
//alert(list); -надо вывести через alert? как?
