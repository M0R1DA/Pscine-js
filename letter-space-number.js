function letterSpaceNumber(str) { 
const rn = /[a-zA-Z] [0-9](?![0-9])(?![a-zA-Z])/g
const result = str.match(rn)
 return result || []
}
// console.log(letterSpaceNumber('rida 2 rviva 9 khgka 10jhkj'));
