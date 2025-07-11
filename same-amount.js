// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
function sameAmount(str, r1, r2) {
    const ensureGlobal = r => new RegExp(r.source, r.flags.includes('g') ? r.flags : r.flags + 'g')
    const m1 = str.match(ensureGlobal(r1)) || []
    const m2 = str.match(ensureGlobal(r2)) || []
    return m1.length === m2.length
}

// console.log(sameAmount('hello how are you', /he/, /ho/));
// console.log(!sameAmount(data, /q /, /qqqqqqq/));
