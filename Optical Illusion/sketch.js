//Week 6: Optical Illusion
//MFADT CC Lab; Section: Chile Picante
//Consultations: Arushi Agarwal

//global variables
let ellipseX = 0;
let ellipseDim = 35;
let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  if(mouseIsPressed){
    //drawing background
    drawEllipse();
    //drawing lines
    for(i=0; i<8; i++){
      push();
        translate(width/2,height/2);
        rotate(i*22.5);
        drawLines();
      pop();
    }
  }
  
  //drawing circles
  for(i=0; i<8; i++){
    push();
      translate(width/2,height/2);
      rotate(i*22.5);      
      drawCircles(i*22.5);
    pop();
  }
  
}

function drawEllipse(){
  push();
    noStroke();
    fill(70);
    ellipse(width/2,height/2,width,height);
  pop();
}

function drawLines(){
  push(); 
    stroke(0);
    strokeWeight(2);
    line(-width/2,0,width/2,0);
  pop();
}

function drawCircles(deg){
  push();
    noStroke();
    fill(255);
    ellipseX = map(sin(angle+deg),-1,1,ellipseDim/2,600-(ellipseDim/2));
    
    ellipse(ellipseX-width/2,0,ellipseDim,ellipseDim);
    angle+=0.2;
  pop();
}