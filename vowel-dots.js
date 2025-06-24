const vowels = /[aeiouAEIOU]/
function vowelDots(str) { 
let result = ''
    for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result += char
    if (vowels.test(char)&&i!== str.length-1) {
        result+= '.'
    }
    
}
return result
}
// console.log(vowelDots('somethingu'));
