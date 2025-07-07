export function pick() {
  const body = document.querySelector('body');

  let svg = document.getElementById('color-picker-svg');
  if (!svg) {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'color-picker-svg');
    svg.style.position = 'fixed';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100vw';
    svg.style.height = '100vh';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '999';
    svg.setAttribute('width', '100vw');
    svg.setAttribute('height', '100vh');
    body.appendChild(svg);
  }
  let axisX = document.getElementById('axisX');
  if (!axisX) {
    axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttribute('id', 'axisX');
    axisX.setAttribute('y1', '0');
    axisX.setAttribute('y2', window.innerHeight);
    axisX.setAttribute('stroke', 'black');
    axisX.setAttribute('stroke-width', '1');
    svg.appendChild(axisX);
  }
  let axisY = document.getElementById('axisY');
  if (!axisY) {
    axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.setAttribute('id', 'axisY');
    axisY.setAttribute('x1', '0');
    axisY.setAttribute('x2', window.innerWidth);
    axisY.setAttribute('stroke', 'black');
    axisY.setAttribute('stroke-width', '1');
    svg.appendChild(axisY);
  }

  const hsl = document.createElement('div');
  hsl.className = 'hsl';
  hsl.style.position = 'fixed';
  hsl.style.top = '50%';
  hsl.style.left = '50%';
  hsl.style.transform = 'translate(-50%, -50%)';
  hsl.style.zIndex = '1000';
  body.appendChild(hsl);

  const hue = document.createElement('div');
  hue.className = 'hue';
  hue.style.position = 'fixed';
  hue.style.top = '10px';
  hue.style.right = '20px';
  hue.style.zIndex = '1000';
  body.appendChild(hue);

  const luminosity = document.createElement('div');
  luminosity.className = 'luminosity';
  luminosity.style.position = 'fixed';
  luminosity.style.bottom = '10px';
  luminosity.style.left = '20px';
  luminosity.style.zIndex = '1000';
  body.appendChild(luminosity);

  let lastHSL = '';

  body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const w = window.innerWidth;
    const h = window.innerHeight;

    const Hue = Math.round((x / w) * 360);
    const Luminosity = Math.round((y / h) * 100);

    const hslString = `hsl(${Hue}, 50%, ${Luminosity}%)`;
    body.style.background = hslString;

    hsl.textContent = hslString;
    lastHSL = hslString;

    hue.textContent ='hue'+ Hue;
    luminosity.textContent ='Luminosity'+ Luminosity;

    if (axisX) {
      axisX.setAttribute('x1', x);
      axisX.setAttribute('x2', x);
      axisX.setAttribute('y1', 0);
      axisX.setAttribute('y2', window.innerHeight);
    }
    if (axisY) {
      axisY.setAttribute('y1', y);
      axisY.setAttribute('y2', y);
      axisY.setAttribute('x1', 0);
      axisY.setAttribute('x2', window.innerWidth);
    }
  });

  body.addEventListener('click', () => {
    if (lastHSL) {
      navigator.clipboard.writeText(lastHSL);
    }
  });
}