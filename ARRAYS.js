console.log("SELFMOTIVATION");
//ARRAYS= Collections of items:these store LINEAR type of data;
// let words=["love","peace","selflove","motivation","faith","consistency"];
// console.log(words);
// console.log(words.length);
// let marks= [49,60,76,85,90];
// console.log(marks);//array is mutable(changable)

// let words=["love","peace","selflove","motivation","faith","consistency"];
//loops:itrable(string,objects,arrays)//
// for (let i=0; i<words.length; i++){
//     console.log(words[i]);
// }

// let cities=["ladakh","pune","goa","manali","haryana","surat"];
// for (let city of cities){
//     console.log(city.toUpperCase());
//}

//PRACTICE Q1

// let marks=[80,90,45,95,60,70];
// let sum=0;
// for(let val of marks){
//     sum += val;
// }
// let avg= sum/marks.length;
// console.log(`avg marks of the class= ${avg}`);

//PRACTICE Q2

// let items=[250,645,700,400,50];

// let i=0;
// for (let val of items){
//     console.log(`value at index ${i}=${val}` );
//     let offer=val/10;
//     items[i]= items[i]-offer;
//     console.log(`value after offer=${items[i]}`);
//     i++;
// }

//for loop
//  let items=[20,30,45,67,200,690];

//  for( let i=0; i<items.length;i++){
//     let offer= items[i]/10;
//     items[i]-= offer;

//  }
// console.log(items);

//push(): add to end

// let veggies=["patato","tomato","litchi"];

// veggies.push("momos","pinkpasta","mojito","burger");
// console.log(veggies);

// console.log("hellloo vishu");

//POP FUNCTION;
// let cars=["Porsche","Audi","Thar","Gwagon","BMW"];
// console.log(cars);
//  DeletedItem=cars.pop();
// console.log(cars);
// console.log("DeletedItem",DeletedItem);

//tostring;
// let cars=["Porsche","Audi","Thar","Gwagon","BMW"];
// console.log(cars);
// console.log(cars.toString());
// console.log(cars);

//CONCATE IN ARRAYS;

// let marvel_heroes=["thor","spiderman","ironman"];
// let Dc_heroes=["superman","batman"];
// let indianHeroes=["sahil","batman"]
// let heroes= marvel_heroes.concat(Dc_heroes, indianHeroes);
// console.log(heroes);

//unshift=add element on start;

// let marvel_heroes=["thor","spiderman","ironman"];

// marvel_heroes.unshift("youUMAN");


//shift:delete first value;

// let marvel_heroes=["thor","spiderman","ironman"];
// let val= marvel_heroes.shift();
// console.log("deleted:",val);


//slice(): returns a piece of array;they cannot change in orginal array

// let marvel_heroes=["thor","spiderman","ironman","antman","docstrange"];
// console.log(marvel_heroes);
// console.log(marvel_heroes.slice(1,4));


//SPILCE METHOD():CHANGE ORGINAL ARRAY(ADD,REMOVE,REPLACE);

//let arr=[1,2,3,4,5,6];
// arr.splice(2,2,102,104);

//add Element
//arr.splice(2,0,100);

//delete element
// arr.splice(3,1);


//replace element

// arr.splice(3,1,100);



//PRACTICE Q1

let arr=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(arr);

// let a=(arr.shift());
// console.log(arr);

// arr.splice(2,1,"ola");

arr.push("AMAZON");
console.log(arr);






























































































