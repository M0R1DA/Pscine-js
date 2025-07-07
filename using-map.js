
function citiesOnly(obj) {
    // const map1 = new Map()
    // map1.set(obj)
    // console.log(map1.get('gigib'));
    const result = obj.map(person => (person.city))
    return result
}


function upperCasingStates(array) {
    const obj = array.map(person => (person.split(' ')))
    // const wordsplit = 

    // const cap = result.charAt(0).toUpperCase() + result.slice(1)
    const cap = obj.map(sentence => sentence.map((word) => word.charAt(0).toUpperCase() + word.slice(1)))
    const result = cap.map(person => (person.join(' ')))
    console.log(result);
    
    return result
}


function fahrenheitToCelsius(array) {
    const regexp = /-?\d+/g
    const obj = array.map(person => person.match(regexp))
    console.log(obj);

    const result = obj.map((rida => (rida - 32) * 5 / 9))
    const resultfinal = result.map((rida => (Math.floor(rida)) + '°C'))
    console.log(resultfinal);

    return resultfinal
}
const trimTemp = array => {
    return array.map(function (arry) {
        return {
            city: arry.city,
            temperature: arry.temperature.replace(/\s+/g, ''),
            state :arry.state,
             region :arry.region,
        }
    })
}
function str(obj) {
  
     const regexp = /-?\d+/g
     const nn =obj.match(regexp)

     
    const result = (Math.floor((Number(nn) - 32) * 5 / 9))+'°C'
    return result 
    
    // const resultfinal = Math.floor(result)
    // console.log(resultfinal);
}

const tempForecasts = array => {
    const mm = trimTemp(array)
    const result = mm.map(function (arr) {
    const Celsius = str(arr.temperature)
       const r= arr.city
    //    console.log(r.split(' '));
       
         const t = arr.state
         
         const city = r.split(' ').map(((word) => word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
         const state = t.split(' ').map(((word) => word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
         return Celsius +'elsius in ' + city +', ' + state
   
    })
    // console.log(result);
    
return result

}


// tempForecasts([
//     {
//         city: 'pasa ena',
//         temperature: ' 101 °F',
//         state: 'california',
//         region: 'West',
//     },
// ]) // -> ['38°Celsius in Pasadena, California']
// // // fahrenheitToCelsius(['68°F', '59°F', '25°F']) // -> ['20°C', '15°C', '-4°C']