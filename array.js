

//function info(firstName,lastName){ // info հայտարարըմ ենք funcion declaration տալիս ենք 2առգումենտ 
	// return firstName + "-" + lastName // վերադարձնում ենք առգումենտների գումարը (concat)
  // return `${firstName}-${lastName}` // վերադարձնում ենք առգումենտների գումարը (concat)
//} 

// console.log(info('John', 'Wick')); // կանչում ենք ֆունկցիան տալով առգումենտներ 

// const getDate = (bornYear, age) => { //հայտարարում ենք function expression տալիս ենք 2առգումենտ
// 	return bornYear + age // վերադարձնում ենք առգումենտների գումարը
// } 
// console.log(getDate(1997, 24)); // կանչում ենք ֆունկցիան տալով առգումենտներ

// const timeNow = function () { //հայտարարում ենք function expression, որը չունի առգումենտ
// 	return new Date() // վերադարձնում ենք նոր Data constructr function 
// }

// console.log(timeNow()); // լոգ ենք անում ֆունկցիան առանց առգումենտ

// function totalInfo(fc1, fc2, fc3) { // հայտարարում ենք funcion declaration, որին տալիս ենք 3առգումենտ 
// /* 	return fc2(1997,24) // callback function'''' return arac funkcian kochvum a callback functia */

// 	//return fc1('John', 'Wick');
//   /* return fc3 () */
//   return {	// վերադարձնում ենք օբյեկտ, որի քին info ֆունկցիան ա, որիը ստանում ա, որպես վալյու fc1
//   //որին  տալիս ենք 2առգումենտ 
//   info: fc1('John', 'Wick')	
  
//   }
  
// }

// console.log(totalInfo(info,getDate,timeNow));

// Array.prototype.newMap = function(fc) {
//   this
//   for (let i = 0; i < this.length; i++){
//     return fc(this[i], i)
//   }
// }

// [1,2,3]newMap(function fc(item,index)) {

// })




// const arr = 'Hello'; // փոփոխական սթրինգ
// /* console.log(arr.split("")); */


// function calc(some){ // ֆունկցիա առգումենտով 
//   let splited = some.split(''); // փոփոխականին տալիս ենք սփլիթ մեթոդ
//   const reversed =  splited.reverse(arr); // reversed-ին տալիս ենք սփլիթիդը որը ռեւեռս ա լինում ու որպես առգումենտ տալիս ենք մեր ըռեյը 
//   return reversed.join(""); // վերադարձնում ենք ռեւեռս էղած ըռեյը, որդը արդեն կլինի, 'olleH'
  
// }

// /* console.log(calc(arr)); */

// const arr1 = [1,2,3,4,5,6,7,8,9,10];

// function sum(something){
// const newArr = something.map((arrItem, index) => { 
// 	return arrItem + arr[index+1] // 
// })
// }

// /* sum(arr1) */


// for (let i = 0; i<arr.length; i++) {
// console.log(newArr[i]);
// }


// METHODS OF ARRAYS

// array + loop 
let q = ["a","b","c"];

let g = 0
for( g ;  g < q.length; g++) { // ցիկլով տվել ենք փոփոխական, ու քանի մեր ըռեյի երկարությունը մեծ մեր փոփոխականի արժեքից՝ լոգ անի ըռեյի վալյուները մինչեւ հասնի 3ի (ըռեյի երկարության)
	/* console.log(q[g]) */
}

/* Կարելիա գրել նաեւ սենց */

for(const key in q){
console.log(q[key]); // լոգ կանի ըռեյի քիերը առանձին իսկ ,,,,,
}

let arr1 = ['BMW', 'Mercedes', 'AUDI',]//['5', 'S-class', 'A8'];

//console.log(arr1[0][3][0]); // ուզում եմ տա բմվ 5

arr1.push('Porsche'); // ․push ավելացնում ա վալյու ըռեյի վերջից
/* console.log(arr1); */

arr1.pop(); // .pop ջնջում ա ըռեյի վերջի վալյուն
/* console.log(arr1); */ 

arr1.unshift('Volkswagen');// .unshift ավելացնում ա վալյու ըռեյի սկզբում 
/* console.log(arr1); */

arr1.shift(); // .shift ջնջում ա ըռեյի առաջի վալյուն 
/* console.log(arr1); */

/* էս վերջի 2հատն ավելի դանդաղ ենք աշխատում, որտեւ ինդեքսացիան փոխվում ա */

let arr = ["Яблоко", "Апельсин", "Груша"];
/* let i = 0
for (i; i < arr.length; i++) {
  console.log( arr[i] );
} */

