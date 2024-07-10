console.log("MOTIVATION");
//FUCTIONS in js
//block of code that performs a specific task,can be invoked whenever needed/
//ITS CREATED ONES AND CALLED EVERYTIME
//console.log("heyy!!");
//"abc".toUpperCase()
//[1, 2, 3].push (4);
//above example are fuctions
// function MYFUNCTION(){
//     console.log("here karishma bharani");
//     console.log("I am learning js");
// }
// MYFUNCTION();

// function FUNCTION2(msg){
//     //Parameter->input
//     console.log(msg);
// }
// FUNCTION2("WRITE MSG");//arguement

//function->2 numbers,sum

// function sum1(x, y){
//     console.log(x + y);
// }

// function sum2(x , y){
//     //local variables->scope
//     s= x + y;
//     console.log("before return");
//     console.log(x);
//     return s;
//     console.log("after return");//after return we never do code//this is a lastline
// }
// let val1 =sum2(3,4);
// console.log(val1);

//sum3 function
// function sum3(a,b){
//     return a+b;
// }
// //multiplication fuction
// function mul(a,b){
//     return a * b;
// }
//modern Js
//  const x=14;
//  const arrowsum = (a,b) => {
//     console.log(a + b);
// };

// const arrowmul=(x,y) =>{
//     return x*y;
// };


// const printhello=() => console.log("hello");


//   function countvowel(str){
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
//   }
    
//ARROW FUNCTION
// const countvow=(str) => {
//     count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
//   }

//FOR EACH IS //METHOD IN ARRAYS;
//WHEN WE RELATE FUNCTION WITH SOME SPECIFIC TASK THEN FUNCTION IS CONVERT IN METHOD 
//TOUPPERCASE=using with only string


// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// }
// )

//arrow function
// let arr=[1,2,3,4,6];

// arr.forEach((val) => {
//     console.log(val);
// });

// let arr=["pune","hyderabad","delhi"];

//  arr.forEach((val, idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr);
//  });
  

//FOREACH LOOP IN ARRAYS IS HIGH ORDER FUNCTION/METHODS which is using for 
//parameter(takings inputs from user) or for return;

// let arrnum=[1,2,3,4,5,6,7,8,9] ;
// arrnum.forEach((num) => {
//    console.log( num * num );//num**2
   
// }) ;   //return each no squre

//another way

// let nums=[67,78,39];
// let calsqaure=(num) => {
//    console.log( num * num );//num**2
   
// };

// nums.forEach(calsqaure);


//some more array methods
//1--- MAP METHOD=which is almost similar to foreach;
//DEFINE= creates a new array with the results of some opration.
//the value its callback returns are used to form new array!!

   //SYNTAX
//Array.map(callbackfnx(value,index,array))

// let nums1 = [1,2,3,4,5];

// let newarr=nums1.map((val) => {
//    return (val * 2) ;
// });
// console.log(newarr);

//2----- FILTER METHOD;
// DEFINE= creates a new array of elements that give true for a condition/filter

// let arr=[1,2,3,4,5,6,7,8];
//  let evenarr=arr.filter((val) => {
//    return val % 2===0;

// });


//3----REDUCE
//performs some operations & reduces the array to a single value.
//it returns that single value!!

// let arr2=[1,3,5,7];

//  const output= arr2.reduce((res,current) => {
//    return res + current;
// }
// );
// console.log(output);//16

// let arr2=[1,2,101,4,5];

//  const output= arr2.reduce((prev,current) => {
//    return prev < current? prev : current;
// }
// );
// console.log(output);


//practiceQ1;

// let arr3=[30,45,78,69,89,90,94,98];
//  res=arr3.filter( (marks) =>{
//    return(marks >= 90);
// }
// );
// console.log(res);

//practiceQ2;

// let n = prompt("enter a number:  ");

// let arr=[];
// for(let i=1 ; i<=n ; i++){
//    arr[i-1]=i;
// }
// console.log(arr);

//  let sum=arr.reduce((val,recentval) => {
//    return(val + recentval);

// });
// console.log(sum);


//  let product =arr.reduce((val,recentval) => {
//    return(val * recentval);

// });
// console.log(product);




































































































    




















































































