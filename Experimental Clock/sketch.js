function setup() {
  createCanvas(600, 600);
  frameRate(15);
}

function draw() {
  background(0);  
  
  //stars
  push();
  noStroke();
    ellipse(random(0,600),random(0,450),random(8,12));
    ellipse(random(0,600),random(0,450),random(8,12));
    ellipse(random(0,600),random(0,450),random(8,12));
  pop();
  
  //moon
  
  let s = second();
  let sSpeed = (s%2);
  if (sSpeed === 1) {
    s++
  }
  
  let moonX = 53;
  let moonY = 70;
  let moonXPos = map(s,0,60,-1*moonX,moonX);
  let op = map(s,0,60,15,3);
  
  push();
    noStroke();
    translate(450,150);
    scale(1.9,1);
    fill(0);
    beginShape();
      vertex(0,-75);
      bezierVertex(moonX,-1*moonY,moonX,moonY,0,75)
      bezierVertex(-1*moonX,moonY,-1*moonX,-1*moonY,0,-75) 
    endShape();
    fill(247,246,230,op);
    beginShape();
      vertex(0,-75);
      bezierVertex(moonX,-1*moonY,moonX,moonY,0,75)
      bezierVertex(-1*moonX,moonY,-1*moonX,-1*moonY,0,-75) 
    endShape();
    fill(247,246,230);
    beginShape();
      vertex(0,-75);
      bezierVertex(moonX,-1*moonY,moonX,moonY,0,75)
      bezierVertex(moonXPos,moonY,moonXPos,-1*moonY,0,-75) 
    endShape();
    fill(0,0,0,25);
    ellipse(15,25,20,40);
    ellipse(-10,-20,30,60);
    ellipse(20,-15,15,30);
  pop();
  
  //waves
  
  let wSpeed = millis()/10;
  let period = 200;
  let shm = cos(TWO_PI * (wSpeed/period))
  
  //wave 1
  
  push();
  
    translate(0,360);

    let w11 = 0;
    let w12 = 0;
    let w13 = 0;
    let w14 = 0;
    let w15 = 0;
    let w16 = 0;
    let w17 = 0;

    let w1a1 = 51;
    let w1a2 = 71;
    let w1a3 = 77;
    let w1a4 = 74;
    let w1a5 = 65;
    let w1a6 = 55;
    let w1a7 = 65;
  
    w11 = w1a1 * shm
    w12 = w1a2 * shm
    w13 = w1a3 * shm
    w14 = w1a4 * shm
    w15 = w1a5 * shm
    w16 = w1a6 * shm
    w17 = w1a7 * shm

    noStroke();
    fill(42,73,150);

    beginShape();
      vertex(0,w11);
      bezierVertex(104,w12,184,w13,300,w14);
      bezierVertex(369,w15,484,w16,600,w17);
      vertex(600,600);
      vertex(0,600);
      vertex(0,w11);
    endShape();
  
  pop();
  
  //wave 2
  
  push();
  
    translate(0,430);

    let w21 = 0;
    let w22 = 0;
    let w23 = 0;
    let w24 = 0;
    let w25 = 0;
    let w26 = 0;
    let w27 = 0;

    let w2a1 = 76;
    let w2a2 = 43;
    let w2a3 = 30;
    let w2a4 = 55;
    let w2a5 = 89;
    let w2a6 = 100;
    let w2a7 = 95;

    w21 = w2a1 * shm
    w22 = w2a2 * shm
    w23 = w2a3 * shm
    w24 = w2a4 * shm
    w25 = w2a5 * shm
    w26 = w2a6 * shm
    w27 = w2a7 * shm

    noStroke();
    fill(98,126,196);

    beginShape();
      vertex(0,w21);
      bezierVertex(77,w22,168,w23,294,w24);
      bezierVertex(407,w25,506,w26,600,w27);
      vertex(600,600);
      vertex(0,600);
      vertex(0,w21);
    endShape();
  
  pop();  
  
}