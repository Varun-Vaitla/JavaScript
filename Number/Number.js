let a=10.1;
let b=20.12;
let c=30.123;
let d=45;
let e=`varun`;

console.log(a);
console.log(b);
console.log(c);

//..............................(parseInt())
console.log(parseInt(a));//10
//..............................(parseFoat())
console.log(parseFloat(a));//10.1
//................................(toFixed())
console.log(c.toFixed(1));//30.1
//.................................(Number.isInteger())
console.log(Number.isInteger(d));//true
console.log(Number.isInteger(a));//false
//................................(Number.isFinite(a))
console.log(Number.isFinite(a));//true
console.log(Number.isFinite(1/0));//false
//................................(Number.isNaN())
console.log(Number.isNaN(a));//false
console.log(Number.isNaN(e));//false
console.log(Number.isNaN(c));//false
console.log(Number.isNaN(0/0));//true
console.log(Number.isNaN(1/0));//true












