function foo(a, b) {    if (a === 1) {        return b;    } else {        return a + b;    }}console.log(foo(1, 2)); // Output: 2console.log(foo(2, 1)); // Output: 3console.log(foo(1, undefined)); // Output: undefinedconsole.log(foo(undefined, 1)); // Output: NaN //Still NaN because of undefined + 1 which is NaN.  Consider adding a check for undefined values for a more robust solutionconsole.log(foo(undefined, undefined)); // Output: NaN
//A more robust solution would be:
function foo(a, b) {
  if(a === undefined || b === undefined){
    return undefined; // Or handle undefined values appropriately
  } else if (a === 1) {
      return b;
  } else {
      return a + b;
  }
}
console.log(foo(undefined, 1)); // Output: undefined
console.log(foo(1, undefined)); // Output: undefined
console.log(foo(undefined, undefined)); // Output: undefined