var summation = function (num) {
 let sum = 0
 for (let i = 0; i <= num; i++) {
   sum += i
 }
 return sum
}

const summation = n => n * (n + 1) / 2;

var summation = function f(num) {
  return num ? num + f(num-1) : 0;
}