// Splice - ջնջում ա էլեմենտը ըստ մեր տված ինդեքսի

menu = ['BBQ', 'Pasta', 'Pizza', 'Fries', 'Soups'];
// console.log(menu.splice(0,2)); // ընդորում ջնջում մեր տված ինդեքսը մինուս 1
// մյուս տարբերակը՝ ջնջելուն զուգահեռ ավելացնել նորը 
let menuUpdate = menu.splice(0,3, 'Cola', 'water', 'alcohol');
/* console.log(menuUpdate); // ու չի աշխատում */

// Slice - վերադարձնում ա նոր ըռեյ քոփի անելով մեր տված ինդեքսների միջակայքում էղած էլեմենտները

dist = ['kentron', 'davtashen', 'arabkir', 'shengavit', 'malatia', 'avan'];
// console.log(dist.slice(1,4)); // լոգ կանի "davtashen", "arabkir", "shengavit"

// Concat - վերադարձնում ա նոր ըռեյ, որի մեջ քոփի ա անում մեր տված ըռեյների  էլեմենտները
/* console.log(dist.concat("erebuni", "zeytun", "nork")); */

// forEach - loop

// search in array /indexOf, lastIndexOf, includes

// indexOf - ցույց ա տալի մեր գրած էլեմենտի ինդեքսը
/* console.log( dist.indexOf('arabkir') ); */

// lastIndexOf - նույնն ա ուղղակի աջից ա սկսում 
/* console.log( dist.lastIndexOf('kentron') ); */

// includes - ասում ա մեր տված էլեմենտից կա թե չէ 

// console.log(dist.includes('kentron'));

// METHODS OF ARRAYS

// Splice - ջնջում ա էլեմենտը ըստ մեր տված ինդեքսի

menu = ['BBQ', 'Pasta', 'Pizza', 'Fries', 'Soups'];
// console.log(menu.splice(0,2)); // ընդորում ջնջում մեր տված ինդեքսը մինուս 1
// մյուս տարբերակը՝ ջնջելուն զուգահեռ ավելացնել նորը 
let menuUpdate = menu.splice(0,3, 'Cola', 'water', 'alcohol');
/* console.log(menuUpdate); // ու չի աշխատում */

// Slice - վերադարձնում ա նոր ըռեյ քոփի անելով մեր տված ինդեքսների միջակայքում էղած էլեմենտները

dist = ['kentron', 'davtashen', 'arabkir', 'shengavit', 'malatia', 'avan'];
// console.log(dist.slice(1,4)); // լոգ կանի "davtashen", "arabkir", "shengavit"

// Concat - վերադարձնում ա նոր ըռեյ, որի մեջ քոփի ա անում մեր տված ըռեյների  էլեմենտները
/* console.log(dist.concat("erebuni", "zeytun", "nork")); */

// forEach - loop

/* let forEach = function(hopar, poxos){

  while( let i = 0 ; i<arr.length; i++)
} */

// search in array /indexOf, lastIndexOf, includes

// indexOf - ցույց ա տալի մեր գրած էլեմենտի ինդեքսը
/* console.log( dist.indexOf('arabkir') ); */

// lastIndexOf - նույնն ա ուղղակի աջից ա սկսում 
/* console.log( dist.lastIndexOf('kentron') ); */

// includes - ասում ա մեր տված էլեմենտից կա թե չէ 

/* console.log(dist.includes('kentron')); */

// Find - գթնում ենք օբյեկտը, որը համապատասխանում ա մեր տված պայմաններին

qx = [
{id: 1, name:'givi'},
{id: 2, name:'mmik'},
{id: 3, name:'aper'},
{id: 4, name:'@nger'},
];

let xers = qx.find(item => item.id == 1); // մտի item-ի մեջ ու գթի id,որ == 1-ի 
/* console.log(xers.name); // ասում եմ, որի ինդեքսը 1ա իրա անունը լոգ արա */

// Filter - գտնում ա առաջի էլեմենտը, որի քոլբեք ֆունկցիան թռու ա 

users1 = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let someUsers = users1.filter(item => item.id < 3); // մտի item-ի մեջ ու գթի id-ները, որ 3ից փոքր են

/* console.log(someUsers); // վասյան ու պեծյան ա ցույց տալիս */

// MAP - կանչում ա ֆունկցիա՝ ըռեյի ամեն էլեմենտի համար ու վերադարձնում ա ըռեյէդ ֆունկցիայի արդյունքներով

