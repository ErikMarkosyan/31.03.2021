let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

// օբյեկտների մեջ key: value ավելացնելու 2ձեւ կա։

//  1. user1 ին տալիս ենք անուն,, տարիք, սեռ։

user1.name = "Mike";
user1.age = 54;
user1.gender = "male";
console.log(user1);

//  2. user1 ին տալիս ենք ազգանուն, ադմին

user1['surname'] = "Tigranyan";
user1['isAdmin'] = false;
