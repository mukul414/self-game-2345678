
var pacMan;
var ghost1,ghost2,ghost3,ghost4;
var wall;
var coin;
var bullet,bullet2,bullet3,bullet4;
var canvas;
var maze;
var coin=0;
function preload(){
  //mazeImage=loadImage("sprites/maze.png");
ghost1Image=loadImage("sprites/red.gif")
ghost2Image=loadImage("sprites/pink.png")
ghost3Image=loadImage("sprites/blue ghost.png")
ghost4Image=loadImage("sprites/yellow.png")
//wall2Image=loadImage("sprites/wall2.jpeg")
pacManImage=loadImage("sprites/pacMan1.png")
pacMan2Image=loadImage("sprites/pacManR.png")
pacMan3Image=loadImage("sprites/pacManup.png")
pacMan4Image=loadImage("sprites/pacManD.png")
pacMan5Image=loadImage("sprites/pacMan2.png")
//cherryImage=loadImage("sprites/cherry.png")
}

function setup(){
  canvas=createCanvas(displayWidth-20,displayHeight-30)
  pacMan=createSprite(470,450,30,30);
  ghost1=createSprite(450,230,30,30);
  ghost2=createSprite(400,230,30,30);
  ghost3=createSprite(500,230,30,30);
  ghost4=createSprite(550,230,30,30);
  wall=createSprite(0,250,10,500);
  wall2=createSprite(505,498,1019,10);
  wall3=createSprite(1010,250,10,500);
  wall4=createSprite(507,5,1015,10);
  wall5=createSprite(700,60,10,120);
 //maze=createSprite(500,200,50,50);
  wall6=createSprite(250,60,10,120);
  wall7=createSprite(250,434,10,120);
  wall8=createSprite(700,434,10,120);
  wall9=createSprite(475,400,205,10);
  wall10=createSprite(475,100,205,10);
  wall11=createSprite(720,200,50,10);
  wall12=createSprite(228,200,50,10);
  wall13=createSprite(720,280,50,10);
  wall14=createSprite(228,280,50,10);
  wall15=createSprite(900,150,10,100);
  wall16=createSprite(880,100,50,10);
  wall17=createSprite(880,380,50,10);
  wall18=createSprite(900,330,10,100);
  wall19=createSprite(100,320,10,100);
  wall20=createSprite(100,140,10,100);
  wall21=createSprite(120,95,50,10);
  wall22=createSprite(120,375,50,10);
  wall23=createSprite(530,180,150,10);
  wall24=createSprite(600,230,10,110);
  wall25=createSprite(420,280,150,10);
  wall26=createSprite(350,227,10,110);
  //maze.addImage(mazeImage);
  image(ghost1Image,450,230,30,30);
  ghost1.addImage(ghost1Image);
  ghost2.addImage(ghost2Image);
  ghost3.addImage(ghost3Image);
  ghost4.addImage(ghost4Image);
  pacMan.addImage(pacManImage);
  ghost1.scale=0.1;
  ghost2.scale=0.2;
  ghost3.scale=0.2;
  ghost4.scale=0.1;
  pacMan.scale=0.3;
  wall.shapeColor="blue"
  wall2.shapeColor="blue"
  wall3.shapeColor="blue"
  wall4.shapeColor="blue"
  wall5.shapeColor="blue"
  wall6.shapeColor="blue"
  wall7.shapeColor="blue"
  wall8.shapeColor="blue"
  wall9.shapeColor="blue"
  wall10.shapeColor="blue"
  wall11.shapeColor="blue"
  wall12.shapeColor="blue"
  wall13.shapeColor="blue"
  wall14.shapeColor="blue"
  wall15.shapeColor="blue"
  wall16.shapeColor="blue"
  wall17.shapeColor="blue"
  wall18.shapeColor="blue"
  wall19.shapeColor="blue"
  wall20.shapeColor="blue"
  wall21.shapeColor="blue"
  wall22.shapeColor="blue"
  wall23.shapeColor="blue"
  wall24.shapeColor="blue"
  wall25.shapeColor="blue"
  wall26.shapeColor="blue"

//
  var bullet = createSprite(955,395,20,20);
      bullet.rotation=45;
      bullet.shapeColor="red";

      var bullet2 = createSprite(955,95,20,20);
bullet2.rotation=45;
bullet2.shapeColor="red";
var bullet3 = createSprite(55,395,20,20);
bullet3.rotation=45;
bullet3.shapeColor="red";
var bullet4 = createSprite(55,80,20,20);
bullet4.rotation=45;
bullet4.shapeColor="red";
//

  coin1=createSprite(440,450,10,10);
  coin2=createSprite(420,450,10,10);
coin3=createSprite(400,450,10,10);
coin4=createSprite(380,450,10,10);
coin5=createSprite(360,450,10,10);
coin6=createSprite(340,450,10,10);
coin7=createSprite(320,450,10,10);
coin8=createSprite(300,450,10,10);
coin9=createSprite(300,430,10,10);
coin10=createSprite(300,410,10,10);
coin11=createSprite(300,390,10,10);
coin12=createSprite(300,370,10,10);
coin13=createSprite(300,350,10,10);
coin14=createSprite(300,330,10,10);
coin15=createSprite(300,310,10,10);
coin16=createSprite(300,290,10,10);
coin17=createSprite(300,270,10,10);
coin18=createSprite(300,250,10,10);
coin19=createSprite(300,230,10,10);
coin20=createSprite(300,210,10,10);
coin21=createSprite(300,190,10,10);
coin22=createSprite(300,170,10,10);
coin23=createSprite(300,150,10,10);
coin24=createSprite(300,130,10,10);
coin25=createSprite(300,110,10,10);
coin26=createSprite(300,90,10,10);
coin27=createSprite(300,70,10,10);
coin28=createSprite(300,50,10,10);
coin29=createSprite(320,50,10,10);
coin30=createSprite(340,50,10,10);
coin31=createSprite(360,50,10,10);
coin32=createSprite(380,50,10,10);
coin33=createSprite(400,50,10,10);
coin34=createSprite(420,50,10,10);
coin35=createSprite(440,50,10,10);
coin36=createSprite(460,50,10,10);
coin37=createSprite(480,50,10,10);
coin38=createSprite(500,50,10,10);
coin39=createSprite(520,50,10,10);
coin40=createSprite(540,50,10,10);
coin41=createSprite(510,450,10,10);
coin42=createSprite(530,450,10,10);
coin43=createSprite(550,450,10,10);
coin44=createSprite(570,450,10,10);
coin45=createSprite(590,450,10,10);
coin46=createSprite(610,450,10,10);
coin47=createSprite(630,450,10,10);
coin48=createSprite(650,450,10,10);
coin49=createSprite(650,430,10,10);
coin50=createSprite(650,410,10,10);
coin51=createSprite(650,390,10,10);
coin52=createSprite(650,370,10,10);
coin53=createSprite(650,350,10,10);
coin54=createSprite(650,330,10,10);
coin55=createSprite(650,310,10,10);
coin56=createSprite(650,290,10,10);
coin57=createSprite(650,270,10,10);
coin58=createSprite(650,250,10,10);
coin59=createSprite(650,230,10,10);
coin60=createSprite(650,210,10,10);
coin61=createSprite(650,190,10,10);
coin62=createSprite(650,170,10,10);
coin63=createSprite(650,150,10,10);
coin64=createSprite(650,130,10,10);
coin65=createSprite(650,110,10,10);
coin66=createSprite(650,90,10,10);
coin67=createSprite(650,70,10,10);
coin68=createSprite(650,50,10,10);
coin69=createSprite(630,50,10,10);
coin70=createSprite(610,50,10,10);
coin71=createSprite(590,50,10,10);
coin73=createSprite(570,50,10,10);
coin74=createSprite(555,50,10,10);
coin76=createSprite(720,50,10,10);
coin77=createSprite(720,70,10,10);
coin78=createSprite(720,90,10,10);
coin79=createSprite(720,110,10,10);
coin80=createSprite(720,130,10,10);
coin81=createSprite(995,110,10,10);
coin82=createSprite(720,170,10,10);
coin83=createSprite(700,170,10,10);
coin84=createSprite(680,170,10,10);
coin85=createSprite(740,170,10,10);
coin86=createSprite(760,170,10,10);
coin88=createSprite(720,30,10,10);
coin89=createSprite(780,170,10,10);
coin90=createSprite(800,170,10,10);
coin91=createSprite(820,170,10,10);
coin92=createSprite(840,170,10,10);
coin93=createSprite(860,170,10,10);
coin94=createSprite(880,170,10,10);
coin95=createSprite(880,150,10,10);
coin96=createSprite(880,130,10,10);
coin97=createSprite(860,130,10,10);
coin98=createSprite(840,130,10,10);
coin99=createSprite(820,130,10,10);
coin100=createSprite(800,130,10,10);
coin101=createSprite(780,130,10,10);
coin102=createSprite(760,130,10,10);
coin103=createSprite(740,130,10,10);
coin104=createSprite(760,30,10,10);
coin105=createSprite(780,30,10,10);
coin106=createSprite(800,30,10,10);
coin107=createSprite(820,30,10,10);
coin108=createSprite(840,30,10,10);
coin109=createSprite(860,30,10,10);
coin110=createSprite(880,30,10,10);
coin111=createSprite(900,30,10,10);
coin112=createSprite(920,30,10,10);
coin113=createSprite(940,30,10,10);
coin114=createSprite(960,30,10,10);
coin115=createSprite(980,30,10,10);
coin116=createSprite(995,30,10,10);
coin117=createSprite(740,30,10,10);
coin118=createSprite(995,50,10,10);
coin119=createSprite(995,70,10,10);
coin120=createSprite(995,90,10,10);
coin121=createSprite(700,130,10,10);
coin122=createSprite(680,130,10,10);
coin123=createSprite(995,110,10,10);
coin124=createSprite(995,130,10,10);
coin125=createSprite(995,150,10,10);
coin126=createSprite(995,170,10,10);
coin127=createSprite(995,190,10,10);
coin128=createSprite(995,210,10,10);
coin129=createSprite(995,230,10,10);
coin130=createSprite(995,250,10,10);
coin131=createSprite(995,270,10,10);
coin132=createSprite(995,290,10,10);
coin133=createSprite(995,310,10,10);
coin134=createSprite(995,330,10,10);
coin135=createSprite(995,350,10,10);
coin136=createSprite(995,370,10,10);
coin137=createSprite(995,390,10,10);
coin138=createSprite(995,410,10,10);
coin139=createSprite(995,430,10,10);
coin140=createSprite(995,450,10,10);
coin141=createSprite(995,470,10,10);
coin142=createSprite(975,470,10,10);
coin143=createSprite(955,470,10,10);
coin144=createSprite(935,470,10,10);
coin145=createSprite(915,470,10,10);
coin146=createSprite(895,470,10,10);
coin147=createSprite(875,470,10,10);
coin148=createSprite(855,470,10,10);
coin149=createSprite(835,470,10,10);
coin150=createSprite(815,470,10,10);
coin151=createSprite(795,470,10,10);
coin152=createSprite(775,470,10,10);
coin153=createSprite(755,470,10,10);
coin154=createSprite(735,470,10,10);
coin155=createSprite(735,450,10,10);
coin156=createSprite(735,430,10,10);
coin157=createSprite(735,410,10,10);
coin158=createSprite(735,390,10,10);
coin159=createSprite(675,350,10,10);
coin160=createSprite(675,310,10,10);
coin161=createSprite(695,310,10,10);
coin162=createSprite(715,310,10,10);
coin163=createSprite(735,310,10,10);
coin164=createSprite(755,310,10,10);
coin165=createSprite(775,310,10,10);
coin166=createSprite(795,310,10,10);
coin167=createSprite(815,310,10,10);
coin168=createSprite(835,310,10,10);
coin169=createSprite(855,310,10,10);
coin170=createSprite(875,310,10,10);
coin171=createSprite(875,330,10,10);
coin172=createSprite(875,350,10,10);
coin173=createSprite(855,350,10,10);
coin174=createSprite(835,350,10,10);
coin175=createSprite(815,350,10,10);
coin176=createSprite(795,350,10,10);
coin177=createSprite(775,350,10,10);
coin178=createSprite(755,350,10,10);
coin179=createSprite(675,240,10,10);
coin181=createSprite(695,240,10,10);
coin182=createSprite(715,240,10,10);
coin183=createSprite(735,240,10,10);
coin184=createSprite(755,240,10,10);
coin185=createSprite(775,240,10,10);
coin186=createSprite(795,240,10,10);
coin187=createSprite(815,240,10,10);
coin188=createSprite(835,240,10,10);
coin189=createSprite(855,240,10,10);
coin190=createSprite(875,240,10,10);
coin191=createSprite(895,240,10,10);
coin192=createSprite(915,240,10,10);
coin193=createSprite(935,240,10,10);
coin194=createSprite(955,240,10,10);
coin195=createSprite(955,260,10,10);
coin196=createSprite(955,280,10,10);
coin197=createSprite(955,300,10,10);
coin198=createSprite(955,320,10,10);
coin199=createSprite(955,340,10,10);
coin200=createSprite(955,360,10,10);
coin201=createSprite(955,220,10,10);
coin202=createSprite(955,200,10,10);
coin203=createSprite(955,180,10,10);
coin204=createSprite(955,160,10,10);
coin205=createSprite(955,140,10,10);
coin206=createSprite(955,120,10,10);
coin207=createSprite(735,370,10,10);
coin208=createSprite(735,350,10,10);
coin209=createSprite(715,350,10,10);
coin210=createSprite(695,350,10,10);
coin211=createSprite(55,360,10,10);
coin212=createSprite(55,340,10,10);
coin213=createSprite(55,320,10,10);
coin214=createSprite(55,300,10,10);
coin215=createSprite(55,280,10,10);
coin216=createSprite(55,260,10,10);
coin217=createSprite(55,240,10,10);
coin218=createSprite(75,240,10,10);
coin219=createSprite(95,240,10,10);
coin220=createSprite(115,240,10,10);
coin221=createSprite(135,240,10,10);
coin222=createSprite(155,240,10,10);
coin223=createSprite(175,240,10,10);
coin224=createSprite(195,240,10,10);
coin225=createSprite(215,240,10,10);
coin226=createSprite(235,240,10,10);
coin227=createSprite(255,240,10,10);
coin228=createSprite(275,240,10,10);
coin229=createSprite(55,220,10,10);
coin230=createSprite(55,200,10,10);
coin231=createSprite(55,180,10,10);
coin232=createSprite(55,160,10,10);
coin233=createSprite(55,140,10,10);
coin234=createSprite(55,120,10,10);
coin235=createSprite(275,130,10,10);
coin236=createSprite(255,130,10,10);
coin237=createSprite(235,130,10,10);
coin238=createSprite(215,130,10,10);
coin239=createSprite(195,130,10,10);
coin240=createSprite(175,130,10,10);
coin241=createSprite(155,130,10,10);
coin242=createSprite(135,130,10,10);
coin243=createSprite(115,130,10,10);
coin244=createSprite(275,170,10,10);
coin245=createSprite(255,170,10,10);
coin246=createSprite(235,170,10,10);
coin247=createSprite(215,170,10,10);
coin248=createSprite(195,170,10,10);
coin249=createSprite(175,170,10,10);
coin250=createSprite(155,170,10,10);
coin251=createSprite(135,170,10,10);
coin252=createSprite(115,170,10,10);
coin253=createSprite(115,150,10,10);
coin254=createSprite(235,110,10,10);
coin255=createSprite(235,90,10,10);
coin256=createSprite(235,70,10,10);
coin1.shapeColor="orange"
coin2.shapeColor="orange"
coin3.shapeColor="orange"
coin4.shapeColor="orange"
coin5.shapeColor="orange"
coin6.shapeColor="orange"
coin7.shapeColor="orange"
coin8.shapeColor="orange"
coin9.shapeColor="orange"
coin10.shapeColor="orange"
coin11.shapeColor="orange"
coin12.shapeColor="orange"
coin13.shapeColor="orange"
coin14.shapeColor="orange"
coin15.shapeColor="orange"
coin16.shapeColor="orange"
coin17.shapeColor="orange"
coin18.shapeColor="orange"
coin19.shapeColor="orange"
coin20.shapeColor="orange"
coin21.shapeColor="orange"
coin22.shapeColor="orange"
coin23.shapeColor="orange"
coin24.shapeColor="orange"
coin25.shapeColor="orange"
coin26.shapeColor="orange"
coin27.shapeColor="orange"
coin28.shapeColor="orange"
coin29.shapeColor="orange"
coin30.shapeColor="orange"
coin31.shapeColor="orange"
coin32.shapeColor="orange"
coin33.shapeColor="orange"
coin34.shapeColor="orange"
coin35.shapeColor="orange"
coin36.shapeColor="orange"
coin37.shapeColor="orange"
coin38.shapeColor="orange"
coin39.shapeColor="orange"
coin40.shapeColor="orange"
coin41.shapeColor="orange"
coin42.shapeColor="orange"
coin43.shapeColor="orange"
coin44.shapeColor="orange"
coin45.shapeColor="orange"
coin46.shapeColor="orange"
coin47.shapeColor="orange"
coin48.shapeColor="orange"
coin49.shapeColor="orange"
coin50.shapeColor="orange"
coin51.shapeColor="orange"
coin52.shapeColor="orange"
coin53.shapeColor="orange"
coin54.shapeColor="orange"
coin55.shapeColor="orange"
coin56.shapeColor="orange"
coin57.shapeColor="orange"
coin58.shapeColor="orange"
coin59.shapeColor="orange"
coin60.shapeColor="orange"
coin61.shapeColor="orange"
coin62.shapeColor="orange"
coin63.shapeColor="orange"
coin64.shapeColor="orange"
coin65.shapeColor="orange"
coin66.shapeColor="orange"
coin67.shapeColor="orange"
coin68.shapeColor="orange"
coin69.shapeColor="orange"
coin70.shapeColor="orange"
coin71.shapeColor="orange"
coin73.shapeColor="orange"
coin74.shapeColor="orange"
coin76.shapeColor="orange"
coin77.shapeColor="orange"
coin78.shapeColor="orange"
coin79.shapeColor="orange"
coin80.shapeColor="orange"
coin81.shapeColor="orange"
coin82.shapeColor="orange"
coin83.shapeColor="orange"
coin84.shapeColor="orange"
coin85.shapeColor="orange"
coin86.shapeColor="orange"
coin88.shapeColor="orange"
coin89.shapeColor="orange"
coin90.shapeColor="orange"
coin91.shapeColor="orange"
coin92.shapeColor="orange"
coin93.shapeColor="orange"
coin94.shapeColor="orange"
coin95.shapeColor="orange"
coin96.shapeColor="orange"
coin97.shapeColor="orange"
coin98.shapeColor="orange"
coin99.shapeColor="orange"
coin100.shapeColor="orange"
coin101.shapeColor="orange"
coin102.shapeColor="orange"
coin103.shapeColor="orange"
coin104.shapeColor="orange"
coin105.shapeColor="orange"
coin106.shapeColor="orange"
coin107.shapeColor="orange"
coin108.shapeColor="orange"
coin109.shapeColor="orange"
coin110.shapeColor="orange"
coin111.shapeColor="orange"
coin112.shapeColor="orange"
coin113.shapeColor="orange"
coin114.shapeColor="orange"
coin115.shapeColor="orange"
coin116.shapeColor="orange"
coin117.shapeColor="orange"
coin118.shapeColor="orange"
coin119.shapeColor="orange"
coin120.shapeColor="orange"
coin121.shapeColor="orange"
coin122.shapeColor="orange"
coin123.shapeColor="orange"
coin124.shapeColor="orange"
coin125.shapeColor="orange"
coin126.shapeColor="orange"
coin127.shapeColor="orange"
coin128.shapeColor="orange"
coin129.shapeColor="orange"
coin130.shapeColor="orange"
coin131.shapeColor="orange"
coin132.shapeColor="orange"
coin133.shapeColor="orange"
coin134.shapeColor="orange"
coin135.shapeColor="orange"
coin136.shapeColor="orange"
coin137.shapeColor="orange"
coin138.shapeColor="orange"
coin139.shapeColor="orange"
coin140.shapeColor="orange"
coin141.shapeColor="orange"
coin142.shapeColor="orange"
coin143.shapeColor="orange"
coin144.shapeColor="orange"
coin145.shapeColor="orange"
coin146.shapeColor="orange"
coin147.shapeColor="orange"
coin148.shapeColor="orange"
coin149.shapeColor="orange"
coin150.shapeColor="orange"
coin151.shapeColor="orange"
coin152.shapeColor="orange"
coin153.shapeColor="orange"
coin154.shapeColor="orange"
coin155.shapeColor="orange"
coin156.shapeColor="orange"
coin157.shapeColor="orange"
coin158.shapeColor="orange"
coin159.shapeColor="orange"
coin160.shapeColor="orange"
coin161.shapeColor="orange"
coin162.shapeColor="orange"
coin163.shapeColor="orange"
coin164.shapeColor="orange"
coin165.shapeColor="orange"
coin166.shapeColor="orange"
coin167.shapeColor="orange"
coin168.shapeColor="orange"
coin169.shapeColor="orange"
coin170.shapeColor="orange"
coin171.shapeColor="orange"
coin172.shapeColor="orange"
coin173.shapeColor="orange"
coin174.shapeColor="orange"
coin175.shapeColor="orange"
coin176.shapeColor="orange"
coin177.shapeColor="orange"
coin178.shapeColor="orange"
coin179.shapeColor="orange"
coin181.shapeColor="orange"
coin182.shapeColor="orange"
coin183.shapeColor="orange"
coin184.shapeColor="orange"
coin185.shapeColor="orange"
coin186.shapeColor="orange"
coin187.shapeColor="orange"
coin188.shapeColor="orange"
coin189.shapeColor="orange"
coin190.shapeColor="orange"
coin191.shapeColor="orange"
coin192.shapeColor="orange"
coin193.shapeColor="orange"
coin194.shapeColor="orange"
coin195.shapeColor="orange"
coin196.shapeColor="orange"
coin197.shapeColor="orange"
coin198.shapeColor="orange"
coin199.shapeColor="orange"
coin200.shapeColor="orange"
coin201.shapeColor="orange"
coin202.shapeColor="orange"
coin203.shapeColor="orange"
coin204.shapeColor="orange"
coin205.shapeColor="orange"
coin206.shapeColor="orange"
coin207.shapeColor="orange"
coin208.shapeColor="orange"
coin209.shapeColor="orange"
coin210.shapeColor="orange"
coin211.shapeColor="orange"
coin212.shapeColor="orange"
coin213.shapeColor="orange"
coin214.shapeColor="orange"
coin215.shapeColor="orange"
coin216.shapeColor="orange"
coin217.shapeColor="orange"
coin218.shapeColor="orange"
coin219.shapeColor="orange"
coin220.shapeColor="orange"
coin221.shapeColor="orange"
coin222.shapeColor="orange"
coin223.shapeColor="orange"
coin224.shapeColor="orange"
coin225.shapeColor="orange"
coin226.shapeColor="orange"
coin227.shapeColor="orange"
coin228.shapeColor="orange"
coin229.shapeColor="orange"
coin230.shapeColor="orange"
coin231.shapeColor="orange"
coin232.shapeColor="orange"
coin233.shapeColor="orange"
coin234.shapeColor="orange"
coin233.shapeColor="orange"
coin234.shapeColor="orange"
coin235.shapeColor="orange"
coin236.shapeColor="orange"
coin237.shapeColor="orange"
coin238.shapeColor="orange"
coin239.shapeColor="orange"
coin240.shapeColor="orange"
coin241.shapeColor="orange"
coin242.shapeColor="orange"
coin243.shapeColor="orange"
coin244.shapeColor="orange"
coin245.shapeColor="orange"
coin246.shapeColor="orange"
coin247.shapeColor="orange"
coin248.shapeColor="orange"
coin249.shapeColor="orange"
coin250.shapeColor="orange"
coin251.shapeColor="orange"
coin252.shapeColor="orange"
coin253.shapeColor="orange"
coin254.shapeColor="orange"
coin255.shapeColor="orange"
coin256.shapeColor="orange"
}


