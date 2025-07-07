function longWords(array){ 
    return array.every((current) =>  current.length >= 5)
}
function oneLongWord(array){ 
    return array.some((current) =>  current.length === 10)
}
function noLongWords(array) {
     return array.every((current) =>  current.length < 7)
}
