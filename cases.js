
const factorial = number => {
    if (number === 0 ) return 1;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
const permutation =( n,r )=> factorial(n) / factorial(n - r);
const combination =( n,r )=> factorial(n) / (factorial(n - r) * factorial(r));
const multiPermutation =( n,r )=> Math.pow(n, r);
const multiCombination =( n,r )=> factorial(n + r - 1) / (factorial(r) * factorial(n - 1));
  module.exports = {
    permutation: permutation,
    combination: combination,
    multiPermutation: multiPermutation,
    multiCombination: multiCombination,
  };
  