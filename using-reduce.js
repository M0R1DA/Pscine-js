
function adder(arr, num) {
    if (num === undefined) {
        num = 0
    }

    return arr.reduce(
        (accumulatour, courrentvalue) =>

            accumulatour + courrentvalue,

        num,
    )
}
function sumOrMul(arr, num) {

    if (num === undefined) {
        num = 0
    }


    return arr.reduce(

        (accumulatour, courrentvalue) => {
            if (courrentvalue % 2 === 0) {
                return accumulatour * courrentvalue;
            } else {
                return accumulatour + courrentvalue;
            }
        }, num);


}

function funcExec(array, number) {
  if (number===undefined){
     number =0
   }
   
    return array.reduce((paramiitr, funct) => funct(paramiitr), number)

}
// adder([9, 24, 7, 11, 3], 10), 64 // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160
console.log(adder([9, 24, 7, 11, 3]), 54);
