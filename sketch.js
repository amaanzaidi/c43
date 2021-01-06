var hr,min,sec


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);


}

function draw() {
  background(255,255,255); 
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second();
  stroke('Blue');
  strokeWeight(7);
  secAngle = map(sec,0,60,0,360);
  arc(0,0,300,300,0,secAngle);
  stroke("Red")
  hrsAngle = map(hr,0,60,0,360);
arc(0,0,280,280,0,hrsAngle);
stroke("yellow")
  minAngle = map(min,0,60,0,360);
 arc(0,0,260,260,0,minAngle);
 push()
 rotate(secAngle);
 stroke("Blue");
 line(0,0,90,0);
 pop();
 push()
 rotate(hrsAngle);
 stroke("Red");
 line(0,0,70,0);
 pop();
 push()
 rotate(minAngle);
 stroke("Yellow");
 line(0,0,90,0);
 pop();
  drawSprites();

}