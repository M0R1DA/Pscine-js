

function cutFirst(s){
    const  result  = s.slice(2)
    return result
}
function cutLast(s){
let result = ''
    if (s.length > 2){
  
        result = s.slice(0,4)
        return result
     }
      return result 
}
function cutFirstLast(s){
    let result = ''
    if (s.length > 5){
  
        result = s.slice(2,-2)
        return result
     }
      return result
}
function keepFirst(s){
     const  result  = s.slice(0,2)
    return result
}
function keepLast(s){
     const  result  = s.slice(-2)
    return result
}
function keepFirstLast(s){
let str = []
    if (s.length> 5){
       const  result  = s.slice(-2)
      const t = s.slice(0,2)
      str += t+result
      return str
 }
    return s
}
