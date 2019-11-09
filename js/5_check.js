/*2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены 
за единицу товара. Написать следующие функции:*/

//Распечатка чека на экран; // не поняла что делать, если просто весь массив объектов вывести alert, то как?

//Подсчет общей суммы покупки;
let check = [
    {product:"beer", qty:4, price:20,},
    {product:"snacks", qty:5, price:10,},
    {product:"fish", qty:3, price:40,},
    {product:"water", qty:2, price:15,},

];

console.log(check);
let str = "";
for (let p of check) {
  str+= `${p.product}: ${p.qty} = ${p.price}\n`;
}
alert(str);

let sum=0;
for (let i=0; i<check.length; i++) {
    sum+=check[i].qty*check[i].price;
}
console.log(sum); 

//Получение самой дорогой покупки в чеке;
let is_expensive=0;
for (let i=0; i<check.length; i++) {
    
    a=check[i].qty*check[i].price;
  if (a>is_expensive) {
    is_expensive=a;
  };
}
console.log(is_expensive);

//Подсчет средней стоимости одного товара в чеке.
let total_qty=0;
for (let i=0; i<check.length; i++) {
    total_qty+=check[i].qty;
}
console.log(total_qty);
let middle_price = sum/total_qty;
console.log(middle_price);