function triangle(char, n) {
    let result = ''
    for (let i = 1; i <= n; i++) {
        result += char.repeat(i)
        if (i !== n) result += '\n'
    }
    return result


}