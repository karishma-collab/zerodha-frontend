
//FORLOOP
// for (let i=1; i<=5;i++){
//     console.log("Hiee");//5 execute
// }

//calculate sum of 1 to 5
// let sum = 0;
// let  n=8;
// for ( let i=1; i <= n; i++){
//     sum=sum+i;
// }
// console.log("sum =",sum);
// console.log("Loop has ended");

// for (let i=1; i<=5;i++){
//      console.log("i =",i);
// }
//console.log(i);.....These cannot be run becoz for loop not outside the loop !!

//LOOPS IN JS
//INFINITE LOOP:A LOOP NEVER ENDS!//STOPPING CONDITION NEVER ENDS!


//WHILLE LOOP
//let i=20
// while(i <= 10){
//     console.log("i=",i)
//     i++;
// }

//DO WHILE LOOP
// let i=1
// do{
//     console.log("i =",i);
//     i++;
// }while (i<=5);

//FOR OF LOOP:these is use for strings or arrays not for objects!!!
// let str="heyy";

// let size=0;
// for(let i of str){
//     console.log("i =",i)
//     size++;
// }
// console.log("string size =",size);


//FOR IN LOOP:These is use for objects or even arrays !!
//They return key values of any objects

// let student={
//     name:"karu",
//     age:21,
//     cgpa:8.5,
//     ispass:true
// };

// for(let key in student){
//     console.log("key=",key,  "value =",student[key]);
// }

// LET'S PRACTICE
//Q1 PRINT ALL EVEN NUMBERS FROM 0 TO 100!
//  for(let num=0;num<=100;num++){
//     if(num%2===0){
//     console.log("num=",num);
//     }
// }

//Q2 CREATE A GAME WHERE YOU START WITH ANY RANDOM GAME NUMBER.
//ASK THE USER TO KEEP GUESSING THE GAME NUMBER UNTIL THE USER ENTERS CORRECT value.


// let gamenum=25;

// let usernum= prompt("GUESS THE GAME NUMBER: ");

// while(usernum!= gamenum) { //game
//    usernum= prompt("you entered a wrong number guess again:");
    
// }
// console.log("congratulations,you entered the right number");



//STRINGS
// let str="KarishmaBharani"
// console.log(str[8]);

//TEMPLATE LITRALS
// let specialstring=`This is a tempral litrals ${1+2+34}`;
// console.log(specialstring);

// let obj={
//     item:"pen",
//     price:5,
// };

// console.log("The cost of", obj.item,"is",obj.price,"rupees");
// console.log(typeof obj);
// let output =`the costtt of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//console.log("Hey\tkaru");//...\n=next line, \t=tab space=this is a escape character!
// let str= "Hey\nkaru";
// console.log(str.length);

//STRINGS METHODS IN JS

// let str="hiicoder";//IN JAVASCRIPT THE STRING IS IMMUTABLE(which never change)
// str1=str.toUpperCase();
// console.log(str);
// console.log(str1)


// let str="HIIGUBLEEE";
// str=str.toLowerCase();
// console.log(str);//TOLOWERCASE


// let str="    Hey JS CODER    "
// console.log(str.trim());//TRIMSTRING

// let str="hello";
// console.log(str.slice(1,3));//string slice 

// let str="hey"
// let str1="codear"
// let res=str.concat(str1);
// res1= str + str1;
// console.log(res1);//concat

// let str="hello";
//  console.log(str.replace("he","yae"));

// let str="helololo";
// console.log(str.replaceAll("lo","p"));

// let str="SELFLOVE";
// console.log(str.charAt(3));//f

// let str="Be carefull";
// console.log(str[2]);

//PRACTICE QUESTIONS

/*Q1 PROMPT the user to enter their full name.generate a username for them based
on input.start username with @,followed by their fullname and ending with the 
fullname length*/

//eg: username="karishmabharni", username should be "@karishmabharani15"

// let userName= prompt("ENTER YOUR NAME WITHOUT USING SPACES");
// let userId = ` @${userName}${userName.length}`;
// console.log(userId);

//MDN IS FOR PROBLEM SOLUTION SEARCHING WEBSITE;















































































































