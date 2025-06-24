function  reverse(n){
   const intra = typeof n ==='string'
    const arr  =  intra ? n.split('') : n.slice()
    let leset = 0 
    let len = arr.length-1
     while (leset < len) {
        const tmp = arr[leset]
        arr[leset] = arr[len]
        arr[len] = tmp
        leset++
        len--
     }
     return intra ? arr.join('') : arr
}
console.log(reverse('pouet'));
