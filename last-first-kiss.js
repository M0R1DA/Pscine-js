function first(x){
    return x[0];
}
function last(x){
    return x[x.length-1];
}
function kiss(x){
    return [last(x),first(x)]
}
console.log(kiss([1,9,1,3]))