class Phone{
  constructor(PhoneX,PhoneY,PhoneSizeX,PhoneSizeY,PhoneMove,PhoneOpacity){
    this.x = PhoneX;
    this.y = PhoneY;
    this.sizeX = PhoneSizeX;
    this.sizeY = PhoneSizeY;
    this.velocity = PhoneMove;
    this.opacity = PhoneOpacity;
  }
  display(){
    push();
    noStroke();
    fill(0,255,0,this.opacity);
    rect(this.x,this.y,this.sizeX,this.sizeY);
    pop();
  }
  translate(){
      this.x-=this.velocity;
  }
} 