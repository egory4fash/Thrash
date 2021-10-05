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