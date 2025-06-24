function indexOf(err,valyo,index){
    if(index== undefined){
     index = 0
    }
    // console.log(index,);
    
for (let i = index; i < err.length; i++) {
    // console.log(err[i]);
    
    if (err[i]== valyo){
        return i
    }
    
}
return -1
}
function lastIndexOf(err, valyo,index)  {
    if (index==undefined){
 index=err.length-1
 console.log(index,3);
 
    }
    for (let i = index ; i >= 0; i--) {
    if (err[i]== valyo){
       console.log(err[i]);
       
        return i
    }
    
}
return -1
}

function includes(err,valyo){
    
for (let i = 0; i < err.length; i++) {
    if (err[i]== valyo){
        return true
    }
    
}
return false
}
    

const t = ""
console.log(lastIndexOf([0, t,0, 0],t,3));
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));

