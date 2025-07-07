function filterShortStateName(words) {
    return words.filter((word) => word.length < 7)
}
function filterStartVowel(words) {
    return words.filter((word) => /^[aeiou]/i.test(word))
}
function filter5Vowels(words) {
    let regex= /[aeiou]/gi
    const result = words.filter((word) =>{
        let rr = word.match(regex)
    return rr.length >= 5
    } )
    
    return result
}
function filter1DistinctVowel(words) {
    let regx = /[aeiou]/gi
    let arr = words.filter((word) => {
        let set = new Set(word.toLowerCase())
        let arr = [...set]
        let str = arr.join("")
        let res = str.match(regx)
        return res.length == 1
    })

    return arr


}

function multiFilter(array) {
    
           let arr = array.filter((word) => {
            let rr =  word.capital
            let nn = /^[^aeiou]/gi.test(word.name)
            let  bb  = /[aeiou]/gi.test(word.tag) 
           let gg = /[^South]/.test(word.region)
            return (rr.length >= 8) && nn && bb && gg
        })
return arr


        

}
// console.log(multiFilter([
//    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
//     { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'South' },
//     {
//       tag: 'MO',
//       name: 'Missouri',
//       capital: 'Jefferson City',
//       region: 'Midwest',
//     },
//     {
//       tag: 'PA',
//       name: 'Pennsylvania',
//       capital: 'Harrisburg',
//       region: 'Northeast',
//     },
//     {
//       tag: 'RI',
//       name: 'Rhode Island',
//       capital: 'Providence',
//       region: 'Northeast',
//     },
//   ]));

