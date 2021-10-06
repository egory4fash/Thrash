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