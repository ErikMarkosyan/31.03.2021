let user1 = new Object(); // "object constructor" syntax
// let carMercedes = {};  // "object literal" syntax

// օբյեկտների մեջ key: value ավելացնելու 2ձեւ կա։

//  1. user1 ին տալիս ենք անուն,, տարիք, սեռ։

user1.name = "Mike";
user1.age = 54;
user1.gender = "male";
// console.log(user1);

//  2. user1 ին տալիս ենք ազգանուն, ադմին

user1['surname'] = "Tigranyan";
user1['isAdmin'] = false;

// կարանք փոխենք key-ի value-ն

user1['age'] = 17;

// կարանք ջնջենք isAdmin key-ն իրա value-ով

delete user1.isAdmin;
// կամ delete user["isAdmin"];

let carMercedes = {
  make: "Mercedes-Benz",
  model: "S-Class",
  body: "W221",
  year: 2010,
  color: "Black",
  engine: "V8",
  hp: "435 Horse Powers",
};
//console.log("<=>", carMercedes);

// ստուգումը թե արդյոք կա key value օբյեկտի մեջ անում ենք հետեւյալ ձեւով

console.log("make" in carMercedes ); //boolean  true or false
console.log("fuel" in carMercedes); // false

for (let key in carMercedes){  // loop
  // console.log(key); // լոգ ա անելու օբյեկտի մեջի key-երը
  console.log(carMercedes[key]); // լոգ ա անելու օբյեկտի մեջի value-ները 
};