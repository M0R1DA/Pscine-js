
function round(x) {
  const n = x >= 0 ? x + 0.5 : x - 0.5
  let i = 0
  if (n >= 0) {
    while (i + 1 <= n) i++
  } else {
    while (i - 1 >= n) i--
  }
  return i
}


function floor(x) {
  let i = 0
  if (x >= 0) {
    while (i + 1 <= x) i++
  } else {
    while (i - 1 > x) i--
    i--
  }
  return i
}


function trunc(n) {
  const BIG = 0xfffffffff
  let i = 0

  
  if (n > BIG) {
 
    let approx = 1
    while (approx * BIG < n) approx *= 2
    while (approx * BIG > n) approx /= 2
    n -= approx * BIG
    i += approx * BIG
  } else if (n < -BIG) {
    let approx = 1
    while (approx * BIG < -n) approx *= 2
    while (approx * BIG > -n) approx /= 2
    n += approx * BIG
    i -= approx * BIG
  }

  // نحسب الجزء الصحيح
  let j = 0
  if (n >= 0) {
    while (j + 1 <= n) j++
  } else {
    while (j - 1 >= n) j--
  }

  return i + j
}

function ceil(x) {
  let i = 0
  if (x >= 0) {
    while (i < x) i++
  } else {
    while (i - 1 >= x) i--
  }
  return i
}

// const tests = []
// const t = (f, label) => tests.push({ f, label })

// const nums = [Math.PI, -Math.PI, Math.E, -Math.E, 0]


// t(({ code }) => !/String|['"`]|toFixed|slice/.test(code), "❌ ممنوع: String or toFixed/slice")
// t(({ code }) => !code.includes('~'), "❌ ممنوع: ~")
// t(({ code }) => !code.includes('%'), "❌ ممنوع: %")
// t(({ code }) => !code.includes('>>'), "❌ ممنوع: >>")
// t(({ code }) => !/[^|]\|[^|]/.test(code), "❌ ممنوع: |")
// t(({ code }) => !/[^&]&[^&]/.test(code), "❌ ممنوع: &")
// t(({ code }) => !code.includes('parseInt'), "❌ ممنوع: parseInt")


// t(({ eq }) => eq(nums.map(round), [3, -3, 3, -3, 0]), "✅ round")
// t(({ eq }) => eq(nums.map(floor), [3, -4, 2, -3, 0]), "✅ floor")
// t(({ eq }) => eq(nums.map(trunc), [3, -3, 2, -2, 0]), "✅ trunc")
// t(({ eq }) => eq(nums.map(ceil), [4, -3, 3, -2, 0]), "✅ ceil")
// t(({ ctx }) => trunc(0xfffffffff + ctx) === 0xfffffffff + ~~ctx, "✅ ctx trunc check")


// let passed = 0
// tests.forEach(({ f, label }, i) => {
//   try {
//     const result = f({
//       code: (round + ceil + floor + trunc + '').toString(),
//       eq: (a, b) => JSON.stringify(a) === JSON.stringify(b),
//       ctx: 0,
//     })
//     if (result) {
//       console.log(`✅ Test #${i + 1}: ${label}`)
//       passed++
//     } else {
//       console.log(`❌ Test #${i + 1}: ${label}`)
//     }
//   } catch (err) {
//     console.log(`❌ Test #${i + 1}: ${label} - Error`)
//     console.log(err.message)
//   }
// })

// console.log(`\nResult: ${passed}/${tests.length} tests passed ✅`)
