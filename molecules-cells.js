
function RNA(s) {
  let result = ""
  for (let i = 0; i < s.length; i++) {
    let arr = s[i]
    if (arr === 'T') result += 'A'
    else if (arr === 'A') result += 'U'
    else if (arr === 'C') result += 'G'
    else if (arr === 'G') result += 'C'
  }
  return result
}

function DNA(s) {
  let result = ""
  for (let i = 0; i < s.length; i++) {
    let arr = s[i]
    if (arr === 'A') result += 'T'
    else if (arr === 'U') result += 'A'
    else if (arr === 'C') result += 'G'
    else if (arr === 'G') result += 'C'
  }
  return result
}

