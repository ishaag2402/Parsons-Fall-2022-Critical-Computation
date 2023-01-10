//objects
let player;
let playerX;
let playerY;

let phone = [];
let phoneX = [gamePos+375,gamePos+1175,gamePos+1750,gamePos+2775];
let phoneY = [0,150,200,100];
let phoneSizeX = [525,100,50,100];
let phoneSizeY = [50,150,100,75];

let rectangle = [];
let rectX = [
  /*home*/ gamePos-50,gamePos+50,gamePos+125,gamePos+50,
  /*subway*/ gamePos+275,gamePos+275,gamePos+350,gamePos+475,gamePos+500,gamePos+625,gamePos+650,gamePos+775,gamePos+800,gamePos+325,
  /*class1*/ gamePos+1125,
  /*D12*/ gamePos+1300,gamePos+1275,gamePos+1375,gamePos+1275,gamePos+1425,gamePos+1475,gamePos+1625,
  /*class2*/ gamePos+1900,gamePos+1800,
  /*subway*/ gamePos+2075,gamePos+2200,gamePos+2225,gamePos+2350,gamePos+2375,gamePos+2225,gamePos+2350,gamePos+2375,
  /*home*/ gamePos+2500,gamePos+2500,gamePos+2675,gamePos+2675,gamePos+2625,gamePos+2625,gamePos+2675,gamePos+2775,
];
let rectY = [
  /*home*/ 225,25,150,325,
  /*subway*/ 0,227.5,75,120,75,120,75,120,75,342.5,
  /*class1*/ 50,
  /*D12*/ 0,100,100,200,200,0,150,
  /*class2*/ 125,325,
  /*subway*/ 50,95,50,95,50,175,220,175,
  /*home*/ 0,175,59,100,175,300,350,275,
];
let rectSizeX = [
  /*home*/ 100,225,75,225,
  /*subway*/ 50,50,125,25,125,25,125,25,125,150,
  /*class1*/ 125,
  /*D12*/ 175,50,100,100,50,75,75,
  /*class2*/ 125,225,
  /*subway*/ 125,25,125,25,125,125,25,125,
  /*home*/ 100,50,125,100,200,75,125,100,
];
let rectSizeY = [
  /*home*/ 75,50,100,50,
  /*subway*/ 172.5,172.5,75,10,75,10,75,10,75,57.5,
  /*class1*/ 100,
  /*D12*/ 50,50,50,50,50,250,250,
  /*class2*/ 100,50,
  /*subway*/ 75,10,75,10,75,75,10,75,
  /*home*/ 125,172.5,50,75,50,50,50,75,
];

let ell = [];
let ellX = [
  /*subway*/ gamePos+425,gamePos+425,gamePos+425, gamePos+425,gamePos+425,gamePos+425,gamePos+550,gamePos+550,gamePos+550,gamePos+550,gamePos+675,gamePos+675,gamePos+675,gamePos+675,gamePos+800,gamePos+800,gamePos+800,gamePos+800,gamePos+925,gamePos+925,
  /*class1*/ gamePos+975,gamePos+975,gamePos+975,gamePos+975,gamePos+975,gamePos+975,gamePos+1025,gamePos+1150,gamePos+1150,gamePos+1150,gamePos+1150,gamePos+1200,gamePos+1250,
  /*D12*/ gamePos+1312.5,gamePos+1312.5,gamePos+1312.5,gamePos+1475,gamePos+1475,
  /*class2*/ gamePos+1725,gamePos+1725,gamePos+1725,gamePos+1725,gamePos+1725,gamePos+1725,gamePos+1725,gamePos+1775,gamePos+1775,gamePos+1775,gamePos+1775,gamePos+1825,gamePos+1875,gamePos+1925,gamePos+1975,gamePos+2025,gamePos+1900,gamePos+1950,gamePos+2000,gamePos+2050,gamePos+1950,gamePos+2000,
  /*subway*/ gamePos+2075,gamePos+2125,gamePos+2175,gamePos+2225,gamePos+2275,gamePos+2325,gamePos+2375,gamePos+2425,gamePos+2475,gamePos+2050,gamePos+2100,gamePos+2100,gamePos+2100,gamePos+2150,gamePos+2150,gamePos+2225,gamePos+2225,gamePos+2325,gamePos+2325,gamePos+2425,gamePos+2425,
];
let ellY = [
  /*subway*/ 175,225,275,175,225,275,225,275,325,375,175,225,275,325,225,275,325,375,175,225,
  /*class1*/ 25,75,125,175,225,325,325,175,225,275,325,325,325,
  /*D12*/ 287.5,350,387.5,275,312.5,
  /*class2*/ 75,125,175,225,275,325,375,125,175,327,375,25,25,25,25,25,75,75,75,75,250,250,
  /*subway*/ 25,25,25,25,25,25,25,25,25,200,200,250,300,200,250,327,375,275,325,325,375,
];
let ellSizeX = [
  /*subway*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,
  /*class1*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,
  /*D12*/ 75,50,25,50,25,
  /*class2*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,
  /*subway*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,
];
let ellSizeY = [
  /*subway*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,
  /*class1*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,
  /*D12*/ 75,50,25,50,25,
  /*class2*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,
  /*subway*/ 50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,
];

let images;