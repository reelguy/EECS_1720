var w;

function setup() {
  createCanvas(640, 360);
  // make a walker object
  w = new Walker();
}

function draw() {
  background(51);
  //update and display object
  w.update();
  w.display();
}

function Walker(){
  //start walker in center
  this.pos = createVector(width/2,height/2);
  
  this.update = function() {
    //move randomly
    var vel = createVector(random(-5,5), random(-5,5));
    this.pos.add(vel);
  }
  this.display = function() {
    //draw walker as circle
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
