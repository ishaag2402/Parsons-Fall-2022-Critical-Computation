//Consultations: Nikunj Bafna, Arushi Agarwal, Aparna Agarwal
//Audio: Music by Pritam, Lyrics by Sandeep Shrivastava, Vocals by KK, Cover by Angad Kukreja [https://www.youtube.com/watch?v=CzyMG36nNco]

//global variables
let gameSpeed = 1.25;
let gameOpacity = 0;
let playerSpeed = 4;
let gamePos = 300;
let mode = 0;
//assets
let Rosadetta;
let Intro;
let music;

function setup() {
  createCanvas(600, 400);
  Rosadetta = loadFont('assets/Rosadetta.otf');
  Intro = loadFont('assets/Intro.otf');
  music = createAudio('assets/music.mp3');
  textAlign(CENTER);
  playerX = width/2;
  playerY = height/2;
  player = new Player(playerX,playerY,30,playerSpeed,gameOpacity);
  for(let i=0;i<rectX.length;i++){
    rectangle[i] = new Rectangle(rectX[i],rectY[i],rectSizeX[i],rectSizeY[i],gameSpeed,gameOpacity);
  }
  for(let i=0;i<ellX.length;i++){
    ell[i] = new Ell(ellX[i],ellY[i],ellSizeX[i],ellSizeY[i],gameSpeed,gameOpacity);
  }
  for(let i=0;i<phoneX.length;i++){
    phone[i] = new Phone(phoneX[i],phoneY[i],phoneSizeX[i],phoneSizeY[i],gameSpeed,gameOpacity);
  }
  images = new Asset(gameSpeed);
}

function draw() {
  playMusic();
  switch(mode){
    case 0:
      gameIntro();
      break;
    case 1:
      gameStart();
      break;
    case 2:
      gamePlay();
      break;
    case 3:
      gameWin();
      break;
    case 4:
      gameLose();
      break;
    case 5:
      gameEndDay();
      break;
  }
  console.log(mode);
}

function keyPressed(){
  if(keyIsDown(32)){
    if(mode===0 || mode===1){
      mode++;
    }
    if(mode===3 || mode===4 || mode===5){
      window.location.reload();
    }
  }
}

function playMusic(){
  music.volume(0.5);
  music.play();
}

function gameIntro(){
  background(0);
  push();
  let textPos = 62;
  fill(255);
  textFont(Rosadetta);
  textSize(60);
  text("hey there!",width/2,textPos+75);
  textFont(Intro);
  textSize(25);
  text("Welcome to your day!",width/2,textPos+118);
  textSize(15);
  text("You want to talk to your friend halfway across the world in India,",width/2,textPos+150);
  text("but time differences and schedules make it near impossible.",width/2,textPos+170);
  text("Will you be able to find a common time to talk to your friend?",width/2,textPos+190);
  textSize(25);
  text("PUSH SPACEBAR TO FIND OUT.",width/2,textPos+225);
  pop();
}

function gameStart(){
  background(0);
  push();
  let textPos = 20;
  fill(255);
  textFont(Intro);
  textSize(15);
  text("To navigate through your day, use the up and down arrow keys.",width/2,textPos+150);
  text("Try to find a phone so you can call your friend.",width/2,textPos+170);
  text("Remember to avoid all other obstacles!",width/2,textPos+190);
  textSize(25);
  text("PUSH SPACEBAR TO BEGIN THE DAY.",width/2,textPos+225);
  pop();
}

function gamePlay(){
  background(255);
  for(let i=0;i<rectangle.length;i++){
    rectangle[i].display();
    rectangle[i].translate();
    rectangle[i].endGame();
  }
  for(let i=0;i<ell.length;i++){
    ell[i].display();
    ell[i].translate();
  }
  for(let i=0;i<phone.length;i++){
    phone[i].display();
    phone[i].translate();
  }
  images.display();
  images.translate();
  player.display();
  player.move();
  player.collision_rectangle(rectangle);
  player.collision_ellipse(ell);
  player.collisionWin(phone);
}

function gameWin(){
  background(0);
  push();
  let textPos = 45;
  fill(255);
  textFont(Rosadetta);
  textSize(60);
  text("yay!",width/2,textPos+110);
  textFont(Intro);
  textSize(15);
  text("You found a common time to call your friend and had a",width/2,textPos+150);
  text("wonderful conversation. Congratulations on maintaining",width/2,textPos+170);
  text("your intercontinental social life!",width/2,textPos+190);
  textSize(25);
  text("PUSH SPACEBAR TO TALK TO ANOTHER FRIEND.",width/2,textPos+225);
  pop();
}

function gameLose(){
  background(0);
  push();
  let textPos = 55;
  fill(255);
  textFont(Rosadetta);
  textSize(60);
  text("oops!",width/2,textPos+110);
  textFont(Intro);
  textSize(15);
  text("Looks like the time difference and schedules got the better of you today.",width/2,textPos+150);
  text("Better luck next time!",width/2,textPos+170);
  textSize(25);
  text("PUSH SPACEBAR TO TRY AGAIN TOMORROW.",width/2,textPos+205);
  pop();
}

function gameEndDay(){
  background(0);
  push();
  let textPos = 55;
  fill(255);
  textFont(Rosadetta);
  textSize(60);
  text("oops!",width/2,textPos+110);
  textFont(Intro);
  textSize(15);
  text("The day is over, but you could not find a time to talk to your friend.",width/2,textPos+150);
  text("Better luck next time!",width/2,textPos+170);
  textSize(25);
  text("PUSH SPACEBAR TO TRY AGAIN TOMORROW.",width/2,textPos+205);
  pop();
}