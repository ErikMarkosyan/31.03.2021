// let obj = {
//   x:1,
//   y:2,
//   b:3,
// }

// console.log("x" in obj);
// console.log("z" in obj);
// console.log("b" in obj);

// let b = "booooo";

// console.log(b in obj);
// console.log(b);

let someobj = new Object(); // ստեղծում ենք բյեկտ


let gg = {     // ստեղծում ենք բյեկտ      
                // ստեղծում ենք բյեկտ
};                // ստեղծում ենք բյեկտ


someobj.age = '22'; // someobj- ին ավելացնում եմ age անունով key որի մեջ կա 22 սթրինգ

gg['car'] = "G class";  // gg-ին ավելացնում եմ car անունով key որի մեջ կա 'g class' սթրինգ

console.log("age" in someobj) // ստուգում եմ թե կա someobj-ի մեջ age key թե չէ 

someobj.name = "Grno"; // 
someobj['surname'] = "Shahnazaryan";
someobj.age = "75";
someobj['gender'] = "male";
someobj['maried'] = "not married"; 

for (let key in someobj) {
  // console.log("x>", key);

  // console.log("q>>", someobj[key]);
}

let xyz = {
  x:100,
  y:150,
  z:200,
};

// for (let key in xyz) {
//   console.log(xyz[key]*20/100);
// }
let previousValue = 0; // փոփոխականին վերագրում ենք սկզբնական արժեքը
for (let key in xyz)  {
  // console.log(xyz[key]+previousValue);
  previousValue = xyz[key]*20/100; //փոփոխականին ասում ենք, որ օբյեկտի վալյուին ավելացնի նախորդ վալյուի արժեքի 20 տոկոսը
};

let aziz = {
  name: "aziz",
  age: 42,
  isAdmin: false,
};

let args = ""; // ստեղծում ենք փոփոխական դատարկ արժեքով

for (let key in aziz) { // ցիկլ 
  if (!args) { // եթե ունենք դատարկ args 
    console.log(args); // լոգ ա անում <<ֆըրսթ>>
    args = `${key}: ${aziz[key]}`// args-ին վերագրում ենք aziz-ի քին ու վալյուն
    console.log(args);
  } else { // կամ եթե դատարկ չի args-ը 
    console.log(`${key}=> ${args}`); // լոգ ա անում aziz-ի նախորդի key եւ value-ն
    args = `${key}: ${aziz[key]}` // args-ին վերագրում ենք հերթական իտերացիան
  }
}; // 

