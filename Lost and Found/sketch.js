function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(222,246,250);
  noStroke();
  
  push();
  translate(10,55);
  
  //shadow nailcutter base
  fill(180,202,207);
  quad(60.78,247.27,112.73,299.22,319.18,120.29,239.71,40.82);
  quad(319.18,120.29,239.71,40.82,277.85,26.29,331.21,82.15);
  
  //shadow nailcutter handle
  rect(50,75,210,50);
  triangle(50,75,260,60,260,75);
  triangle(50,125,260,125,260,140);
  
  pop();
  
  push();
  translate(15,40);
  
  //nailcutter base
  fill(230);
  quad(60.78,247.27,112.73,299.22,319.18,120.29,239.71,40.82);
  quad(319.18,120.29,239.71,40.82,277.85,26.29,331.21,82.15);
 
  //nailcutter blade
  fill(200);
  ellipse(337.72,22.28,120);
  fill(222,246,250);
  ellipse(337.72,22.28,96);
  
  //nailcutter blade negative
  fill(222,246,250);
  triangle(390.88,0,235.12,0,235.12,36.23);
  triangle(323.77,124.88,352.82,0,400,124.88);
  triangle(400,0,352.82,0,400,124.88);
  
  //shadow nailcutter handle
  fill(190);
  //top part
  ellipse(258,81,20);
  quad(219.81,83.89,219.81,94.64,258,91,248.13,81.13);
  //hinge
  ellipse(258,111,40);
  //bottom part
  ellipse(258,141,20);
  quad(159.94,132.85,150.85,143.35,258,151,248.17,139.16);
  
  //nailcutter handle
  fill(200);
  rect(50,75,210,50);
  triangle(50,75,260,60,260,75);
  triangle(50,125,260,125,260,140);
  ellipse(260,70,20);
  ellipse(260,130,20);
  
  //nailcutter handle negative
  fill(230);
  triangle(260,120,260,80,235,117.62);
  triangle(260,80,235,116.72,235,82.7);
  ellipse(236.68,100,35.4);
  
  //shadow nailcutter top part
  fill(190);
  quad(234.77,82.39,219.81,94.64,258,91,248.13,81.13);
  quad(235,82.38,228.38,84.37,223.17,88.56,219.81,94.64);

  //nailcutter hinge
  fill(200);
  ellipse(260,100,40);
  stroke(230);
  strokeWeight(3);
  arc(260,100,29,29,-PI/2.5,PI/2.5);
  noStroke();
  
  //balloon panel
  fill(230);
  quad(60,84.09,209,73.45,209,126.57,60,115.91);
  //balloon strings
  stroke(200);
  strokeWeight(4);
  line(187,93,55,93);
  line(142,104,55,104);
  line(95,98.89,55,98.89);
  //balloons
  noStroke();
  //blue
  fill(0,0,255);
  ellipse(187,92.91,38,30);
  //red
  fill(255,0,0);
  ellipse(142,104,40,32);
  //yellow
  fill(255,255,0);
  ellipse(95,98.89,38,30);
  
  //details
  noFill();
  //blue
  stroke(128,128,255);
  strokeWeight(2);
  arc(187,92.91,30,22,0,PI/2);
  strokeWeight(3);
  point(201,89);
  //red
  stroke(255,128,128);
  strokeWeight(2);
  arc(142,104,32,26,0,PI/2);
  strokeWeight(3);
  point(157,99);
  //yellow
  stroke(209,209,94);
  strokeWeight(2);
  arc(95,98.89,30,22,0,PI/2);
  strokeWeight(3);
  point(109,94);
  
  //stroke settings
  noFill();
  stroke(0,0,0);
  strokeWeight(2);
  
  //stroke balloon panel
  quad(60,84.09,209,73.45,209,126.57,60,115.91);
  
  //stroke nailcutter handle
  line(50,75,50,125);
  line(50,75,260,60);
  arc(260,70,20,20,-PI/2,PI/2);
  arc(260,130,20,20,-PI/2,PI/2);
  line(260,80,235,82.38);
  line(260,120,235,117.62);
  arc(236.68,100,35.4,35.4,PI/2,-PI/2);
  line(260,140,50,125);
  
  //stroke nailcutter hinge
  ellipse(260,100,40);
  
  //stroke nailcutter base
  line(159.94,132.85,60.78,247.27);
  line(60.78,247.27,112.73,299.22);
  line(112.73,299.22,319.18,120.29);
  line(319.18,120.29,336.47,70.27);
  line(289.73,23.53,239.71,40.82);
  line(239.71,40.82,220.64,62.81);
  arc(337.72,22.28,96,96,PI/1.96,PI/1.01);
  
  pop();
  
  //translate negative
  push();
  fill(222,246,250);
  rect(290,0,110,40);
  pop();
  
  
}