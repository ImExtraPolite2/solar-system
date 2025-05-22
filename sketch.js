let stars = [];

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 300; i++) {
    stars.push({
      x: random(-width, width),
      y: random(-height, height),
      size: random(1, 3),
      brightness: random(150, 255),
    });
  }
}

function draw() {
  background(10, 10, 30); // Dark night sky
  setCenter(width / 2, height / 2);

  noStroke();
  for (let star of stars) {
    fill(star.brightness);
    ellipse(star.x, star.y, star.size);

    // Twinkle
    star.brightness += random(-5, 5);
    star.brightness = constrain(star.brightness, 150, 255);
  }

  sun();

  planet(10, 70, 0.1, 'gray');
  planet(11, 100, 0.08, 'orange');
  planet(12, 130, 0.06, 'green');
  planet(11, 160, 0.05, 'red');
  planet(25, 210, 0.044, 'brown');
  planet(20, 270, 0.03, 'lightbrown');
  planet(15, 315, 0.015, 'cyan');
  planet(15, 350, 0.01, 'blue');
}

function sun() {
  push();
  rotate(frameCount * -0.005);
  fill('orange');
  polarTriangles(8, 10, 34);
  fill('yellow');
  polarEllipse(0, 30, 30);
  pop();
}

function planet(radius, distance, addFrame, color) {
  push();
  noFill();
  stroke('white');
  circle(0, 0, distance * 2);
  pop();

  push();
  fill(color);
  rotate(frameCount * -addFrame);
  polarEllipse(0, radius, radius, distance);
  pop();
}
