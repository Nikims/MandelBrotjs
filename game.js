let myX = 0,
  myY = 0,
  updates = 0;
scale = 300;
offset = 500;
coords = [];
cReal = 0;
cFake = 0;
virtualMouseX = 0;
virtualMouseY = 40;
placeDown = [];
resolution = 1;
function transformCoords(i) {
  return scale * i + 300;
}

function update() {
  for (j = 0; j < 5000; j++) {
    coords = [];
    coords[0] = { x: 0, i: 0 };
    for (i = 0; i < 100; i++) {
      coords.push({
        x: coords[i].x * coords[i].x - Math.pow(coords[i].i, 2) + cReal,
        i: 2 * (coords[i].x * coords[i].i) + cFake,
      });
      if (
        coords[i].x < 1 &&
        coords[i].x > -1 &&
        coords[i].i < 1 &&
        coords[i].i > -1
      ) {
        placeDown[0] = {
          x: (virtualMouseX - offset) / scale,
          y: (virtualMouseY - 300) / scale,
          color: i * 2.5,
        };
      }
    }

    lel = coords.length - 1;
    if (virtualMouseX < offset * 2) {
      virtualMouseX += 1 / resolution;
    } else {
      virtualMouseY += 1 / resolution;
      virtualMouseX = 0;
    }
    cReal = (virtualMouseX - offset) / scale;
    cFake = -((virtualMouseY - 300) / scale);
    for (i = 0; i < placeDown.length; i++) {
      context.fillStyle =
        "rgb(" +
        placeDown[i].color * 3 +
        "," +
        placeDown[i].color * 1.3 +
        "," +
        placeDown[i].color * 2 +
        ")";
      context.fillRect(
        placeDown[i].x * scale + offset,
        placeDown[i].y * scale + 300,
        Math.ceil(1 / resolution),
        Math.ceil(1 / resolution)
      );
    }
  }
}

function draw() {}
function keyup(key) {
  // Show the pressed keycode in the console
  console.log("Pressed", key);
}

function mouseup() {
  // Show coordinates of mouse on click
  console.log("Mouse clicked at", mouseX, mouseY);
}
