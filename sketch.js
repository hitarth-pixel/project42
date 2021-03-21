var hr,min,sec,ball,secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(800,800);
}

function draw() {
 background(0); 
 hr=hour(); 
 if(hr>12)
 {
   hr=hr%12;
 }
 min=minute();
 sec=second();
 angleMode(DEGREES); 
  secAngle=map(sec,0,60,0,360);
   minAngle=map(min,0,60,0,360);
   hrAngle=map(hr,0,12,0,360);
  
//to make seconds
 translate(400,400);
 push();
 rotate(secAngle)
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,100,0);
 noFill();
 arc(0, 0, 200, 200,0,secAngle,OPEN);
 pop();
 //to make minute hand 
 
 push();
 rotate(minAngle)
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,130,0);
 noFill();
 arc(0, 0, 260,260,0,minAngle,OPEN);
 pop();

//to make hour hand
 
 push();
 rotate(hrAngle)
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,70,0);
 noFill()
 arc(0, 0, 140, 140,0,hrAngle,OPEN);
 pop();
 
 //to generate arc
 
}