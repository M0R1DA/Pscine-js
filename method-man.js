 const str ="RIDA RIMO ABDO "
//  const err = ["rida","rabdo","rimo"]
function words(str){
     const err =str.split(" ")
    return err
}
function sentence(err){
    const str = err.join(" ")
    return str
}
function yell(str){
    const uppr  = str.toUpperCase() 
    return uppr
}
function whisper(str){
    const lower = str.toLowerCase()
    return "*"+lower+"*"
}
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// console.log(whisper(str))
console.log(capitalize(str))

