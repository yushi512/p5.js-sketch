let v,u;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
  fill(255);
}

function mouseDragged(){
  v = mouseX - pmouseX;
  u = mouseY - pmouseY;
  circle(
    mouseX+random(-20/v+u,20/v+u),
    mouseY+random(-20/v+u,20/v+u),
    random(10)
  );
}

function draw() {
}