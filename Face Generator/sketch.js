let f1x = 0;
let f1y = 0;
let f2x = 0;
let f2y = 0;
let f3x = 0;
let f3y = 0;
let f4x = 0;
let f4y = 0;
let f5x = 0;
let f5y = 0;
let f6x = 0;
let f6y = 0;
let f7x = 0;
let f7y = 0;
let f8x = 0;
let f8y = 0;
let f9x = 0;
let f9y = 0;
let f10x = 0;
let f10y = 0;
let f11x = 0;
let f11y = 0;
let f12x = 0;
let f12y = 0;
let f13x = 0;
let f13y = 0;

let b0 = 0;
let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;

let f1s = 0;
let f1b = 0;
let f2s = 0;
let f2b = 0;
let f3s = 0;
let f3b = 0;
let f4s = 0;
let f4b = 0;
let f5s = 0;
let f5b = 0;
let fh = 0;
let ec = 230;

let lx = 133;
let ly = 119;
let rx = 240;
let ry = 104;

function setup() {
  pixelDensity(25);
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  background(220);
  
  f1x = random(89,109); //99;
  f1y = random(193,213); //203;
  f2x = random(70,90); //80;
  f2y = random(117,137); //127;
  f3x = random(223,243); //233;
  f3y = random(134,154); //144;
  f4x = random(264,284); //274;
  f4y = random(153,173); //163;
  f5x = random(244,264); //254;
  f5y = random(195,215); //205;
  f6x = random(284,304); //294;
  f6y = random(95,115); //105;
  f7x = random(276,296); //286;
  f7y = random(128,148); //138;
  f8x = random(103,123); //113;
  f8y = random(246,266); //256;
  f9x = random(101,121); //111;
  f9y = random(272,292); //282;
  f10x = random(133,153); //143;
  f10y = random(303,323); //313;
  f11x = random(185,205); //195;
  f11y = random(299,319); //309;
  f12x = random(228,248); //238;
  f12y = random(268,288); //278;
  f13x = random(219,239); //229;
  f13y = random(245,265); //255;
 
  b0 = (mouseX+mouseY)/3
  b1 = random(25,75);
  b2 = random(25,75);
  b3 = random(25,75);
  b4 = random(25,75);
  
  f1s = random(75,100);
  f1b = random(25,50);
  f2s = random(75,100);
  f2b = random(50,75);
  f3s = random(75,100);
  f3b = random(75,100);
  f4s = random(50,75);
  f4b = random(75,100);
  f5s = random(25,50);
  f5b = random(75,100);
  fh = (mouseX+mouseY)/1.5;
  
  noStroke();
  
  //background
  
  push();
  colorMode(HSB);
  
  fill(b0,b1,b2);
  quad(0,0,65,0,47,47,0,65);
  
  fill(b0,b2,b1);
  beginShape();
  vertex(65,0);
  vertex(88,0);
  vertex(113,28);
  vertex(104,63);
  vertex(39,68);
  endShape(CLOSE);
  
  fill(b0,b4,b3);
  beginShape();
  vertex(47,47);
  vertex(0,65);
  vertex(0,139);
  vertex(49,139);
  vertex(57,108);
  vertex(39,68);
  endShape(CLOSE);
  
  fill(b0,b3,b4);
  beginShape();
  vertex(39,68);
  vertex(104,63);
  vertex(105,78);
  vertex(f2x,f2y);
  vertex(57,108);
  endShape(CLOSE);
  
  fill(b0,b4,b1);
  beginShape();
  vertex(0,139);
  vertex(49,139);
  vertex(26,171);
  vertex(41,227);
  vertex(0,227);
  endShape(CLOSE);
  
  fill(b0,b1,b2);
  beginShape();
  vertex(57,108);
  vertex(49,139);
  vertex(26,171);
  vertex(41,227);
  vertex(f1x,f1y);
  vertex(f2x,f2y);
  endShape(CLOSE);
  
  fill(b0,b4,b1);
  quad(0,227,0,306,41,270,41,227);
  
  fill(b0,b2,b1);
  beginShape();
  vertex(41,227);
  vertex(41,270);
  vertex(84,291);
  vertex(f9x,f9y);
  vertex(f8x,f8y);
  vertex(f1x,f1y);
  endShape(CLOSE);
  
  fill(b0,b1,b2);
  beginShape();
  vertex(41,270);
  vertex(0,306);
  vertex(0,356);
  vertex(71,344);
  vertex(84,291);
  endShape(CLOSE);
  
  fill(b0,b3,b4);
  beginShape();
  vertex(0,356);
  vertex(71,344);
  vertex(105,369);
  vertex(99,400);
  vertex(0,400);
  endShape(CLOSE);
  
  fill(b0,b4,b3);
  beginShape();
  vertex(f9x,f9y);
  vertex(84,291);
  vertex(71,344);
  vertex(105,369);
  vertex(151,366);
  vertex(f10x,f10y);
  endShape(CLOSE);
  
  fill(b0,b1,b2);
  beginShape();
  vertex(151,366);
  vertex(105,369);
  vertex(99,400);
  vertex(148,400);
  vertex(190,379);
  endShape(CLOSE);

  fill(b0,b1,b3);
  beginShape();
  vertex(f11x,f11y);
  vertex(f10x,f10y);
  vertex(151,366);
  vertex(190,379);
  vertex(211,343);
  endShape(CLOSE);
  
  fill(b0,b3,b4);
  beginShape();
  vertex(190,379);
  vertex(211,343);
  vertex(241,347);
  vertex(264,400);
  vertex(148,400);
  endShape(CLOSE);
  
  fill(b0,b1,b2);
  beginShape();
  vertex(211,343);
  vertex(241,347);
  vertex(270,305);
  vertex(f12x,f12y);
  vertex(f11x,f11y);
  endShape(CLOSE);
  
  fill(b0,b2,b1);
  beginShape();
  vertex(270,305);
  vertex(241,347);
  vertex(264,400);
  vertex(313,400);
  vertex(328,344);
  vertex(325,305);
  endShape(CLOSE);
  
  fill(b0,b4,b3);
  quad(328,344,313,400,361,400,361,353);
  
  fill(b0,b3,b4);
  quad(361,353,361,400,400,400,400,330);
  
  fill(b0,b2,b4);
  beginShape();
  vertex(400,256);
  vertex(344,256);
  vertex(325,305);
  vertex(328,344);
  vertex(361,353);
  vertex(400,330);
  endShape(CLOSE);
  
  fill(b0,b1,b3);
  beginShape();
  vertex(297,229);
  vertex(f5x,f5y);
  vertex(f13x,f13y);
  vertex(f12x,f12y);
  vertex(270,305);
  endShape(CLOSE);
  
  fill(b0,b1,b2);
  beginShape();
  vertex(297,229);
  vertex(270,305);
  vertex(325,305);
  vertex(344,256);
  vertex(336,221);
  endShape(CLOSE);
  
  fill(b0,b3,b4);
  beginShape();
  vertex(f7x,f7y);
  vertex(f4x,f4y);
  vertex(f5x,f5y);
  vertex(297,229);
  vertex(336,221);
  vertex(327,179);
  endShape(CLOSE);
  
  fill(b0,b2,b1);
  beginShape();
  vertex(374,169);
  vertex(327,179);
  vertex(336,221);
  vertex(344,256);
  vertex(400,256);
  vertex(400,200);
  endShape(CLOSE);
  
  fill(b0,b1,b2);
  beginShape();
  vertex(374,169);
  vertex(327,179);
  vertex(f7x,f7y);
  vertex(345,110);
  vertex(325,149);
  endShape(CLOSE);
  
  fill(b0,b1,b3);
  beginShape();
  vertex(345,110);
  vertex(325,149);
  vertex(374,169);
  vertex(381,109);
  vertex(400,109);
  vertex(400,91);
  vertex(380,87);
  endShape(CLOSE);
  
  fill(b0,b4,b3);
  quad(400,109,400,200,374,169,381,109);
  
  fill(b0,b2,b1);
  quad(f6x,f6y,f7x,f7y,345,110,321,89);
  
  fill(b0,b3,b4);
  beginShape();
  vertex(321,89);
  vertex(345,110);
  vertex(380,87);
  vertex(370,34);
  vertex(346,29);
  endShape(CLOSE);
  
  fill(b0,b2,b4);
  quad(400,0,370,34,380,87,400,91);
  
  fill(b0,b1,b2);
  quad(400,0,323,0,346,29,370,34);
  
  fill(b0,b1,b4);
  beginShape();
  vertex(323,0);
  vertex(258,0);
  vertex(297,20);
  vertex(297,41);
  vertex(321,89);
  vertex(346,29);
  endShape(CLOSE);
  
  fill(b0,b1,b3);
  beginShape();
  vertex(297,41);
  vertex(252,46);
  vertex(264,59);
  vertex(265,104);
  vertex(f6x,f6y);
  vertex(321,89);
  endShape(CLOSE);
  
  fill(b0,b2,b1);
  beginShape();
  vertex(219,0);
  vertex(259,0);
  vertex(297,20);
  vertex(297,41);
  vertex(252,46);
  vertex(218,39);
  vertex(245,24);
  endShape(CLOSE);
  
  fill(b0,b3,b4);
  beginShape();
  vertex(219,0);
  vertex(245,24);
  vertex(218,39);
  vertex(184,19);
  vertex(155,36);
  vertex(155,0);
  endShape(CLOSE);
  
  fill(b0,b4,b3);
  beginShape();
  vertex(252,46);
  vertex(203,71);
  vertex(172,92);
  vertex(184,19);
  vertex(218,39);
  endShape(CLOSE);
  
  fill(b0,b1,b2);
  beginShape();
  vertex(155,36);
  vertex(184,19);
  vertex(172,92);
  vertex(141,68);
  vertex(104,63);
  vertex(113,28);
  vertex(132,49);
  endShape(CLOSE);

  fill(b0,b2,b1);
  beginShape();
  vertex(155,0);
  vertex(155,36);
  vertex(132,49);
  vertex(113,28);
  vertex(88,0);
  endShape(CLOSE);
  
  pop();
  
  //face
   
  push();
  colorMode(HSB);
  
  //fixed position
  //above left eye
  fill(fh,f3s,f3b);
  beginShape();
  vertex(165,96);
  vertex(141,76);
  vertex(105,78);
  vertex(f2x,f2y);
  vertex(102,114);
  vertex(139,91);
  vertex(171,110);
  endShape(CLOSE);
  //left eyebrow
  fill(fh,f2s,f2b);
  beginShape();
  vertex(172,92);
  vertex(165,96);
  vertex(141,76);
  vertex(105,78);
  vertex(104,63);
  vertex(141,68);
  endShape(CLOSE);
  //between eyes
  fill(fh,f3s,f3b);
  quad(165,96,171,110,215,104,203,71);
  //right eyebrow
  fill(fh,f1s,f1b);
  quad(207,83,264,59,252,46,203,71);
  //above right eye
  fill(fh,f2s,f2b);
  quad(207,83,264,59,266,103,215,104);
  
  
  //fixed position
  //upper lip
  fill(fh,f5s,f5b);
  beginShape();
  vertex(152,192);
  vertex(151,235);
  vertex(169,248);
  vertex(192,234);
  vertex(180,203);
  endShape(CLOSE);
  
  //variable
  //right cheek
  fill(fh,f2s,f2b);
  quad(f1x,f1y,152,192,151,235,f8x,f8y);
  //left cheek
  fill(fh,f1s,f1b);
  beginShape();
  vertex(185,188);
  vertex(f5x,f5y);
  vertex(f13x,f13y);
  vertex(192,234);
  vertex(180,203);
  endShape(CLOSE);  
  
  //fixed position
  //between eyes
  fill(fh,f3s,f3b);
  triangle(171,110,189,126,215,104);
  
  //fixed position
  //nose
  fill(fh,f1s,f1b);
  arc(169,190,33,32,TWO_PI/1.03,PI/1.03);
  fill(fh,f2s,f2b);
  triangle(189,126,152,192,185,188);
  
  //below left eye
  //fixed position - right
  fill(fh,f1s,f1b);
  beginShape();
  vertex(152,192);
  vertex(189,126);
  vertex(171,110);
  vertex(155,105);
  vertex(140,140);
  endShape(CLOSE);
  //variable - mid
  fill(fh,f5s,f5b);
  triangle(152,192,140,140,f1x,f1y)
  //variable - left
  fill(fh,f4s,f4b);
  beginShape();
  vertex(140,140);
  vertex(f1x,f1y);
  vertex(f2x,f2y);
  vertex(102,114);
  vertex(116,107);
  endShape(CLOSE);
  
  //fixed position
  //left eye
  fill(ec);
  ellipse(136,115,40,50);
  fill(fh,f2s,f2b);
  quad(102,114,139,82,171,110,134,100);
  fill(fh,f3s,f3b);
  ellipse(135,119,30,20);
  fill(0);
  ellipse(lx,ly,10,12);
  //eyelashes
  push();
  translate(0,-5)
  strokeWeight(2);
  line(114,96,120,110);
  line(130,106,125,91);
  line(144,86,140,106);
  line(157,93,152,109);
  pop();
  
  //below right eye
  //variable
  //left
  fill(fh,f5s,f5b);
  beginShape();
  vertex(189,126);
  vertex(187,157);
  vertex(f3x,f3y);
  vertex(236,128);
  vertex(219,104);
  vertex(215,104);
  endShape(CLOSE);
  //right
  fill(fh,f4s,f4b);
  beginShape();
  vertex(f3x,f3y);
  vertex(f4x,f4y);
  vertex(f7x,f7y);
  vertex(f6x,f6y);
  vertex(265,104);
  vertex(260,104);
  vertex(236,128);
  endShape(CLOSE);
  //bottom
  fill(fh,f3s,f3b);
  beginShape();
  vertex(187,157);
  vertex(185,188);
  vertex(f5x,f5y);
  vertex(f4x,f4y);
  vertex(f3x,f3y);
  endShape(CLOSE);
    
  //fixed position
  //right eye
  fill(ec);
  ellipse(240,104,40,50);
  fill(fh,f2s,f2b);
  ellipse(240,104,22,31);
  fill(0);
  ellipse(rx,ry,10,12);
  fill(fh,f1s,f1b);
  arc(240,104,50,50,PI,TWO_PI);
  line(215,104,265,104);
  //eyelashes
  push();
  strokeWeight(2);
  line(223,104,223,91);
  line(233,104,233,88);
  line(246,104,247,89);
  line(257,104,257,91);
  pop();
  
  //fixed position
  //lips
  fill(fh,f3s,f3b);
  triangle(151,235,f8x,f8y,169,248);
  fill(fh,f1s,f1b);
  quad(f8x,f8y,169,248,161,273,137,273);
  fill(fh,f2s,f2b);
  quad(169,248,161,273,210,271,f13x,f13y);
  fill(fh,f4s,f4b);
  triangle(169,248,f13x,f13y,192,234);
  
  //fixed position
  //chin
  //left
  fill(fh,f3s,f3b);
  beginShape();
  vertex(f8x,f8y);
  vertex(f9x,f9y);
  vertex(f10x,f10y);
  vertex(172,272);
  vertex(137,273);
  endShape(CLOSE);
  //center
  fill(fh,f2s,f2b);
  triangle(172,272,f10x,f10y,f11x,f11y)
  //right
  fill(fh,f5s,f5b);
  beginShape();
  vertex(172,272);
  vertex(f11x,f11y);
  vertex(f12x,f12y);
  vertex(f13x,f13y);
  vertex(210,271);
  endShape(CLOSE);
  
  pop();
  
}

function mousePressed(){

  ec = random(0,255);
  
  lx = mouseX;
  ly = mouseY;
  rx = mouseX;
  ry = mouseY;
  
  if(mouseX > 141) {
    lx = 141
  }
  if(mouseX < 131) {
    lx = 131
  }
  if(mouseY > 122) {
    ly = 122
  }
  if(mouseY < 116) {
    ly = 116
  }
  if(mouseX > 244) {
    rx = 244
  }
  if(mouseX < 236) {
    rx = 236
  }
  if(mouseY > 110) {
    ry = 110
  }
  if(mouseY < 104) {
    ry = 104
  }
  
}