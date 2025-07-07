export function compose() {
    const body = document.querySelector("body")
    document.addEventListener("keydown", (e) => {

        const letter = 'azertyuiopqsdfghjklmwxcvbn'
        console.log(letter);

        const kybord = document.createElement("div")
        const all = document.querySelectorAll("div")
        if (e.key == "Backspace") {

            all[all.length - 1].remove()
        } else if (e.key == "Escape") {
            all.forEach(element => {
                element.remove()
            });
        } else if (letter.includes(e.key)) {

            body.appendChild(kybord)
            kybord.className = "note"
            kybord.textContent = e.key
            kybord.style.background = getRandomColor()
        }

    })

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}