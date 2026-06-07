function setup() {
  createCanvas(600, 400);
  background(256);
}

function draw() {
  fill(256,150,0)
  circle(300,200,110)
  fill(256,100,0)
  circle(300,200,100)
  fill(256,150,0)
  rect(280,150,5,100)
  rect(315,150,5,100)
  rect(250,180,100,5)
  rect(250,220,100,5)
  fill(256,256,256)
  arc(300,200,110,110, 2*PI+0.2, QUARTER_PI+0.3)
  fill(256,180,0)
  arc(307,205,120,120, 2*PI+0.2, QUARTER_PI+0.3)
  fill(256,130,0)
  arc(307,205,110,110, 2*PI+0.2, QUARTER_PI+0.3)
  fill(256,180,0)
  rect(322,209,5,30)
  rect(318,228,40,5)
}