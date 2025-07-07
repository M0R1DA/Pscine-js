function deepCopy(obj) {

    let f = {}
    if (Array.isArray(obj)) {
        return obj.map(deepCopy)
    } else if (typeof obj == "object") {
        if (obj instanceof RegExp) {
            return new RegExp(obj)
        }
        for (const k in obj) {
            f[k] = deepCopy(obj[k])
        }
        return f
    } else {
        return obj
    }
}  