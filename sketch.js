function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

  let s = 'Click to reset.';
fill(50);
text(s, 10, 350, 200, 80); // Text wraps within text box
}

function mousePressed() {
  clear();
  background(255);
}
