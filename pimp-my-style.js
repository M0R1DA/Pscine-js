import { styles } from "./pimp-my-style.data.js";


let index = 0;
let adding = true;

export function pimp() {
    const button = document.querySelector("button");
  if (adding) {
    button.classList.add(styles[index]);
    index++;

    if (index === styles.length) {
      adding = false;
      button.classList.add("unpimp");
    }
  } else {
    index--;
    button.classList.remove(styles[index]);

    if (index === 0) {
      adding = true;
      button.classList.remove("unpimp");
    }
  }
}
