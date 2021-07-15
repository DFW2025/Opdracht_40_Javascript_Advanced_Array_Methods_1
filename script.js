// JAVASCRIPT


// 1

const addTheWordCool = function (array) {

  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
 // resultaat: ["nice", "awesome", "tof", "cool"]


// 2

const amountOfElementsInArray = (arrayCount) => { 
  return Object.keys(arrayCount).length;
  

};

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));
  // result 3


// 3

const lastElementInArray = function (arrayLastItem) { 
return arrayLastItem [arrayLastItem.length -1 ];


};

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
  // resultaat: "Schildpad"


// 4

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
  const newArrayPresidents2 = array.slice(1,4);  // SLice maakt een nieuwe array van de oude array dus moet deze in een nieuwe constante opgeslagen worden.
  return newArrayPresidents2;
  };

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]

// 4.2

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSplice = function (array2) {
 array2.splice(0, 1);                           // Splice overschrijft the originele array.
 return array2 ;
  };


console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


// 5

const stringsTogether = function (array) { 
return array.join(" ");
// return array;
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]))
  //resultaat: "Winc Academy is leuk ;-}"


  
// 6


const combineArrays = function (combine1, combine2) {
  return combine1.concat(combine2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));

