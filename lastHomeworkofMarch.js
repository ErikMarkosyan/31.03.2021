
let someObj = {}; // թռու արժեք

function Fc1(){
return someObj 
}

function Fc2(){
return someObj
}

const a = new Fc1();
const b = new Fc2();
//console.log(a === b);

//console.log(delition.del(10,5));
//console.log(delition.add(10,5));
//console.log($.delition.add(5,2));

var  x  =  0;
function hn() {
	x++;
	console.log(x); 
  return  function hn() {
            x+=10;
            console.log(x);
        }
} 
hn(hn())(hn());