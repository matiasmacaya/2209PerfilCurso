/* Clase02
let myVar = 0;
var myVar2 = -1; */

const myDoc = document;

console.log(myDoc);

let myH1 = myDoc.getElementsByTagName("h1");

//let myH3 = myDoc.getElementById("mySuperH3");

let myH3 = myDoc.getElementsByTagName("h3");

console.log(myH1);
console.log(myH3);

myH3.innerText = "Modificando el texto dentro del H3";

// myH3.innerHTML += "<button>Esto es un btn</button>";

const myButtonStr = "<button>Esto es un botón </button>";
myH3.innerHTML = myButtonStr;

const cant_elementos = 10;

for (let index = 0; index < cant_elementos; index++) {
    myH3.innerHTML = myH3.innerHTML + myButtonStr;    
}


