let houseX = [575,575,575,575,575,575,625,625,675,725,2800,2850,2800,2850,2800,2800,2800];
let houseY = [0,57.5,115,227.5,285,342.5,342.5,342.5,342.5,342.5,10,10,67.5,67.5,175,232.5,290];

let turnstilebegX = [700,700,700,950,950,950,950,1200,1200];
let turnstilebegY = [150,200,250,150,200,250,300,150,200];
let subwayseatbegX = [825,825,825,825,1075,1075,1075,1075];
let subwayseatbegY = [200,250,300,350,200,250,300,350];

let classchair1X_l = [1250,1250,1250,1300,1425,1425,1525];
let classchair1Y_l = [0,100,200,300,200,300,300];
let classchair1X_r = [1250,1250,1250,1425,1425,1475];
let classchair1Y_r = [50,150,300,150,250,300];

let classchair2X_l = [2000,2050,2000,2000,2050,2000,2150,2250,2175,2275,2275];
let classchair2Y_l = [50,100,150,250,300,350,0,0,50,50,225];
let classchair2X_r = [2000,2050,2000,2000,2050,2100,2200,2300,2225,2325,2225];
let classchair2Y_r = [100,150,200,300,350,0,0,0,50,50,225];

let turnstileendX = [2375,2425,2375,2500,2500,2600,2600,2700,2700];
let turnstileendY = [225,225,275,300,350,250,300,300,350];
let subwayseatendX = [2350,2400,2450,2500,2550,2600,2650,2700,2750,2325,2375,2425];
let subwayseatendY = [0,0,0,0,0,0,0,0,0,175,175,175];

let phoneX_l = [725,825,950,1050,1150,1525,1475,1525,2050,3125];
let phoneY_l = [0,0,0,0,0,150,200,250,250,125];
let phoneX_r = [675,775,875,1000,1100,1475,1525,1475,2050,3075];
let phoneY_r = [0,0,0,0,0,150,200,250,200,100];

let gifplayer;

function preload(){
  imgphoneLeft = loadImage("assets/phone-l.png"); 
  imgphoneRight = loadImage("assets/phone-r.png"); 
  imgbed = loadImage("assets/bed.png"); 
  imgshower = loadImage("assets/shower.png"); 
  imgtoothbrush = loadImage("assets/toothbrush.png"); 
  imgclasschairLeft = loadImage("assets/class-chair-l.png"); 
  imgclasschairRight = loadImage("assets/class-chair-r.png"); 
  imgclassscreen = loadImage("assets/class-screen.png"); 
  imghouse = loadImage("assets/house.png"); 
  imgkitchenlarge = loadImage("assets/kitchen-large.png"); 
  imgkitchensmall = loadImage("assets/kitchen-small.png"); 
  imgsubway2 = loadImage("assets/subway2.png"); 
  imgsubway3 = loadImage("assets/subway3.png"); 
  imgsubway4 = loadImage("assets/subway4.png"); 
  imgsubwayseat = loadImage("assets/subway-seat-2.png"); 
  imgturnstile = loadImage("assets/subway-turnstile.png");
  imglamp2 = loadImage("assets/lamp2.png"); 
  imglamp3 = loadImage("assets/lamp3.png"); 
  imgcolumn = loadImage("assets/column.png");
  imgtable2 = loadImage("assets/table2.png");
  imgtable4 = loadImage("assets/table4.png");
  imgtable7 = loadImage("assets/table7.png");
  imgtable9 = loadImage("assets/table9.png");
  imgdesk = loadImage("assets/desk.png");
  imgdinner = loadImage("assets/dinner.png");
  imglaptop = loadImage("assets/laptop.png");
  gifplayer = loadImage("assets/playerfinal.gif");
}

