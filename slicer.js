function slice(err,start=0, end = err.length){
  const result =[]
  
   if(start < 0) start = err.length + start
   if (end < 0) end = err.length + end
    for (let i = start; i < end && i < err.length; i++) {
       
         result.push(err[i])

    }
       return typeof err === 'string' ? result.join('') : result

}







// Array.prototype.slice = undefined
// String.prototype.slice = undefined

// فرضاً عندك هاد الدالة 
// function slice(input, start = 0, end = input.length) {
//   const result = []
//   const len = input.length

//   // handle negative indexes
//   if (start < 0) start = len + start
//   if (end < 0) end = len + end

//   for (let i = start; i < end && i < len; i++) {
//     result.push(input[i])
//   }

//   return typeof input === 'string' ? result.join('') : result
// }

// التستات يديوياً مع console.log:

// const tests = [
//   { actual: slice('abcdef', 2), expected: 'cdef' },
//   { actual: slice('abcdef', -2), expected: 'ef' },
//   { actual: slice('abcdef', 0, 2), expected: 'ab' },
//   { actual: slice('abcdef', 0, -2), expected: 'abcd' },
//   { actual: slice('abcdef', 2, 4), expected: 'cd' },
//   { actual: slice('abcdef', -3, -1), expected: 'de' },

//   { actual: slice([1, 2, 3, 4, 5, 6], 2), expected: [3, 4, 5, 6] },
//   { actual: slice([1, 2, 3, 4, 5, 6], -2), expected: [5, 6] },
//   { actual: slice([1, 2, 3, 4, 5, 6], 0, 2), expected: [1, 2] },
//   { actual: slice([1, 2, 3, 4, 5, 6], 0, -2), expected: [1, 2, 3, 4] },
//   { actual: slice([1, 2, 3, 4, 5, 6], 2, 4), expected: [3, 4] },
//   { actual: slice([1, 2, 3, 4, 5, 6], -3, -1), expected: [4, 5] },
// ]

// let passed = 0

// tests.forEach((test, index) => {
//   const { actual, expected } = test
//   const ok = Array.isArray(expected)
//     ? JSON.stringify(actual) === JSON.stringify(expected)
//     : actual === expected

//   if (ok) passed++
//   console.log(`Test #${index + 1}: ${ok ? '✅ Passed' : '❌ Failed'}`)
//   console.log(`   Expected:`, expected)
//   console.log(`   Got     :`, actual)
//   console.log('---')
// })

// console.log(`✅ ${passed}/${tests.length} tests passed`)
