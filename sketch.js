function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight)
  background('#333333');
  ellipseMode(CENTER)
  angleMode(DEGREES);
  frameRate(50);
}

function draw() {
let ang = sin(frameCount)*90 ;

if(frameCount<180){
push();
translate(width/2,height/2);
rotate(frameCount);
noFill();
stroke(lerpColor(color('red'), color('white'), cos(frameCount/2)));
ellipse(0,0,ang*7,40);
ellipse(0,0,40,ang*7);
pop();
}

if(frameCount>180 && frameCount<320){
  push();
  translate(width/2,height/2);
  background('#333333');
  noStroke();
  fill('red');
  ellipse(0,0,10+(frameCount-180)*20);
  pop();
}

if(frameCount>180 && frameCount<400){
  push();
  translate(width/2,height/2);
  rotate(frameCount/2);
  noFill();
  stroke('white');
  ellipse(0,0,ang*10,50);
  ellipse(0,0,50,ang*10);
  pop();
}


}
