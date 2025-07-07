import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    const head = document.querySelector("head")
    const style = document.createElement("style")
    head.append(style)

    let inpstr = ""
    colors.forEach(element => {
        inpstr += `.${element}{background : ${element};}\n`

    })
    style.textContent = inpstr

}
export function generateColdShades() {
    const body = document.querySelector("body")
    const array = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple','pink']
    colors.forEach(element => {
        array.forEach(el => {
            if (element.includes(el)) {
                const div = document.createElement("div")
                div.className = element
                body.appendChild(div)
                div.textContent = element
            }
        });

    });

}


export function choseShade(textContent) {
const  div  = document.querySelectorAll("div")
div.forEach(element => {
    element.className= textContent
});
}