let xStreaming = 0;
let xSocials = 0;
let xOthers = 0;
let screentimeStreaming = [110,162,139,181,133,176,246,69,104,122];
let screentimeSocials = [110+87,162+75,139+146,181+103,133+136,176+236,246+75,69+115,104+147,122+111];
let screentimeOthers = [336,361,458,359,530,555,446,348,386,398];

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  rotate(36);

  drawArcs(screentimeOthers,xOthers,238,240,177);
  drawArcs(screentimeSocials,xSocials,128,201,237);
  drawArcs(screentimeStreaming,xStreaming,212,159,237);

  fill(0);
  ellipse(0,0,6,6);
}

function drawArcs(screentime,x,r,g,b){
  for(i=0; i<10; i++){
    push();
    x = map(screentime[i],0,540,0,600);
    rotate(i*36);
    fill(255,255,255,20);
    stroke(r,g,b);
    strokeWeight(3);
    arc(0,0,x,x,1,35);
    // rotate(-9);
    // line(0,0,x/2.85,x/2.85);
    pop();
  }
}