
// arithmetic refers to the module.exports object from ./arithmetic.js
const arithmetic = require( './04-arithmetic' );

//using  the object destructuring syntax
const { add, multiply, PI }=require('./04-arithmetic' );

console.log( arithmetic.add( 12, 13 ) );
console.log( arithmetic.multiply( 12, 13 ) );
console.log( arithmetic.PI );

console.log( add( 11, 11 ) );
console.log( multiply ( 11, 11 ) );
console.log( PI );