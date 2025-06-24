function sign(x){
if ( x > 0){
    return 1
}
if ( x< 0 ){
    return -1
}
return 0
} 
function sameSign(a,b){
    if (sign(a)=== sign(b)){
        return true
    }
    return false

}
console.log(sameSign(2,4))
console.log(sameSign(-2,0))
console.log(sign(0))