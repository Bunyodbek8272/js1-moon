'use strict'
// function nextInLine(arr, item){
//     arr.push(item);
//     return arr.shift();
// }

// var testArray = [1,2,3,4,5];
// console.log('Before: '+ JSON.stringify(testArray));
//     console.log(nextInLine(testArray,6));
//     console.log('After: '+JSON.stringify(testArray));

// function boolenF(){
//     return true;
// }
// if (boolenF){
//     console.log('hello');
// }

// function trueFalse(value){
//     if(value < 5){
// return 'tiny';
//     }
//     else if (value < 10 ) {
//         return 'small';
//     }
//     else if (value < 15) {
//      return 'medium'   
//     }
//     else if (value < 20) {
//         return 'large'
//     }else{
//         return 'huge'
//     }
// }
// console.log(trueFalse(100));

// function inSwich(val) {
// let answer ='';
//     switch (val) {
//         case 1:
//         case 2:
//         case 3:
//             answer = 'low';
//             break;
//         case 4:
//         case 5:
//         case 6:
//             answer = 'mid';
//             break;
//         case 7:
//         case 8:
//         case 9:
//             answer = 'high';
//             break;
//         default:
//             break;
//     }
//     return answer;
// }
// console.log(inSwich(5));

// function ifToSwich(params) {
//     let answer = '';
// switch(params) {
// case  'bir':
//     answer = 1;
//     break;
//     case 'bir ming bir yuz':
//         answer = 1100;
//         break;
//     case 5:
//         answer = 'besh';
//         break;
//     case '8:30':
//            answer = 'sakkiz yarim';
//            break;
//     default:
//         answer = 'afsuuuuuuuus';
//         break;
//     }

//     return answer;
// }

// console.log(ifToSwich('8:30'));

// function isLess(a,b) {
//     if(a < b) return true;
// else return false;
// }

// // console.log(isLess(10,50));


// function lookUp(val) {
//     let footbalClub = {
//         'name': 'barca',
//         7: "Dembale",
//         9: 'Neymar',
//         13: 'Alba',
//         'Diyorbek': 'Qaxat',
//         'Baxromjon': 'Chuvalanchi'
//     };
//    let result = footbalClub[val];
//     return result
// }

// console.log(lookUp('name'));


// function searchMan(nameOfPlayer) {
//     let foundPlayer = '';
//     let nameOfClub = {
//         'Tershtagen': 'Goal keeper',
//         'Alba': 'real kepper',
//         'Buskets': 'half keeper',
//         'Levandowsky': 'real atacer'
//     }
// foundPlayer = nameOfClub[nameOfPlayer];
//  return foundPlayer;
// }
// console.log(searchMan('Alba'));


// function chekObj(chekProp) {

//         if(myObj.hasOwnProperty(chekProp)){
//             return myObj[chekProp];
//         }
//         else{
//             return 'Not Found';
//         }
// }
// console.log(chekObj('gift'));

// function chek(goChek){
// if (myObj.hasOwnProperty(goChek)) {
//     return myObj[goChek];
// }
// else return 'Not Found'
// }
// console.log(chek('pet'));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// console.log(text);

// var myArray = [];
// var i = 0;
// while (i<5){
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);
// let myArray =  [1,2,3,4,5,6,8,9];
// let totle = 0;
// for(let i = 0; i <8; i++){
//     totle += myArray[i];
// }
// console.log(totle);


// let contact = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laina",
//         "number": "02135469751",
//         "likes": ["Pizza", "Coding", "Brownie Pointes"]
//     },
//     {
//         "firstName": "Akiraxon",
//         "lastName": "Lainaxon",
//         "number": "022222222222",
//         "likes": ["Pizzaxon", "Codingxon", "Browniexon Pointesxon"]
//     },
//     {
//         "firstName": "Ranaldo",
//         "lastName": "Kristiano",
//         "number": "011111111111",
//         "likes": ["coca cola", "Footbal", "Jorjina Radrigs"]
//     },
//     {
//         "firstName": "Leo",
//         "lastName": "Messi",
//         "number": "101010101010",
//         "likes": ["His Childern", "His Wife", "Neymar Junior"]
//     }
// ]
// function lookUpProfile(name,prop) {
//     for(let i = 0; i < contact.length; i++){
//         if (contact[i].firstName === name) {
//             return contact[i][prop] || "No such property";
//         }
//     }
//     return "No such property";
// }

// let data = lookUpProfile("Ranaldo","number");
// console.log(data);

// function randomNumber(){


//     return Math.random();
// }

// console.log(randomNumber());

// function testRandim(myMax,myMin) {
// return Math.floor(Math.random()*(myMax - myMin +1))  + myMin;    
// }
// console.log(testRandim(9,5));

