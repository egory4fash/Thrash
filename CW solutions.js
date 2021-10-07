function hexToDec(hexString){
 let ans = parseInt(hexString,16);
  return ans;
}

function noSpace(x){
str = x.replace(/\s/g, '');
  return str;
}

function sumMix(x){
  let sum = 0;
  for (let i = 0;i<x.length;i++) {
    sum +=+(x[i]);
  }
return sum;
}

function squareSum(numbers){
let sum = 0;
  for (let i=0;i<numbers.length;i++) {
    sum+=numbers[i]*numbers[i];
  }
  return sum
}

function countBy(x, n) {
  let z = [];
  let cnt = 1;
  for (let i =x;cnt<=n;i+=x) {
    z.push(i);
    cnt++;
  }

  return z;
}

function checkAlive (health) {
  if (health <= 0) {
    
    return false;
  } else {
    return true;
  }
}

function sumStr(a,b) {
  let num =(+(a) + +(b));
  return num.toString();
}

function greet(name){
  return "Hello, "+name+ " how are you doing today?"
}

function booleanToString(b){
  return b.toString();
}

function  calculateAge(birthDate, otherDate) {

let age = otherDate - birthDate;

  if(age === 1) {
  return 'You are ' + age + ' year old.';
    } else if(age > 1) {
      return 'You are ' + age + ' years old.';
    } else if (age < -1) {
      return 'You will be born in ' +  Math.abs(age) + ' years.';
    } else if (age === -1) {
      return 'You will be born in ' + Math.abs(age) + ' year.';
    } else {
      return 'You were born this very year!';
    }
}

function distinct(a) {
  return ([...new Set(a)]);
}

function hello(name) {
  if (name&&name !="") {
    let low = name.toLowerCase();
    let first = name.charAt(0);
    let bigFirst = first.toUpperCase();
    let remain = low.slice(1);
    return "Hello, "+bigFirst+remain+"!";
  } else {
    return "Hello, World!";
  }
}

function strCount(str, letter){  
  let cnt = 0;
  for (let i = 0;i<str.length;i++) {
    if (str[i]==letter) {
      cnt++;
    }
  }
  return cnt;
}

function solution(a, b){
  let res = (a.length>b.length) ? b+a+b : a+b+a;
  return res;
}

function usdcny(usd) {
  let chinese = usd*6.75;
  return chinese.toFixed(2).toString()+" Chinese Yuan";
  
}

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);
}

function between(a, b) {
let ans = [];
  for (let i = a;i<=b;i++) {
    ans.push(i);
  }
  return ans;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
let twice = dadYearsOld - sonYearsOld * 2;
return twice < 0 ? twice * (-1) : twice;
}

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

function findMultiples(integer, limit) {
  let arr = [];
  for(let i =integer;i<=limit;i +=integer) {
    arr.push(i);
  }
   return arr; 
}

function ensureQuestion(s) {
  if (s[s.length-1] == "?") {
    return s;
  } else {
    let newStr = s +"?";
    return newStr;
  }
}

function feast(beast, dish) {
return (beast[0] == dish[0]&&beast[beast.length-1] == dish[dish.length-1]) ? true : false;
}

String.prototype.toAlternatingCase = function () {
  let rev = "";
  for (let i=0;i<this.length;i++) {
    if (this[i] == this[i].toUpperCase()) {;
    rev +=this[i].toLowerCase();
  } else {
    rev += this[i].toUpperCase();
  }
    }
  return rev;
}

function reverseWords(str){
  let arr = str.split(" ");
  let answer = [];
  for (let i = 0;i<arr.length;i++) {
    answer.unshift(arr[i]);
  }
  return answer.join(' ');
}

function all( arr, fun ){
  return arr.every(fun);
}

function countPositivesSumNegatives(input) {
    let cnt = 0;
  let sum = 0;
  if (input == null || input.length < 1){
  return [];
  }else {
    for (let i = 0;i < input.length;i++) {
    if (input[i]>0) {
      cnt++;
    }else if (input[i]<0){
      sum+=input[i];
      }
    }
    return [cnt,sum];
  }
  }

function makeNegative(num) {
 return num > 0 ? -num : num;
  }
