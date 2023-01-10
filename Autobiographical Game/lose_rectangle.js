class Rectangle{
  constructor(RectX,RectY,RectSizeX,RectSizeY,RectMove,RectOpacity){
    this.x = RectX;
    this.y = RectY;
    this.sizeX = RectSizeX;
    this.sizeY = RectSizeY;
    this.velocity = RectMove;
    this.opacity = RectOpacity;
  }
  display(){
    push();
    noStroke();
    fill(255,0,0,this.opacity);
    rect(this.x,this.y,this.sizeX,this.sizeY);
    textSize(12);
    textAlign(CENTER);
    fill(255);
    text(this.text,this.x+(this.sizeX/2),this.y+10+(this.sizeY/2));
    pop();
  }
  translate(){
    this.x-=this.velocity;
  }
  endGame(){ //first rectangle
    if(this.x<-2625){
      mode=5;
    }
  }
} 