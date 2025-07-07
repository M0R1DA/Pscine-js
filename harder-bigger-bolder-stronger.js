export function generateLetters() {
  const container = document.querySelector("body");
  const totalLetters = 120;
  const minFontSize = 11;
  const maxFontSize = 130;
  for (let i = 0; i < totalLetters; i++) {
    const div = document.createElement("div");
   I;
    div.textContent = letter;
    const fontSize =
         minFontSize + ((maxFontSize - minFontSize) * i) / (totalLetters - 1);
    div.style.fontSize = `${fontSize}px`;
    if (i < totalLetters / 3) {
      div.style.fontWeight = "300";
    } else if (i < (2 * totalLetters) / 3) {
      div.style.fontWeight = "400";
    } else {
      div.style.fontWeight = "600";
    }
    container.appendChild(div);
  }
}



