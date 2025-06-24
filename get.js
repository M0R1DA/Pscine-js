function get(src,path){
    const morid = path.split('.')
   let valyo = src
   for (let i = 0; i < morid.length; i++) {
     let kay = morid[i]
    if (valyo==null|| !(kay in valyo)){
    return undefined
    }
   valyo= valyo[kay]
   }
   return valyo
}