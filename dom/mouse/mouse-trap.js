export function setBox() {
    // Ndir lbox fwst lpage
    const body = document.querySelector("body");
    const box = document.createElement("div");
    box.className = "box"; // Class box (CSS tcntraha)
    body.appendChild(box);
}

export function createCircle() {
    // Melli tcliki, ndir cercle fblat lmouse
    const body = document.querySelector("body");
    document.addEventListener("click", (e) => {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = "white";
        circle.style.left = e.clientX - 25 + "px"; // Ncntrouh f-x
        circle.style.top = e.clientY - 25 + "px"; // Ncntrouh f-y
        body.appendChild(circle);
    });
}

export function moveCircle() {
    let lastCircle = null; // L-akhir cercle li drna
    const box = document.querySelector(".box"); // Nakhdo l-box

    // Melli tcliki, nakhdo lakhir cercle
    document.addEventListener("click", () => {
        lastCircle = document.querySelector(".circle:last-child");
    });

    // Melli lmouse ttt7rk
    document.addEventListener("mousemove", (e) => {
        if (!lastCircle) return; // Ila ma clikinash, ma ndiro walu

        // Blasa jdid dial l-cercle
        let newX = e.clientX - 25; // N9s 25px bash ncntrouh
        let newY = e.clientY - 25;

        // Nakhdo blasa dial l-box (mn l-browser)
        const boxRect = box.getBoundingClientRect();
        const boxLeft = boxRect.left + 1; // N9s 1px mn l-border
        const boxRight = boxRect.right - 1;
        const boxTop = boxRect.top + 1;
        const boxBottom = boxRect.bottom - 1;

        // Nchoufo ila lcercle dkhl btmmam f-l-box
        const isInside = 
            newX >= boxLeft &&
            newX + 50 <= boxRight && // 50px l3rd dial lcercle
            newY >= boxTop &&
            newY + 50 <= boxBottom; // 50px ltul dial lcercle

        // Ila lcercle dkhl flbox
        if (isInside) {
            lastCircle.style.background = "var(--purple)"; // Nbadlo lcolor
            lastCircle.classList.add("trapped"); // Nlockiw lcercle
        }

        // Ila lcercle ma dkhlsh o mashi trapped
        if (!lastCircle.classList.contains("trapped")) {
            lastCircle.style.left = newX + "px"; // N7rko lcercle m3a lmouse
            lastCircle.style.top = newY + "px";
            lastCircle.style.background = "white";
        }
        // Ila lcercle trapped (dkhl lbox)
        else {
            // N7rko lcercle ghir fdak lbox, ma ytoucherch lborder
            newX = Math.max(boxLeft, Math.min(newX, boxRight - 50)); // N7bsouh bin lleft o lright
            newY = Math.max(boxTop, Math.min(newY, boxBottom - 50)); // N7bsouh bin ltop o lbottom
            lastCircle.style.left = newX + "px"; // N7rko flbox
            lastCircle.style.top = newY + "px";
            lastCircle.style.background = "var(--purple)"; 
        }
    });
}