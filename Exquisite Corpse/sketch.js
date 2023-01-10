//Week 5: Exquisite Corpse
//MFADT CC Lab; Section: Chile Picante
//Consultations: Aparna Agarwal, Okta Engineer

//global variables
let imgTint = 255;
let sliderX = 40;
let loffset = 0;
let lx = 0;
let ly = 0;
let leafCounter = 0;
let moveX = 0;
let moveY = 0;

function setup() {
  createCanvas(400, 600);
  imgBody = loadImage('assets/Body-2.jpg');
  imgOrgans = loadImage('assets/Organs-2.jpg');
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  
  images(-40,0,0.19);
  slider(40,360,565,50);
  
  //leaves
  //(leafX,leafRot,leafSc,moveX,moveY,xSpeed)
  leaves(50,-50,1.6,80,1.5,0.5);
  leaves(100,-20,1.2,75,1,0.8);
  leaves(150,-60,1.3,60,3,0.7);
  leaves(200,-30,1.5,85,2,0.2);
  leaves(250,-10,0.9,65,1,0.9);
  leaves(300,-50,1.1,70,1.5,0.5);
  leaves(350,-20,1.3,75,2.5,0.6);
  
  // text(mouseX,50,50)
  // text(mouseY,50,65)
  
}

function images(ximg,yimg,scimg) {
  
  //loading images
  push();
  scale(scimg);
  image(imgBody,ximg,yimg);
  tint(255,imgTint);
  image(imgOrgans,ximg,yimg);
  pop();
  imgTint = map(sliderX,50,350,0,255);
}

function slider(sliderMin,sliderMax,sliderY,sliderOffset) {
  
  //slider position
  if(mouseIsPressed){
    if(mouseX>sliderMin && mouseX<sliderMax && mouseX>sliderX-sliderOffset && mouseX<sliderX+sliderOffset && mouseY>sliderY-sliderOffset){
      sliderX = mouseX
    }
  }
  
  //drawing slider
  push();
  strokeWeight(10);
  stroke(150,0,0);
  line(sliderMin,sliderY,sliderX,sliderY);
  stroke(150);
  line(sliderX,sliderY,sliderMax,sliderY);
  strokeWeight(2);
  stroke(0);
  fill(150,0,0);
  rect(sliderX,sliderY,40,30,5);
  pop();
  
}

function leaves(leafX,leafRot,leafSc,moveX,moveY,xSpeed) {
  
  push();
  
  //leaf x
  translate(leafX,0);
  
  //leaf movement
  lx = map(noise(loffset*xSpeed),0,1,-moveX,moveX);
  ly = leafCounter*moveY%520;
  leafCounter++;
  loffset = loffset + 0.05;
  
  //leaf position
  translate(lx,ly);
  
  //leaf properties
  fill(247,147,59);
  rotate(leafRot+30);
  scale(leafSc+0.2);

  //leaf
  beginShape();
    vertex(-10,0);
    bezierVertex(-5,-7,7,-1,12,0);
    bezierVertex(8,3,-5,7,-10,0);
  endShape();
  
  pop();
  
}

