export function setBox() {
   
    const body = document.querySelector("body");
    const box = document.createElement("div");
    box.className = "box"; 
    body.appendChild(box);
}

export function createCircle() {
 
    const body = document.querySelector("body");
    document.addEventListener("click", (e) => {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = "white";
        circle.style.left = e.clientX - 25 + "px"; 
        circle.style.top = e.clientY - 25 + "px"; 
        body.appendChild(circle);
    });
}

export function moveCircle() {
    let lastCircle = null; 
    const box = document.querySelector(".box"); 

 
    document.addEventListener("click", () => {
        lastCircle = document.querySelector(".circle:last-child");
    });

    
    document.addEventListener("mousemove", (e) => {
        if (!lastCircle) return; 
    
        let newX = e.clientX - 25; 
        let newY = e.clientY - 25;

       
        const boxRect = box.getBoundingClientRect();
        const boxLeft = boxRect.left + 1;
        const boxRight = boxRect.right - 1;
        const boxTop = boxRect.top + 1;
        const boxBottom = boxRect.bottom - 1;


        const isInside = 
            newX >= boxLeft &&
            newX + 50 <= boxRight && 
            newY >= boxTop &&
            newY + 50 <= boxBottom; 

     
        if (isInside) {
            lastCircle.style.background = "var(--purple)";
            lastCircle.classList.add("trapped"); 
        }


        if (!lastCircle.classList.contains("trapped")) {
            lastCircle.style.left = newX + "px"; 
            lastCircle.style.top = newY + "px";
            lastCircle.style.background = "white";
        }
     
        else {
          
            newX = Math.max(boxLeft, Math.min(newX, boxRight - 50)); 
            newY = Math.max(boxTop, Math.min(newY, boxBottom - 50)); 
            lastCircle.style.left = newX + "px"; 
            lastCircle.style.top = newY + "px";
            lastCircle.style.background = "var(--purple)"; 
        }
    });
}