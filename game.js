// Creating variables
let myX = 0,
  myY = 0,
  updates = 0;
scale = 120;

xOffset = 300;
coords = [];
cReal = -4;
cFake = -0.5;
alreadyDid = false;
renderingResolution = Math.round(scale / 140);
iterations = Math.round(scale / 2);
function transformCoords(i) {
  return scale * i;
}
function update() {
  // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
}
function plotAPoint(x, i) {
  context.fillRect(
    transformCoords(x) + xOffset,
    transformCoords(-i) + 300,
    2,
    2
  );
}

function draw() {
  // tuk naprogramirai kakvo da se risuva
  if (!alreadyDid) {
    alreadyDid = true;
    for (
      he = -200 / scale;
      he < 100 / scale;
      he += renderingResolution / scale
    ) {
      for (
        she = -200 / scale;
        she < 90 / scale;
        she += renderingResolution / scale
      ) {
        cReal = he;
        cFake = she;

        coords = [];
        coords[0] = { x: 0 / scale, i: -(0 / scale) };

        for (i = 0; i < iterations; i++) {
          coords.push({
            x: coords[i].x * coords[i].x - Math.pow(coords[i].i, 2) + cReal,
            i: 2 * (coords[i].x * coords[i].i) + cFake,
          });
          /*
          drawLine(
            transformCoords(coords[i].x),
            transformCoords(-coords[i].i),
            transformCoords(coords[i + 1].x),
            transformCoords(-coords[i + 1].i)
          );
          */
        }

        if (
          coords[coords.length - 1].x < 1 &&
          coords[coords.length - 1].x > -1 &&
          coords[coords.length - 1].i < 1 &&
          coords[coords.length - 1].i > -1
        ) {
          context.fillRect(
            transformCoords(cReal) + xOffset,
            transformCoords(cFake) + 300,
            renderingResolution,
            renderingResolution
          );
        }
        for (i = 0; i < 800; i += scale) {
          context.fillRect(i - 100, 300, 1, 10);
        }
        for (i = 0; i < 600; i += scale) {
          context.fillRect(xOffset, i - 100, 10, 1);
        }
        for (i = 0; i < coords.length; i++) {
          //  plotAPoint(coords[i].x, coords[i].i);
        }
        /*for (i = 0; i < 360; i++) {
      context.fillRect(
        Math.sin(i) * scale + 300,
        Math.cos(i) * scale + 300,
        5,
        5
      );
    }*/

        // plotAPoint(5, 5);

        drawLine(0, 300, 600, 300);
        drawLine(xOffset, 0, xOffset, 600);
        context.fillText(-(mouseY - 300) / scale, 30, 30, 300);
      }
    }
  }
}

function keyup(key) {
  // Show the pressed keycode in the console
  console.log("Pressed", key);
  /*
  redraw();
  scale += 50;
  renderingResolution = Math.round(scale / 5);
  iterations = Math.round(scale / 2);
  alreadyDid = false;
  */
}

function mouseup() {
  // Show coordinates of mouse on click
  console.log("Mouse clicked at", mouseX, mouseY);
}
