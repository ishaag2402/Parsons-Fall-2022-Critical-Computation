class Player{
  constructor(PlayerX,PlayerY,PlayerSize,PlayerMove,PlayerOpacity){
    this.x = PlayerX;
    this.y = PlayerY;
    this.size = PlayerSize;
    this.velocity = PlayerMove;
    this.opacity = PlayerOpacity;
  }
  display(){
    push();
    noStroke();
    fill(0,0,0,this.opacity);
    ellipse(this.x,this.y,this.size);
    pop();
    push();
    scale(0.1);
    image(gifplayer,(this.x-(this.size/2))*10,(this.y-(this.size/2))*10);
    pop();
  }
  move(){
  if(keyIsDown(40)){
      this.y+=this.velocity;
    }
    if(this.y>(height-(this.size)/2)){
      this.y=(height-(this.size)/2);
    }
    if(keyIsDown(38)){
      this.y-=this.velocity;
    }
    if(this.y<(this.size)/2){
      this.y=(this.size)/2;
    }
  }
  collision_rectangle(arrayrect){
    for(let i=0;i<arrayrect.length;i++){
      if(this.x>arrayrect[i].x && this.x<(arrayrect[i].x+(arrayrect[i].sizeX)) && this.y>arrayrect[i].y && this.y<(arrayrect[i].y+(arrayrect[i].sizeY))){
        console.log("collide lose",arrayrect[i].y);
        mode=4;
      }
    }
  }
  collision_ellipse(arrayell){
    for(let i=0;i<arrayell.length;i++){
      let distArray = dist(this.x,this.y,arrayell[i].x,arrayell[i].y);
      if(distArray<=arrayell[i].sizeY/2){
        console.log("collide lose",arrayell[i].y);
        mode=4;
      }
    }
  }
  collisionWin(arraywin){
    for(let i=0;i<arraywin.length;i++){
      if(this.x>arraywin[i].x && this.x<(arraywin[i].x+(arraywin[i].sizeX)) && this.y>arraywin[i].y && this.y<(arraywin[i].y+(arraywin[i].sizeY))){
        console.log("collide win",arraywin[i].x,arraywin[i].y);
        mode=3;
      }
    }
  }
} 