// function strToInt(str){
//     return parseInt(str,2);
// }
// console.log(strToInt("100"));

// function checkSing(a,b){
//     return a === b ? 'true' :  a>b ? 'false':   '0';
// }
// console.log(checkSing(1,10));

// let s = [1,2,3];
// const don = [4,5,6];
// function namess() {
//     s = [3,2,1];
//     don[0] = [5];
//     don[1] = [0];
//     don[2] = [8];
//     return don;
// }
// console.log(namess());
// console.log(don);

// function freezObject() {
//     "use strict"
//     const MATH_CONSTANTS = {
//         PI: 3.14
//     };
// }

// const arrFun = (a,b) => a.concat(b);

// console.log([1,2],[3,4,5]); 

// const realNumArr = [4, -2.33, 56.2, -66, 42, 6, -12, 1.221, ];

// const requestList = (arr) => {
//     const clculatArr = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
//     return clculatArr;
// } 
// console.log(requestList(realNumArr));


// const sum = (function(){
//     return function sum(...args){
//         return args.reduce((a,b) => a+b, 0)
//     };

// })();
// console.log(sum(1,2,3,4));

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    let sumInt = firstInteger + parseInt(secondInteger);
    console.log(sumInt);

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    let sumDec = firstDecimal + parseFloat(secondDecimal);
    console.log(sumDec);

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    let sumStr = firstString + secondString;
    console.log(sumStr);
}

// performOperation(12,4.32, 'is the place to learn and practice');

// function main() {
//     const secondInteger = readLine();
//     const secondDecimal = readLine();
//     const secondString = readLine();

//     performOperation(secondInteger, secondDecimal, secondString);
// }

// function vowelsAndConsonants(s) {
//     for(let i = 0; i < s.length; i++)
//     console.log(s[i]);
// }
// vowelsAndConsonants('helloWorld');
// let s = 'javascriptloops';
// let myArr = [];
// function vowelsAndConsonants(s) {
//    for(let i = 0; i < s.length; i++){
//    myArr.push(s[i]);

// }
// let forFil = number => number === 'a' && 'e'&& 'i' && 'o' && 'u';
// let outPut = myArr.sort()
// for(let i = 0; i < outPut.length; i++){
//    console.log(outPut[i].filter(forFil));
// }
// }

// vowelsAndConsonants(s);
// i

// let str = "he is called 'Jon' ";
// console.log(str);
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.splice(2);
// console.log(fruits);
// let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
// myArray.pop();
// myArray.push("Ali");
// myArray.push("Bek");
// let myString = "";
// for(let i = 0; i < myArray.length; i++ ){
    
//     if (i+1 == myArray.length) {
//         myString += myArray[i]+(myArray.indexOf(myArray[i])) 
//      }
//      else myString += myArray[i]+(myArray.indexOf(myArray[i])) +"-";

// }
// console.log(myString);
// console.log(myArray);

// const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
// let itemIndex = birds.indexOf("Eagles");
// let newArr = birds.splice(itemIndex,1);
// let eBird = [];
// let filItem = birds.filter( item => item.startsWith("E"));
// eBird.push(filItem);
// console.log(eBird);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let s = 'javascriptloops';
// let vowel = [];
// let consonant = [];
// function vowelsAndConsonants(s) {
//     for(let i = 0; i < s.length; i++){
//         if(s.charAt(i) == ("a")){
//             vowel.push(s[i]);
//         }else if(s.charAt(i) == ("e")){
//             vowel.push(s[i]);
//         }else if(s.charAt(i) == ("i")){
//             vowel.push(s[i]);
//         }else if(s.charAt(i) == ("o")){
//             vowel.push(s[i]);
//         }else if(s.charAt(i) == ("u")){
//             vowel.push(s[i]);
//         }

//         else{
//             consonant.push(s[i]);
//         }
//         }
//         let sum = vowel.concat(consonant);
//         console.log(sum);
//         for(let i =0; i < sum.length; i++){
//             console.log(sum[i]);
//         }
// }
// console.log(vowelsAndConsonants(s));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// let myArr = ["a","e","i","u","o"];
// function regexVar(s) {
//     let re = false;
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
//       for(let i = 0; i < myArr.length; i++){

// if((s.charAt(0) == (myArr[i])) && (s.charAt(s.length -1)==(myArr[i])))
// {
//     re = true;
//     return re;
//     }else re = false;
//     }
      
//     /*
//      * Do not remove the return statement
//      */
//     return re;
// }
// console.log(regexVar("aaa"))

// let mul =1;
// function factorial(n){
//     for(let i = 1; i <= n; i++){
//         mul *= i;
//     }
//     return mul;
// }

// console.log(factorial(6));
// let PI = Math.PI;
// console.log(PI);
// function getGrade(score) {
//     let grade;
    
