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