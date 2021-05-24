const user = {
  firstName: 'gago',
  lastName: 'meloyan',
  nickName: 'qaq',
  isAdmin: false,
  props: {
    car: 'audi',
    mobile: 'nokia',
  }
};
let {firstName,nickName,props} = user;
//console.log(firstName,nickName,props);

const garage = ['bmw','audi','mercedes','lexus','infinity'];

//const [second,third, ...rest] = garage;

//console.log(third, ...rest);

const num = [1,2,3,4,5,6,7,8,9];

const [first,,third,...rest] = num;

console.log(...rest);

const newGarage = [...garage];
//console.log(newGarage);

const garageNum = ['garage + num',...garage,...num];
//console.log(garageNum);

const newUser = {...user,age:30};

//console.log(newUser);

// spread
const arr1 = [-1,5,8,-47];

const arr2 = [-481791879817,-79874,594954,2654];

const merged = [...arr1,...arr2]; // merged-y darnum a arr1+arr2  

//console.log(Math.min(...merged)); // stex cuc a tali minimal arjieqy merged-i, vory arr1 u arr2 concatn a 


let arr = ['some','any',];

let copyArr = [...arr];

//console.log(copyArr);

//arr.push('several');

//console.log(arr===copyArr); //false because of different references, but if we make them 
// JSON.stringify they will be equal 


let person1 = {
	name: 'kostya',
  address:{
  city: 'saint-petersburg',
  street: 'leningradskaya',
  house: 47},
  cars: ['Range Rover', 'Uaz Hunter'],
};

let {
address:{
city, // variable
street // variable
},
cars: [item1,item2], // variables
} = person1;
 
//console.log(city,street,item1,item2);

 let userNew = {
  name: "John",
  years: 30
};

let {name,years:age,isAdmin=false} = userNew;

//console.log(name,age,isAdmin);
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

function topSalary(arg){
	let max = 0;
  let maxName = ' ';
  
  for(const [name,salary] of Object.entries(salaries)){
  if(max<salary){
  max = salary;
  maxName = name;
 	 }
 }
  return `${maxName}`;
}

console.log(topSalary(salaries));


/* let someVar = 0

let user = {
x: 1,
y: 2,
z: 3,
};

let someArr = Object.values(user);
console.log(someArr);


someArr.forEach(someVar)
Object.keys(user);
Object.values(user); */




/* console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1)); */


/* const arr = [1,2,3,4,5];

const [one,two] = arr;

//console.log(one,two);

const obj = {
x: 1,
y: 2,
z: 4,
e: 6,
}

const {x, ...rest} = obj;

console.log(rest); */
 


/* const obj = {
x: {
  y:1,
}
};

let json = JSON.stringify(obj);

//console.log(json);

let copyObj = JSON.parse(json);

console.log(copyObj);

console.log(copyObj === obj); */


/*const obj = {
x: 1,
y: 2,
z: 7,
};

//let x = 0;

let a = Object.values(obj);

//let a1 = a
//console.log(a);
//a.forEach((a1) => {
	//console.log(element)
  //x++
//}) 


//console.log(x);

let x = a.reduce(function (sum,elem) {
	return sum+elem
})

console.log(x);*/

let user = {
  name: "Василий Иванович",
  age: 35
};

 let json = JSON.stringify(user);

//console.log(json);

let userCopy = JSON.parse(json);

//console.log(userCopy);

//destructuring of an arr, destructuring anelov inch vor popoxakani veragrum enq arrayi meji value

let arrCaesar = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

let [firstName,lastName, ...rest] = arrCaesar;

//console.log(firstName,...rest);

let [name,,,republic] = arrCaesar

//console.log(name,republic);

/* let user1 = {};
[user.name,user.surname,user.age,user.isAdmin] = "Pogos beazbekyan 40 false".split(' ');

console.log(user.name,user.isAdmin); */

user1 = {
name: 'Gagik',
surName: 'Tsaruk',
age: 64,
isAdmin: true,
isDebil: true,
};

for (let [key,value] of Object.entries(user1)){
	//console.log(`${key}: ${value}`)
}

let user2 = new Map()
user2.set('name', 'Vahe');
user2.set('surName', 'Enfiajyan');
user2.set('age', 37);

for(let[key,value] of user2){
	//console.log(`${key}: ${value}`)
}

let options = {
	title: 'Menu',
  width: 100,
  height: 200,
  color: 'aqua',
  place: 'inside the house',
};