//     // Write your code here
//     if(0<=score && score <=5){grade = "F";}
//     else if(5<score && score<=10){grade = "E";}
//     else if(10<score && score<=15){grade = "D";}
//     else if(15<score && score<=20){grade = "C";}
//     else if(20<score && score<=25){grade = "B";}
//     else if(25<score && score<=30){grade = "A";}
    
//     return grade;
// }
// console.log(getGrade(27));
// let myArr = ["a","e","i","u","o"];
// function regexVar(s) {
//     let re = false;
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
//       for(let i = 0; i < myArr.length; i++){

// if((s.charAt(0) == (myArr[i])) && (s.charAt(s.length -1)==(myArr[i])))
// {
//     re = true;
//     return re;
//     }else re = false;
//     }
      
//     /*
//      * Do not remove the return statement
//      */
//     return re;
// }
// console.log(regexVar("aewxyzea"));

// const arr = [3, 5, 8, 100, 20];
// let sortBy = arr.sort(function (a,b) {return a - b});
// let uniqueChars = [...new Set(arr)];
// console.log(uniqueChars);
// let foundN = uniqueChars[uniqueChars.length - 2];
// console.log(foundN);
// function getCount(objects) {
//     let count = 0;
//     for(let i in objects){
//         if(objects[i].x != objects[i].y) count++;
//         }
//     return count;
//     }
//     let testObj = [ {x: 1, y:1}, {x: 24, y:2}, {x: 41, y:1},  {x: 15, y:1},  {x: 1, y:22}];
// //     console.log(getCount(testObj));
// class son{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
//     age(x){
//   return x - this.year;
//     }
// }

// let date = new Date();
// let year = date.getFullYear();

// let myson = new son("Ford", 2014);
// console.log("My son is " + myson.age(year) + " years old");

// class son {
//     constructor(name, year){
//         this.name = name;
//         this.age = year;
//     }
//     age(x){
//         return x -this.year;
//     }
// }

// let date = new Date();
// let year = date.getFullYear;

// let mySon = new son("Bunyodbek",1999);

// console.log("he is "+ mySon.age(year) + "years old");
// class laptop{
//     constructor(cost,modell){
//         this.cost = cost;
//         this.modell = modell;
//     }
//     som(x){
//      return   x * this.cost;
//     }
// }

// let macBook = new laptop("macBook",2000);
// console.log("My c");

// class Polygon {
//     constructor(myArr){
//         this.myArr = myArr;
//     }
//     perimeter(){
//         let per = 0;
// for(let i = 0; i < this.myArr.length; i++){
//         per += this.myArr[i];    
// }
//         return per;
//     }
// }

// let triangel = new Polygon([3,4,5]);

// console.log(triangel.perimeter());


//////////////////////////////////////////////////////////////////////////
// class User{
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
// }
// User.prototype.area = function(){
// return this.a * this.b;
// }

// class Admin extends User{
//     constructor(spase,spase1){
//         super(spase,spase1);
//     }
// }

// let jon = new Admin(4,5);
// console.log(jon.area());

// class User {
//     constructor(a,b,c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     } 
// }
// User.prototype.area =  function(){
//  return 1/2 *this.a*this.b;
// }

// class Admin extends User{
//     constructor(a,b){
//         super(a,b);

//     }
// }
// let answ = new Admin(3,4);
// console.log(answ.area());
////////////////////////////////////////////////////////////////
// class Uchburchak{
//     constructor(a,b,c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
// }

// Uchburchak.prototype.yuza = function(){
// return 1/2 * this.a * this.b;
// }

// Uchburchak.prototype.peremeter = function(){
//     return this.a + this.b + this.c;
// }
// class MathByhend extends Uchburchak {
//     constructor(a,b){
//         super(a,b);
//     }
// }
// class PeremeterSum extends Uchburchak {
//     constructor(a,b,c){
//         super(a,b,c);
//     }
// }
// let hisoblash = new MathByhend(3,4);
// console.log(hisoblash.yuza());
// let perSum = new PeremeterSum(3,4,5);
// console.log(perSum.peremeter());
/////////////////////////////////////////////////////////////////////
//2
class Numbers {
    constructor(a,b,c,d,e){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
    }
}
Numbers.prototype.sum = function(){
    return this.a+this.b;
}

Numbers.prototype.seper = function(){
    return this.c - this.d;
}
Numbers.prototype.multi = function(){
    return this.e / this.a;
}
Numbers.prototype.deb = function(){
    return this.b / this.d;
}
class Amal extends Numbers{
    constructor(number1,number2,number3,number4,number5){
         super(number1,number2,number3,number4,number5);
    }
}

let test = new Amal(1,2,3,4,5);
console.log(test.sum());
console.log(test.seper());
console.log(test.multi());
console.log(test.deb());


