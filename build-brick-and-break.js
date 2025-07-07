export function build(arg){
  let count = 1;
  const interval = setInterval(() => {
    let body = document.querySelector("body");
    if (count <= arg) {
      let brick = document.createElement("div");
      brick.id = `brick-${count}`;
      if ((count - 1) % 3== 1)  {
        brick.dataset.foundation = "true";
      }
      brick.innerHTML = count;
      body.appendChild(brick);
      count++;
    } else {
      clearInterval(interval);
    }
  }, 100);
  return interval;
};
export function repair(...ids) {
  ids.forEach((id) => {
    let data = document.getElementById(`${id}`);
    if (!data) return;
    if (data.dataset.foundation == "true") {
      data.dataset.repaired = "in progress";
    } else {
      data.dataset.repaired = "true";
    }
    data.innerHTML
  });
}
export const destroy = () => {
  let remov = document.querySelectorAll("div");
  if (remov.length == 0)return;
  remov[remov.length - 1].remove();
};