function draw(){
  
  
  spriteCollide();
  translate(210,175)
  coinScore();
  background("black")
  noStroke();
  textSize(35)
  fill("white")
  text("Coin Gain "  + coin, width-450, 50)
  drawSprites();
  if (keyDown("right")) {
    pacMan.x = pacMan.x + 5
    pacMan.addImage(pacMan2Image)
  }
  else if ((keyDown("left"))) {
    pacMan.x = pacMan.x - 5
    pacMan.addImage(pacManImage);
  }
  else if (keyDown("up")) {
    pacMan.y = pacMan.y - 5
    pacMan.addImage(pacMan3Image)
  }
  else if (keyDown("down")) {
    pacMan.y = pacMan.y + 5
    pacMan.addImage(pacMan4Image)
  }
  
}
function Ghost(){
  
}
function spriteCollide() {
  pacMan.collide(wall);
  pacMan.collide(wall2);
  pacMan.collide(wall3);
  pacMan.collide(wall4);
  pacMan.collide(wall5);
  pacMan.collide(wall6);
  pacMan.collide(wall7);
  pacMan.collide(wall8);
  pacMan.collide(wall9);
  pacMan.collide(wall10);
  pacMan.collide(wall11);
  pacMan.collide(wall12);
  pacMan.collide(wall13);
  pacMan.collide(wall14);
  pacMan.collide(wall15);
  pacMan.collide(wall16);
  pacMan.collide(wall17);
  pacMan.collide(wall18);
  pacMan.collide(wall19);
  pacMan.collide(wall20);
  pacMan.collide(wall21);
  pacMan.collide(wall22);
  pacMan.collide(wall23);
  pacMan.collide(wall24);
  pacMan.collide(wall25);
  pacMan.collide(wall26);
}
function coinScore() {
  if (pacMan.isTouching(coin1)) {
    coin1.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin1.x=600
    coin1.y=2000
  }
  if (pacMan.isTouching(coin2)) {
    coin2.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin2.x=600
    coin2.y=2000
  }
  if (pacMan.isTouching(coin3)) {
    coin3.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin3.x=600
    coin3.y=2000
  }
  if (pacMan.isTouching(coin4)) {
    coin4.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin4.x=600
    coin4.y=2000
  }
  if (pacMan.isTouching(coin5)) {
    coin1.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin5.x=600
    coin5.y=2000
  }
  if (pacMan.isTouching(coin5)) {
    coin5.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin5.x=600
    coin5.y=2000
  }
  if (pacMan.isTouching(coin6)) {
    coin6.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin6.x=600
    coin6.y=2000
  }
  if (pacMan.isTouching(coin7)) {
    coin7.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin7.x=600
    coin7.y=2000
  }
  if (pacMan.isTouching(coin8)) {
    coin8.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin8.x=600
    coin8.y=2000
  }
  if (pacMan.isTouching(coin9)) {
    coin9.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin9.x=600
    coin9.y=2000
  }
  if (pacMan.isTouching(coin10)) {
    coin10.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin10.x=600
    coin10.y=2000
  }
  if (pacMan.isTouching(coin11)) {
    coin11.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin11.x=600
    coin11.y=2000
  }
  if (pacMan.isTouching(coin12)) {
    coin12.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin12.x=600
    coin12.y=2000
  }
  if (pacMan.isTouching(coin13)) {
    coin13.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin13.x=600
    coin13.y=2000
  }
  if (pacMan.isTouching(coin14)) {
    coin14.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin14.x=600
    coin14.y=2000
  }
  if (pacMan.isTouching(coin15)) {
    coin1.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin15.x=600
    coin15.y=2000
  }
  if (pacMan.isTouching(coin16)) {
    coin16.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin16.x=600
    coin16.y=2000
  }
  if (pacMan.isTouching(coin17)) {
    coin17.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin17.x=600
    coin17.y=2000
  }
  if (pacMan.isTouching(coin18)) {
    coin18.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin18.x=600
    coin18.y=2000
  }
  if (pacMan.isTouching(coin19)) {
    coin19.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin19.x=600
    coin19.y=2000
  }
  if (pacMan.isTouching(coin20)) {
    coin20.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin20.x=600
    coin20.y=2000
  }
  if (pacMan.isTouching(coin21)) {
    coin21.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin21.x=600
    coin21.y=2000
  }
  if (pacMan.isTouching(coin22)) {
    coin22.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin22.x=600
    coin22.y=2000
  }
  if (pacMan.isTouching(coin23)) {
    coin23.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin23.x=600
    coin23.y=2000
  }
  if (pacMan.isTouching(coin24)) {
    coin24.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin24.x=600
    coin24.y=2000
  }
  if (pacMan.isTouching(coin25)) {
    coin25.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin25.x=600
    coin25.y=2000
  }
  if (pacMan.isTouching(coin26)) {
    coin26.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin26.x=600
    coin26.y=2000
  }
  if (pacMan.isTouching(coin27)) {
    coin27.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin27.x=600
    coin27.y=2000
  }
  if (pacMan.isTouching(coin28)) {
    coin28.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin28.x=600
    coin28.y=2000
  }
  if (pacMan.isTouching(coin29)) {
    coin29.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin29.x=600
    coin29.y=2000
  }
  if (pacMan.isTouching(coin30)) {
    coin30.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin30.x=600
    coin30.y=2000
  }
  if (pacMan.isTouching(coin31)) {
    coin31.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin31.x=600
    coin31.y=2000
  }
  if (pacMan.isTouching(coin32)) {
    coin32.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin32.x=600
    coin32.y=2000
  }
  if (pacMan.isTouching(coin33)) {
    coin33.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin33.x=600
    coin33.y=2000
  }
  if (pacMan.isTouching(coin34)) {
    coin34.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin34.x=600
    coin34.y=2000
  }
  if (pacMan.isTouching(coin35)) {
    coin35.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin35.x=600
    coin35.y=2000
  }
  if (pacMan.isTouching(coin36)) {
    coin36.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin36.x=600
    coin36.y=2000
  }
  if (pacMan.isTouching(coin37)) {
    coin37.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin37.x=600
    coin37.y=2000
  }
  if (pacMan.isTouching(coin38)) {
    coin38.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin38.x=600
    coin38.y=2000
  }
  if (pacMan.isTouching(coin39)) {
    coin39.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin39.x=600
    coin39.y=2000
  }
  if (pacMan.isTouching(coin40)) {
    coin40.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin40.x=600
    coin40.y=2000
  }
  if (pacMan.isTouching(coin41)) {
    coin41.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin41.x=600
    coin41.y=2000
  }
  if (pacMan.isTouching(coin42)) {
    coin42.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin42.x=600
    coin42.y=2000
  }
  if (pacMan.isTouching(coin43)) {
    coin43.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin43.x=600
    coin43.y=2000
  }
  if (pacMan.isTouching(coin44)) {
    coin44.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin44.x=600
    coin44.y=2000
  }
  if (pacMan.isTouching(coin45)) {
    coin45.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin45.x=600
    coin45.y=2000
  }
  if (pacMan.isTouching(coin46)) {
    coin46.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin46.x=600
    coin46.y=2000
  }
  if (pacMan.isTouching(coin47)) {
    coin47.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin47.x=600
    coin47.y=2000
  }
  if (pacMan.isTouching(coin48)) {
    coin48.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin48.x=600
    coin48.y=2000
  }
  if (pacMan.isTouching(coin49)) {
    coin49.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin49.x=600
    coin49.y=2000
  }
  if (pacMan.isTouching(coin50)) {
    coin50.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin50.x=600
    coin50.y=2000
  }
  if (pacMan.isTouching(coin51)) {
    coin51.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin51.x=600
    coin51.y=2000
  }
  if (pacMan.isTouching(coin52)) {
    coin52.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin52.x=600
    coin52.y=2000
  }
  if (pacMan.isTouching(coin53)) {
    coin53.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin53.x=600
    coin53.y=2000
  }
  if (pacMan.isTouching(coin54)) {
    coin54.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin54.x=600
    coin54.y=2000
  }
  if (pacMan.isTouching(coin55)) {
    coin55.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin55.x=600
    coin55.y=2000
  }
  if (pacMan.isTouching(coin56)) {
    coin56.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin56.x=600
    coin56.y=2000
  }
  if (pacMan.isTouching(coin57)) {
    coin57.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin57.x=600
    coin57.y=2000
  }
  if (pacMan.isTouching(coin58)) {
    coin58.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin58.x=600
    coin58.y=2000
  }
  if (pacMan.isTouching(coin59)) {
    coin59.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin59.x=600
    coin59.y=2000
  }
  if (pacMan.isTouching(coin60)) {
    coin60.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin60.x=600
    coin60.y=2000
  }
  if (pacMan.isTouching(coin61)) {
    coin61.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin61.x=600
    coin61.y=2000
  }
  if (pacMan.isTouching(coin62)) {
    coin62.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin62.x=600
    coin62.y=2000
  }
  if (pacMan.isTouching(coin63)) {
    coin63.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin63.x=600
    coin63.y=2000
  }
  if (pacMan.isTouching(coin64)) {
    coin64.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin64.x=600
    coin64.y=2000
  }
  if (pacMan.isTouching(coin65)) {
    coin65.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin65.x=600
    coin65.y=2000
  }
  if (pacMan.isTouching(coin66)) {
    coin66.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin66.x=600
    coin66.y=2000
  }
  if (pacMan.isTouching(coin67)) {
    coin67.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin67.x=600
    coin67.y=2000
  }
  if (pacMan.isTouching(coin68)) {
    coin68.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin68.x=600
    coin68.y=2000
  }
  if (pacMan.isTouching(coin69)) {
    coin69.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin69.x=600
    coin69.y=2000
  }
  if (pacMan.isTouching(coin70)) {
    coin70.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin70.x=600
    coin70.y=2000
  }
  if (pacMan.isTouching(coin71)) {
    coin71.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin71.x=600
    coin71.y=2000
  }
  
  if (pacMan.isTouching(coin73)) {
    coin73.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin73.x=600
    coin73.y=2000
  }
  if (pacMan.isTouching(coin74)) {
    coin74.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin74.x=600
    coin74.y=2000
  }
  
  if (pacMan.isTouching(coin76)) {
    coin76.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin76.x=600
    coin76.y=2000
  }
  if (pacMan.isTouching(coin77)) {
    coin77.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin77.x=600
    coin77.y=2000
  }
  if (pacMan.isTouching(coin78)) {
    coin78.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin78.x=600
    coin78.y=2000
  }
  if (pacMan.isTouching(coin79)) {
    coin79.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin79.x=600
    coin79.y=2000
  }
  if (pacMan.isTouching(coin80)) {
    coin80.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin80.x=600
    coin80.y=2000
  }
  if (pacMan.isTouching(coin81)) {
    coin81.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin81.x=600
    coin81.y=2000
  }
  if (pacMan.isTouching(coin82)) {
    coin82.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin82.x=600
    coin82.y=2000
  }
  if (pacMan.isTouching(coin83)) {
    coin83.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin83.x=600
    coin83.y=2000
  }
  if (pacMan.isTouching(coin84)) {
    coin84.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin84.x=600
    coin84.y=2000
  }
  if (pacMan.isTouching(coin85)) {
    coin85.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin85.x=600
    coin85.y=2000
  }
  if (pacMan.isTouching(coin86)) {
    coin86.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin86.x=600
    coin86.y=2000
  }
  
  if (pacMan.isTouching(coin88)) {
    coin88.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin88.x=600
    coin88.y=2000
  }
  if (pacMan.isTouching(coin89)) {
    coin89.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin89.x=600
    coin89.y=2000
  }
  if (pacMan.isTouching(coin90)) {
    coin90.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin90.x=600
    coin90.y=2000
  }
  if (pacMan.isTouching(coin91)) {
    coin91.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin91.x=600
    coin91.y=2000
  }
  if (pacMan.isTouching(coin93)) {
    coin93.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin93.x=600
    coin93.y=2000
  }
  if (pacMan.isTouching(coin92)) {
    coin92.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin92.x=600
    coin92.y=2000
  }
  if (pacMan.isTouching(coin53)) {
    coin93.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin93.x=600
    coin93.y=2000
  }
  if (pacMan.isTouching(coin94)) {
    coin94.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin94.x=600
    coin94.y=2000
  }
  if (pacMan.isTouching(coin95)) {
    coin95.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin95.x=600
    coin95.y=2000
  }
  if (pacMan.isTouching(coin96)) {
    coin96.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin96.x=600
    coin96.y=2000
  }
  if (pacMan.isTouching(coin97)) {
    coin97.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin97.x=600
    coin97.y=2000
  }
  if (pacMan.isTouching(coin98)) {
    coin98.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin98.x=600
    coin98.y=2000
  }
  if (pacMan.isTouching(coin99)) {
    coin99.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin99.x=600
    coin99.y=2000
  }
  if (pacMan.isTouching(coin100)) {
    coin100.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin100.x=600
    coin100.y=2000
  }
  if (pacMan.isTouching(coin101)) {
    coin101.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin101.x=600
    coin101.y=2000
  }
  if (pacMan.isTouching(coin102)) {
    coin102.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin102.x=600
    coin102.y=2000
  }
  if (pacMan.isTouching(coin103)) {
    coin103.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin103.x=600
    coin103.y=2000
  }
  if (pacMan.isTouching(coin104)) {
    coin104.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin104.x=600
    coin104.y=2000
  }
  if (pacMan.isTouching(coin105)) {
    coin105.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin105.x=600
    coin100.y=2000
  }
  if (pacMan.isTouching(coin106)) {
    coin106.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin106.x=600
    coin106.y=2000
  }
  if (pacMan.isTouching(coin107)) {
    coin107.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin107.x=600
    coin107.y=2000
  }
  if (pacMan.isTouching(coin108)) {
    coin108.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin108.x=600
    coin108.y=2000
  }
  if (pacMan.isTouching(coin109)) {
    coin109.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin109.x=600
    coin109.y=2000
  }
  if (pacMan.isTouching(coin110)) {
    coin110.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin110.x=600
    coin110.y=2000
  }
  if (pacMan.isTouching(coin111)) {
    coin111.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin111.x=600
    coin111.y=2000
  }
  if (pacMan.isTouching(coin112)) {
    coin112.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin112.x=600
    coin112.y=2000
  }
  if (pacMan.isTouching(coin113)) {
    coin113.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin113.x=600
    coin113.y=2000
  }
  if (pacMan.isTouching(coin114)) {
    coin114.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin114.x=600
    coin114.y=2000
  }
  if (pacMan.isTouching(coin115)) {
    coin115.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin115.x=600
    coin115.y=2000
  }
  if (pacMan.isTouching(coin116)) {
    coin116.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin116.x=600
    coin116.y=2000
  }
  if (pacMan.isTouching(coin117)) {
    coin117.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin117.x=600
    coin117.y=2000
  }
  if (pacMan.isTouching(coin118)) {
    coin118.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin118.x=600
    coin118.y=2000
  }
  if (pacMan.isTouching(coin119)) {
    coin119.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin119.x=600
    coin119.y=2000
  }
  if (pacMan.isTouching(coin120)) {
    coin120.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin120.x=600
    coin120.y=2000
  }
  if (pacMan.isTouching(coin121)) {
    coin121.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin121.x=600
    coin121.y=2000
  }
  if (pacMan.isTouching(coin122)) {
    coin122.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin122.x=600
    coin122.y=2000
  }
  if (pacMan.isTouching(coin123)) {
    coin123.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin123.x=600
    coin123.y=2000
  }
  if (pacMan.isTouching(coin124)) {
    coin124.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin124.x=600
    coin124.y=2000
  }
  if (pacMan.isTouching(coin125)) {
    coin125.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin125.x=600
    coin125.y=2000
  }
  if (pacMan.isTouching(coin126)) {
    coin126.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin126.x=600
    coin126.y=2000
  }
  if (pacMan.isTouching(coin127)) {
    coin127.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin127.x=600
    coin127.y=2000
  }
  if (pacMan.isTouching(coin128)) {
    coin128.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin128.x=600
    coin128.y=2000
  }
  if (pacMan.isTouching(coin129)) {
    coin129.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin129.x=600
    coin129.y=2000
  }
  if (pacMan.isTouching(coin130)) {
    coin130.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin130.x=600
    coin130.y=2000
  }
  if (pacMan.isTouching(coin131)) {
    coin131.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin131.x=600
    coin131.y=2000
  }
  if (pacMan.isTouching(coin132)) {
    coin132.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin132.x=600
    coin132.y=2000
  }
  if (pacMan.isTouching(coin133)) {
    coin133.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin133.x=600
    coin133.y=2000
  }
  if (pacMan.isTouching(coin134)) {
    coin134.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin134.x=600
    coin134.y=2000
  }
  if (pacMan.isTouching(coin135)) {
    coin135.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin135.x=600
    coin135.y=2000
  }
  if (pacMan.isTouching(coin16)) {
    coin136.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin136.x=600
    coin136.y=2000
  }
  if (pacMan.isTouching(coin137)) {
    coin137.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin137.x=600
    coin137.y=2000
  }
  if (pacMan.isTouching(coin138)) {
    coin138.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin138.x=600
    coin138.y=2000
  }
  if (pacMan.isTouching(coin139)) {
    coin139.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin139.x=600
    coin139.y=2000
  }
  if (pacMan.isTouching(coin140)) {
    coin140.visible = false;
    coin = coin + 10;
    pacMan.addImage(pacMan5Image);
    coin140.x=600
    coin140.y=2000
  }





  
}

  