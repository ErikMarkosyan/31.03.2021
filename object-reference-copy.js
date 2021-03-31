let user1 = {
  name: "Carlos",
  age: 43,
  isAdmin: false,
};

let user2 = user1; // Ստեղ user2-ը ասում ենք որ նույն user1-ն ա

// console.log(user1);
// console.log(user2);

// user2.name = "Vrdo"; // user2 ում փոխեցինք անունը, բայց փոխվեց նաեւ user1-ում, որտեւ կլոն չի այլ վերագրված ա։
// console.log(user1); 
// console.log(user2);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Կլոնավորում ենք, որպիսի օբյեկտները իրարից լինեն անկախ։ Դրա համար օգտագործում ենք 'for in' loop.

let user3 = {} // ստեղծում ենք լրիվ դատարկ օբյեկտ

// for (let key in user1) {
  // user3[key] = user1[key]; // Սրանով մեր ստեղծած user3 օբյեկտին տվեցինք user1ի key: value-ները բայց ինքը լրիվ անկախ ա ու անունը
// }                           // user3 փոխելուց user1 ում կմնա անփոփոխ 

// console.log(user1); ստեղ 2ն էլ նույնն են
// console.log(user3);

// user3.name = "Ponch";

// console.log(user3); ստեղ արդեն լոգ ա անում նոր անուն 

// Object.assign(user1, [src1, src2, src3...]) ?????????????????

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

let user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

// alert( user4.sizes.height ); // 182

let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user5);

// alert( user4.sizes === clone.sizes ); // true, same object

// user and clone share sizes
// user4.sizes.width++;       // change a property from one place
// alert(clone.sizes.width); // 51, see the result from the other one

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// Const objects can be modified

const user6 = {
  name: "John"
};

user6.name = "Pete";

//console.log(user6.name); // Pete

// console.log(user6);