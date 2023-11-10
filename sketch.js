function setup() {
  createCanvas(600, 600);
  background("black")
}
function draw() {
 fill("red")
 stroke("blue")
 strokeWeight(3)
 if(mouseIsPressed)
 rect(mouseX, mouseY, 20, 30);
}