let {title,width:w,height:h,deep:d = 300, ...mnacacy} = options;

//console.log(title,w,h,d,mnacacy)

// nested destructuring 

let menu = {
	salad: ["Cesar","Salmon","Olivie"],
  drink: {
  alcohol: "vine",
  coctail: "Long-Island",
  },
};

let {
salad:[item1, item2, third],
drink:{alcohol,coctail}, 
} = menu;

//console.log(item1,third,alcohol); //undefined??? slack question

// resst spread copy of array/object

let arr4Copy = ['popoq','pnduk'];

let copied = [...arr4Copy];

arr4Copy.push(44);
console.log(arr4Copy,copied);
//the same result will be with an object

function myFunction(arg1,arg2)	{ // function declaration 

}

let mySecondFunction = function(arg1,arg2)	{ // function expression 

}

const hiDear = () => ("Barlus");

/* console.log(hiDear("ynger jan")); */


function someF(arg,fc) {  // argument tajik!
	return `${arg} + ${fc} = ${arg+fc}`
  // var arg = true
  // 2rd kanchi depqum var arg = someNew functioni body in 
  // fc-n stex darnum a 2rd argumenty 
}



someF(true); // true is a parameter 

 let someNew = function() {
	return 10
};

let someFunc = function() {
	return 5
};

console.log(someF(someNew(1),someFunc(1)));

let concat = (a1,b1) => (a1+b1);// the same

function concatFunc(a2,b2) {
	return a2+b2
}

console.log(concatFunc(4,5));

console.log(concat(1,3));

function someF(arg,fc) {  // argument tajik!
	// var arg = true
  // 2rd kanchi depqum var arg = someNew functioni body in 
  // fc-n stex darnum a 2rd argumenty 
  // ete return chem anum ar@s cuyc kta, dra hamar
  // return arg + fc
  // kam 
  return `${arg} + ${fc} = ${arg+fc}` // stex kta 10 5 arancin arjeqner
}



someF(true); // true is a parameter 

 let someNew = function() {
	return 10
};

let someFunc = function() {
	return 5
};

console.log(someF(someNew(),someFunc()));//(someNew,someFunc);

//const arrFc = () => {}

x = findMax(-1,1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = +Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

console.log(findMax(x));


let car = {
	make: 'BMW',
  model: '5-er',
  engine: 3,
  speed: 250,
  speakers: 11,
};

function carSpeed(obj){
	let speed = car.speed;
  let speakers = car.speakers;
	if(speed<=240 || speakers<=10){
  console.log('This car is too slow and silent')
  } else {
  console.log('This is that what you need!!!')
  }
  return obj // stex veradarcnum a en objecti key valunery vor carSpeed kancheluc tvel enq vorpes argument 
}

console.log(carSpeed(car));

// ARROW FUNCTION

let ordinary = function(arg)
	console.log('im an ordinary function');
};

console.log(ordinary(barev));

let arrow = () => 'im arrow function';

console.log(arrow());

/* (function(){     inqn iran kanchox funkcia 
  console.log('call itself');
}()); */ 

let car = {
	make: 'BMW',
  model: '5-er',
  colors: [
  	'inside-red',
  	'body-black'
  ],
  engine: 3,
  speed: 250,
  audio:{	
  	system: 'Burmister',
  	speakers: 12,
  	saabwoofer: 2,
  },
};


let {
	colors:[
  	first,
    second
    ],
  audio: {
  	system,
    ...rest
  }
} = car;

console.log(...rest); //resty error a talis 

function carSpeed(obj){
	let {speed} = car;
  let {audio} = car;
	if(speed<=240 || audio.speakers<=10){
  //console.log('This car is too slow and silent')
  } else {
  //console.log('This is that what you need!!!')
  }
  return obj // stex veradarcnum a en objecti key valunery vor carSpeed kancheluc tvel enq vorpes argument 
}

//console.log(carSpeed(car));

// ARROW FUNCTION

let ordinary = function() {
	//console.log('im an ordinary function')
};

//console.log(ordinary());

let arrow = () => 'im arrow function';

//console.log(arrow());

/* (function(){     inqn iran kanchox funkcia 
  console.log('call itself');
}()); */ 


//// LOOP

/* let arr = ["mts",'beeline','ucom','rostelecom','kt'];

for (let i = 0; i < arr.length; i++){
  console.log(`index-${i}  value-${arr[i]}`);
} */