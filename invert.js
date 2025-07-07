function invert(obj) {
     let objicte = {}
     for (let i in obj){
        if(obj.hasOwnProperty(i)){
            objicte[obj[i]] = i
        }

     }
     return objicte 
}