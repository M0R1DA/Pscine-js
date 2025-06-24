

function ionOut(str) {
    const result = /\b(\w*?t)(?=ion)\w*\b/g
    const r = []
    let mori
    while ((mori = result.exec(str)) != null) {
        r.push(mori[1])
    }
    return r
}
