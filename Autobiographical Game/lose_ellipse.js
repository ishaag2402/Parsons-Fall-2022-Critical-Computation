class Ell{
  constructor(EllX,EllY,EllSizeX,EllSizeY,EllMove,EllOpacity){
    this.x = EllX;
    this.y = EllY;
    this.sizeX = EllSizeX;
    this.sizeY = EllSizeY;
    this.velocity = EllMove;
    this.opacity = EllOpacity;
  }
  display(){
    push();
    noStroke();
    fill(255,0,0,this.opacity);
    ellipse(this.x,this.y,this.sizeX,this.sizeY);
    textAlign(CENTER);
    textSize(12);
    fill(255);
    text(this.text,this.x,this.y+5);
    pop();
  }
  translate(){
    this.x-=this.velocity;
  }
} 