/* garage = ['audi', 'bmw', 'mercedes']; */
// 
let lengths = ['audi', 'bmw', 'mercedes', true, 44].map(item => item.length);
// վերոնշյալ ֆունկցիայով ասում ենք, որ գնա էս ըռեյի ամեն այթըմի երկարությունը վերադարձնի մեզ
// ընդ որում մենակ սթրիներին ա վերաբերվում էս item.length-ը, բուլյան ու նամբըրը անդիֆայնդ են 
//console.log(lengths); // [4, 3, 8, undefined, undefined]

// Sort(fn) - սորտավորման համար ա

xary = [263,1,0,78];
/* console.log(xary.sort()); // [0, 1, 263, 78] սխալ ա անում՝ համեմատում ա որպես սթրինգ, որպեսզի ճիշտ անի մի քիչ շամանություն ա պետք */ 

/* function compare(a,b){
if(a>b) return 1; // ընչ՞ի
if (a == b) return 0; // ընչ՞ի
if (a < b) return -1; // ընչ՞ի
} */

/* xary.sort(compare);// որպես առգումենտ տալիս ենք էն ֆունկցիան, որ սաղ քցի իրա տեղը */
/* console.log(xary); // [0, 1, 78, 263] */

// կարելիա գրել սենց
xary.sort(function(a, b) {
return a - b; 
});
/* console.log(xary); //[0, 1, 78, 263] */

// Reverse - փոխում ա էլեմենտների դասավորվածությունը

norm = [1,2,3,4,5,6,7,8,9]; // 1, 2, 3, 4, 5, 6, 7, 8, 9
//console.log(norm);
norm.reverse();
//console.log(norm);// 9, 8, 7, 6, 5, 4, 3, 2, 1

// Split - 
let names = 'Вася, Петя, Маша';

let arr = names.split(', ');

for (let name of arr) {
  //console.log(( `Сообщение получат: ${name}.` )); // կսարքի 3հատ ըռեյ ամեն մի անվան համար
}

// ստրանով տալիս ենք ինդեքս, որից սկսած անտեսում ենք 
let arr1 = 'Вася, Петя, Маша, Саша'.split(', ', 2);

// console.log((arr1)); // լոգ կանի Вася, Петя

// եթե սփլիթին տալս ենք պռաբելով սթրինգ ինքը ըռեյը բաժանում ա էլեմենտների՝ սթրինգ սարքած 
let str = "тест";

/* console.log(str.split('')); // "т", "е", "с", "т", */
 
 // ջոինը միացնում ա ըռեյի էլեմենտները մեր տված սթրինգ արժեքով
let join = arr1.join('111');
/* console.log(join); // լոգ ա անում "Вася111Петя" */

// reduce Հովոոոոոոոոոոոոոոոոոոոոոոոոոոո

// Array.isArray ստուգում ա ըռեյ ա թե ըռեյ չի

// console.log(menu.isArray([])); ????????

// this.Arg ???????????

// ARRAY METHODS 

// սրա հետ հարցեր կան 
// Splice - ջնջում ա ըռեյի վալյուն 

let arr1 = ['Bach', 'Hiden', 'Stravinsky', 'Verdi'];

arr1.splice(1,2,3); // ջնջում ա վալյուները՝ ըստ մեր տված ինդեքսների
// console.log(arr1); 

// նաեւ կարա ավելացնի վալյուներ ջնջելուն տեղը

arr1.splice(1, 'father', 'of composers'); // "Bach", "father", "of composers", "Verdi"
// console.log(arr1);

// Slice - վերադարձնում ա նոր ըռեյ, որտեղ քոփի ա անում վալյուները,որ մեր ինդեքսների միջակայքում են

let yerevanDistricts= ['Kentron', 'Nork', 'Shengavit', 'Malatia', 'Nubarashen', 'Arabkir'];

yerevanDistricts.reverse();
// console.log(yerevanDistricts);

/* Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.

Объявление:

// квадратные скобки (обычно)
let arr = [item1, item2...];

// new Array (очень редко)
let arr = new Array(item1, item2...);
Вызов new Array(number) создаёт массив с заданной длиной, но без элементов.

Свойство length отражает длину массива или, если точнее, его последний цифровой индекс плюс один. Длина корректируется автоматически методами массива.

Если мы уменьшаем length вручную, массив укорачивается.

Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

push(...items)добавляет items в конец массива.
pop() удаляет элемент в конце массива и возвращает его.
shift() удаляет элемент в начале массива и возвращает его.
unshift(...items) добавляет items в начало массива.
Чтобы пройтись по элементам массива:

for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
for (let i in arr) – никогда не используйте для массивов! */

