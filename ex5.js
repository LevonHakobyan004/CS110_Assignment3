let num = 7;
let remainder;
let quotient = num;
let binary = "";

while (quotient !== 0) {
  remainder = quotient % 2;
  quotient = Math.floor(quotient / 2);
  binary += `${remainder}`;
}

console.log(binary.split("").reverse().join(""));
