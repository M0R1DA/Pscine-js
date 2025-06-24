function chunk(arr,sayz){
    const result =[]
    for (let i = 0; i < arr.length; i+= sayz) {
      const grob = []
      for (let r = i; r <  i + sayz && r < arr.length ; r++) {
     grob.push(arr[r])
        
      }
        result.push(grob)
    } 
    return result
}