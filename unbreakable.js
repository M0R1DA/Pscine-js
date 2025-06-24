function split(str, sep) {
  const result = []


  if (sep === '') {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i])
    }
    return result
  }

  let buffer = ''
  let i = 0

  while (i < str.length) {
    let match = true
    for (let j = 0; j < sep.length; j++) {
      if (str[i + j] !== sep[j]) {
        match = false
        break
      }
    }

    if (match) {
      result.push(buffer)
      buffer = ''
      i += sep.length
    } else {
      buffer += str[i]
      i++
    }
  }

  result.push(buffer)
  return result
}

function join(arr, sep) {
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
    if (i < arr.length - 1) {
      result += sep
    }
  }
  return result
}





// String.prototype.split = undefined
// String.prototype.match = undefined
// RegExp.prototype.exec = undefined
// Array.prototype.join = undefined

// // التستات
// export const tests = []
// const t = (f) => tests.push(f)

// t(({ eq }) => eq(split('a b c', ' '), ['a', 'b', 'c']))
// t(({ eq }) => eq(split('ggg - ddd - b', ' - '), ['ggg', 'ddd', 'b']))
// t(({ eq }) => eq(split('ee,ff,g,', ','), ['ee', 'ff', 'g', '']))
// t(({ eq }) => eq(split('Riad', ' '), ['Riad']))
// t(({ eq }) => eq(split('rrrr', 'rr'), ['', '', '']))
// t(({ eq }) => eq(split('rrirr', 'rr'), ['', 'i', '']))
// t(({ eq }) => eq(split('Riad', ''), ['R', 'i', 'a', 'd']))
// t(({ eq }) => eq(split('', 'Riad'), ['']))

// t(() => join(['ee', 'ff', 'g', ''], ',') === 'ee,ff,g,')
// t(() => join(['ggg', 'ddd', 'b'], ' - ') === 'ggg - ddd - b')
// t(() => join(['a', 'b', 'c'], ' ') === 'a b c')

// // مشغل التستات
// let passed = 0
// tests.forEach((f, i) => {
//   try {
//     const res = f({
//       eq: (a, b) => JSON.stringify(a) === JSON.stringify(b),
//       ctx: 0,
//     })
//     if (res) {
//       console.log(`✅ Test #${i + 1} passed`)
//       passed++
//     } else {
//       console.log(`❌ Test #${i + 1} failed`)
//     }
//   } catch (err) {
//     console.log(`❌ Test #${i + 1} error`, err)
//   }
// })

// console.log(`\nResult: ${passed}/${tests.length} tests passed ✅`)