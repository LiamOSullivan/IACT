function setup() {
  createCanvas(500, 300);
  background(0);

  // Set colors
  fill(255, 127);
  stroke(255);
  strokeWeight(5);
  var myVar = 40;

  // A rectangle
  rect(myVar, 120, 120, 40);
  // An ellipse
  ellipse(240, 240, 80, 80);
  // A triangle
  triangle(300, 100, 400, 100, 350, 50);
 fill(0);
 textSize(50);
  textFont("Georgia");
 text(myVar, 350, 250);
}

function draw() {
  
}