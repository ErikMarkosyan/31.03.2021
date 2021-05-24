


function logObj(text) {
  console.log(text + " " + this.name); // սրա միջոցով լրիվ օբյեկտն ա լոգ անում ,updated this.name
}
// logObj(); // "use strict" undefined իսկ սովորական ժմնկ գլոբալ վինդոու օբյեկտ

let user1 = {
  name: "John",
  surname: "Wick",
  age: 35,
  // myName: function(){
  //   console.log('My name is',this.name);
  // }
  mySurname() {
    // console.log('My surname is',this.surname); // մինչեւ myName: function()- ը քոմենթ չարեցի չաշխատեց, խ՞ի
  }
};

// logObj.call(user1, "My name is"); // call-ի միջոցով ասում ենք, որ իրա դիսը user1-ն ա, որը հենց քոլի առաջի պառամետռն ա։ Կարանք ուրիշ պառամետրներ
//  փոխանցենք my name is ու քանի որ, կոնսոլ լոգում տվել ենք text + " " + this.name լոգ կանի My name is John, call-ը կանչում ա ֆունկցիան ուրիշ
// դիսով ու վերադարձնում ա սթրինգ
// logObj.apply(user1, ["My name is", another args]) նույն քոլի պես ա ուղղակի առաջի առգումենտից հետո(this), մնացածը գրում ենք array-ով

// bind -ը սարքում/քոփի ա անում ու կանչում ա հին ֆունկցիան, փոխված կոնտեքստով/this-ով
// bind էղածը եթե մի հատ էլ bind անենք բան էլ չի լիննի, ոչ մի բան լոգ չի անի 
// 


// call,apply նույն ֆունկցիան կանչում են ուրիշ դիսով իսկ bind-ը սարքում/copy ա անում նույն ֆունկցիան ուրիշ դիսով ////call-ը կանչում ա նույն
// ֆունկցիան ուրիշ դիսով ու վերադարձնում ա սթրինգ 
// 


let user2 = {
  name: "Marry",
  surname: "Jane",
  func: function(){
    // console.log(this.name);
  }
}

const q = logObj.bind(user1);
q(123); 

// user2.func(); // կետը, որ դնում ենք էդ նշանակում ա, որ ֆունկցիան վերաբերվում ա իրա ձախ մասին այսինքն user2-ին, ստեղ user2-ը դառնում ա 
// ֆունկի դիսը

// user1.mySurname();
// user1.myName(); // էս լոգ կանի մայ նեյմ իզ ջոն վիք․․․

// user1.some = logObj;  // Մեսչյանի օրինակն եմ նայել, բայց չեմ հասկանում խի ա էս ձեւով անում
// user1.some(); // խ՞ի չի կարելի գրել ուղղակի console.log(logobj(user1))..... լոգ ա անում user1 օբյեկտը

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /
// Внутренняя реализация: Ссылочный тип  // wrapper function   ԱՆՀԱՍԿԱՆԱԼԻ ստեղից սկսած
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // /


const person = {
  name: "Hamo",
  fc: function() {
      console.log(this)
  }
}
const person2 = {
  name: "Ero"
}
// person.fc.call(person2);
// person.fc.apply(person2);
// person.fc.bind(person2)()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const obj = {
  name: 'john',
  callFc
  }

  function callFc() {
  return this.name
  }
  
  // callFc(); ? // global object window or undefined in 'use strict' mode թ՞ե դատարկ սթրինգ
  // obj.callFc(); ? // ստեղ ասում ենք, որ callFc-ի this-ը obj-ն ա ու քանզի ինքը return ա անում this.name այիսնքնըստ՝ john 
  

const car = { 
  registrationNumber: "GA12345",
  brand: "Toyota",
  displayDetails: function(){
      // console.log(this.registrationNumber + " " + this.brand);
    }
  }
  
// car.displayDetails(); // ստեղ ասում ենք, որ displayDetails() ֆունկցիայի this-ը car-օբյեկտն ա, լոգ կանի car object-ը,
// իմաստը էս ա՝՝՝ 
// 
// var myCarDetails =  car.displayDetails; // ստեղ myCarDetails-ին ասու ենք, որ ինքը displayDetails ֆունկցիան ա
// myCarDetails(); // ցույց կտա object window 

// chashing decorator ???????
// this ի սահմանումը

// this-ը որոշվում ա էն պահին երբ մենկ ֆունկցիան կանչում ենք

// 1․ երբ ․ ով կանչում ենք ֆունկցիա՝ էդ կետի ձախ կողմի օբյեկտը դառնում ա էդ ֆունկցիայի this-ը object.someFunction` ստեղ լինում ա օբջեկտը

// 2․ երբ ինչ որ օբյեկտի մեջի մեթոդ ուղղակի ռան ենք տալիս օբյեկտից դուրս, իրա this-ը դառնում ա վինդոու օբյեկտը կամ անդիֆայնդ

// 3․ someFunction.call/apply(object) սրա միջոցով փոխանցում ենք ֆունկցիային էն օբյեկտը, որ ուզում ենք իրա this-ը լինի 

// 4․ someFunction.bind(object) սրանով քոփի ենք էդ նույն ֆունկցիան, որի this-ը լինում ա մեր տված օբյեկտը 
  
function say() {
  console.log(this.name);
}

say(); // լոգ կանի գլոբալ դիսը

let user = { name: "John" };

say.call( user ); // ասում ենք, էս ֆունկցիայի դիսը ըլնի
// user-ը
// say.apply-ը անում ա նույն խեռը ինչ call-ը
// ստրանք կանչում են ֆունկցիան ուրիշ դիսով

let q = say.bind(user); // bind-ը ստեղծում ա նոր ֆունկցիա, որի this-ը արդեն ուրիշ ա, մեր դեպքում երեւի q-ն ա
q(); //

function g() {
  console.log(this);
}

let user2 = {
	g: q.bind(null)
};

user2.g();

