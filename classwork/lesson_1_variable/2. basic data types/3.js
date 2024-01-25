/**
 * NaN чаще всего является результат ошибочного математического выражения,
 * с ним мы разберёмся по-подробней чуть позже.
 */
const error = NaN // not a number
/* null — это семантическое значение для отсутствия значения (не путать с undefined!!!). */
const nullValue = null;
const notDefinedValue = undefined;

let arr= [1,,2,,5]

console.log(error);
console.log(nullValue);
let str5 = "fghjk"/'fghjk'

let num = 1
let str = String(num)//'1'
let str1 = num.toString()//'1'
let num1 = Number(str)//1
let num2 = +str
let bool = Boolean(num)
let bool1 = !!num
typeof(num) // "number"
typeof str // "string"
console.log(typeof null)
// const a = 1
// 0, -0, NaN, '', null, undefined, false - falsy
// if(1){
//     console.log(111)
// }

1=='1'//true
'1'===1//false

// true + false //1
// 12 / "6"//2
// "number" + 15 + 3 //"number153"
// 15 + 3 + "number"//"18number"
// [1] > null // true
// "foo" + + "bar" //"fooNaN"
// 'true' == true //false
// false == 'false' //false
// null == '' //false
// !!"false" == !!"true"//true
// ['x'] == 'x'//true
// [] + null + 1//''+null+1 'null1'
// 0 || "0" && {}//true
// [1,2,3] == [1,2,3]//false
// {}+[]+{}+[1]//'0[object Object]1'
// !+[]+[]+![]//'truefalse'
// new Date(0) - 0//0
// new Date(0) + 0//'date0'
