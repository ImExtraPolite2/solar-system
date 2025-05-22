let stars = [];
let sound;
let isOnColor = '🔇';
let speedSlider;

function preload() {
  // load audio
  sound = loadSound('audio/space.mp3');
}

function setup() {
  createCanvas(800, 800);

  // Create speed control slider
  speedSlider = createSlider(0.05, 0.1, 0.05, 0.01);
  speedSlider.position(width / 2 + 50, height + 50);
  speedSlider.style('width', '200px');

  // push star object into array
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
  background(10, 10, 30);

  // sets the origin. From polar library
  setCenter(width / 2, height / 2);

  // Get current speed from slider
  let speed = speedSlider.value();

  // Display stars
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    fill(stars[i].brightness);
    ellipse(stars[i].x, stars[i].y, stars[i].size);
  }

  // Create sun from sun function
  sun();

  // Create planets from planet function / use speed from slider to adjust speed
  planet(10, 70, speed * 2.0, 'gray');
  planet(11, 100, speed * 1.6, 'orange');
  planet(12, 130, speed * 1.2, 'green');
  planet(11, 160, speed * 1.0, 'red');
  planet(25, 210, speed * 0.9, 'brown');
  planet(20, 270, speed * 0.6, 'burlywood');
  planet(15, 315, speed * 0.3, 'cyan');
  planet(15, 350, speed * 0.2, 'blue');

  // for audo
  push();
  fill(isOnColor);
  text(isOnColor, width / 2 - 40, height / 2 - 20);
  // rect(width / 2 - 40, height / 2 - 40, 40, 40);
  pop();

  // text above slider
  text('Adjust Speed', -width / 2 + 50, height / 2 - 40);
  textSize(20);
}

function sun() {
  // create sun
  push();
  rotate(frameCount * -0.005);
  fill('orange');
  polarTriangles(8, 10, 34);
  fill('yellow');
  polarEllipse(0, 30, 30);
  pop();
}

function planet(radius, distance, addFrame, color) {
  // create planets
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

function mousePressed() {
  // play audio
  if (
    mouseX > width - 40 &&
    mouseX < width &&
    mouseY > height - 40 &&
    mouseY < height
  ) {
    if (sound.isPlaying()) {
      sound.stop();
      isOnColor = '🔇';
    } else {
      sound.play();
      isOnColor = '🔊';
    }
  }
}
