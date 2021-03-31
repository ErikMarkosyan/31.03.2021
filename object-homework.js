

const obj = {
first: 10,
second: 80,
thirds: 70
};



function maxFunction(obj45) {
  let maxValue = null; // ստեղ տալիս ենք դատարկ արժեք
for (const key in obj45) {
if(maxValue === null) { // եթե ստեղ խիստ համեմատում ենք
   maxValue = obj45[key];   // maxValue-ն վերագրում ենք obj[key]-ին
} else { // կամ
  if(obj45[key] > maxValue) { // եթե obj[key] մեծ ա maxValue-ից
    maxValue = obj45[key]; // maxValue-ին վերագրում ենք օբյեկտի քին 
  }
}
}

return maxValue
};

console.log(maxFunction(obj));

// console.log(maxValue); // տալիս ա 80
// Find the greatest property using for in loop


// let args1 = 0;

// for (const key in obj) {
//   if(!args1) {
//     // console.log(args1)
//     args = `${key}: ${obj[key]}` // էս չգիտեմ խի եմ գրում, բայց ենթադրում եմ, որ պիտի վալյուները համեմատվեն ինչ
//     //որ բանի հետ ու դրանց մաքսիմալ արժեքը տանք ինչ որ փոփոխականի
//     // console.log(args);
//   }
// };

// Create two objects
const obj1 = {};
const obj2 = {
x: 1,
y: 2,
};

function change(x,y) {
for (let key in x) {
  x[key] = y[key]; // սրանով կլոն եմ անում 
  delete y[key]; 
}
return {obj1:x,obj2:y}      // րեթուռնի կողքը միշտ մի բան պիտի լինի գրած, եթե էս {obj1:x,obj2:y}-ը լիներ տակը, կլիներ շատ վատ 
};

console.log(change(obj1,obj2));
// for (let key in obj2) {
//  // սրանով ջնջում քիերը
// };

// console.log(obj2);
// console.log(obj1);
  
// replace key values from obj2 to obj1 and delete in obj2, use for in, so result should looks like this
// const obj1 = {
// x: 1,
// y: 2
// };
  
// const obj2 = {};
  

// Create an object like this
const obj3 = {
apple: "good phone",
samsung: "bad phone",
};

let someValue = "" // դատարկ փոփոխական
let prevKey = "" // դատարկ փոփոխական

function replace(x1){
  for (let key in x1) {
    if(!someValue) {  // եթե կա դատարկ someValue 
      someValue = x1[key]; // դրան տալիս ենք օբյեկտի վելյուն  
      prevKey = key // իսկ ստեղ օբյեկտի քին 
    } else {
      x1[prevKey] = x1[key] // ստեղ օբյեկտի նախորդ քին ենք տալիս ցիկլի մեջի 
      
      x1[key] = someValue // ստեղ վակյույին տալիս ենք վալյուն 
    }
    }
    return {x1}
}

console.log('loop by function',replace(obj3));

// function change(x,y) {
//   for (let key in x) {
//     x[key] = y[key]; // սրանով կլոն եմ անում 
//     delete y[key]; 
//   }
//   return {obj1:x,obj2:y}
//   };
  
// for (let key in obj3) {
// if(!someValue) {  // եթե կա դատարկ someValue 
//   someValue = obj3[key]; // դրան տալիս ենք օբյեկտի վելյուն  
//   prevKey = key // իսկ ստեղ օբյեկտի քին 
// } else {
//   obj3[prevKey] = obj3[key] // ստեղ օբյեկտի նախորդ քին ենք տալիս ցիկլի մեջի 
  
//   obj3[key] = someValue // ստեղ վակյույին տալիս ենք վալյուն 
// }
// }

// console.log('obj3',obj3)
  
// Using for in replate values, using for in, result should looks like this:
// const obj3 = {
// apple: “bad phone”,
// samsung: “good phone”’
// };
    