class Asset{
    constructor(imgMove){
      this.x = 0;
      this.y = 0;
      this.velocity = imgMove;
    }
    display(){  
      push();
      scale(0.25);
      //home beginning
      image(imgbed,(this.x+250)*4,(this.y+225)*4);
      image(imgbed,(this.x+3075)*4,(this.y+275)*4);
      image(imgshower,(this.x+425)*4,(this.y+150)*4);
      image(imgtoothbrush,(this.x+350)*4,(this.y+25)*4);
      image(imgtoothbrush,(this.x+525)*4,(this.y+325)*4);
      image(imgkitchenlarge,(this.x+400)*4,(this.y+25)*4);
      image(imgkitchenlarge,(this.x+350)*4,(this.y+325)*4);
      //all houses
      for (let i=0;i<houseX.length;i++){
        image(imghouse,(this.x+houseX[i])*4,(this.y+houseY[i])*4);
      }
      //subway beginning
      image(imgsubway4,(this.x+650)*4,(this.y+75)*4);
      for (let i=0;i<turnstilebegX.length;i++){
        image(imgturnstile,(this.x+turnstilebegX[i])*4,(this.y+turnstilebegY[i])*4);
      }
      for (let i=0;i<subwayseatbegX.length;i++){
        image(imgsubwayseat,(this.x+subwayseatbegX[i])*4,(this.y+subwayseatbegY[i])*4);
      }
      //class 1
      for (let i=0;i<classchair1X_l.length;i++){
        image(imgclasschairLeft,(this.x+classchair1X_l[i])*4,(this.y+classchair1Y_l[i]*4));  
      }
      for (let i=0;i<classchair1X_r.length;i++){
        image(imgclasschairRight,(this.x+classchair1X_r[i])*4,(this.y+classchair1Y_r[i]*4));  
      }
      image(imgclassscreen,(this.x+1425)*4,(this.y+50)*4);
      //d12
      image(imgtable7,(this.x+1600)*4,(this.y+0)*4);
      image(imgtable2,(this.x+1575)*4,(this.y+100)*4);
      image(imgtable4,(this.x+1675)*4,(this.y+100)*4);
      image(imgtable4,(this.x+1575)*4,(this.y+200)*4);
      image(imgtable2,(this.x+1725)*4,(this.y+200)*4);
      image(imgcolumn,(this.x+1775)*4,(this.y+0)*4);
      image(imgcolumn,(this.x+1925)*4,(this.y+150)*4);
      image(imglamp3,(this.x+1575)*4,(this.y+250)*4);
      image(imglamp2,(this.x+1750)*4,(this.y+250)*4);
      //class 2
      for (let i=0;i<classchair2X_l.length;i++){
        image(imgclasschairLeft,(this.x+classchair2X_l[i])*4,(this.y+classchair2Y_l[i]*4));  
      }
      for (let i=0;i<classchair2X_r.length;i++){
        image(imgclasschairRight,(this.x+classchair2X_r[i])*4,(this.y+classchair2Y_r[i]*4));  
      }
      image(imgclassscreen,(this.x+2200)*4,(this.y+125)*4);
      image(imgtable9,(this.x+2100)*4,(this.y+325)*4);
      //subway end
      image(imgsubway3,(this.x+2375)*4,(this.y+50)*4);
      image(imgsubway2,(this.x+2525)*4,(this.y+175)*4);
      for (let i=0;i<turnstileendX.length;i++){
        image(imgturnstile,(this.x+turnstileendX[i])*4,(this.y+turnstileendY[i])*4);
      }
      for (let i=0;i<subwayseatendX.length;i++){
        image(imgsubwayseat,(this.x+subwayseatendX[i])*4,(this.y+subwayseatendY[i])*4);
      }
      //home end
      image(imgkitchensmall,(this.x+2975)*4,(this.y+50)*4);
      image(imgkitchensmall,(this.x+2975)*4,(this.y+350)*4);
      image(imgdesk,(this.x+2975)*4,(this.y+100)*4);
      image(imgdinner,(this.x+2925)*4,(this.y+175)*4);
      image(imgdinner,(this.x+3025)*4,(this.y+175)*4);
      image(imglaptop,(this.x+2925)*4,(this.y+300)*4);
      //phone
      for (let i=0;i<phoneX_l.length;i++){
        image(imgphoneLeft,(this.x+phoneX_l[i])*4,(this.y+phoneY_l[i]*4));  
      }
      for (let i=0;i<phoneX_r.length;i++){
        image(imgphoneRight,(this.x+phoneX_r[i])*4,(this.y+phoneY_r[i]*4));  
      }
      pop();
    }
    translate(){
      this.x-=this.velocity;
    }
} 