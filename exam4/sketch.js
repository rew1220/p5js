let waffleRoffset = 0;
let waffleSizeoffset = 0;
let coloroffset = 0;
function setup() {
  createCanvas(600, 400);
  background(256);
  //saveGif("project4", 1.16)
}

function draw() {
  clear()
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
  
  waffleRoffset = (frameCount%70)/10
  waffleSizeoffset = (frameCount%70)/10
  coloroffset = (frameCount%70)/70*80
  let innerfrom = color(256,60+coloroffset,0)
  let innerto = color(256,140,0)
  let innercolor = lerpColor(innerfrom, innerto,0.5)
  let outerfrom = color(256,120+coloroffset,0)
  let outerto = color(256,200,0)
  let outercolor = lerpColor(outerfrom, outerto,0.5)
  fill(outercolor)
  arc(300+waffleRoffset,200+waffleRoffset,110+waffleSizeoffset,110+waffleSizeoffset, 2*PI+0.2, QUARTER_PI+0.3)
  fill(innercolor)
  arc(301+waffleRoffset,201+waffleRoffset,97+waffleSizeoffset,97+waffleSizeoffset, 2*PI+0.2, QUARTER_PI+0.3)
  fill(outercolor)
  rect(315+waffleRoffset,203+waffleRoffset,5+waffleSizeoffset/10,28+waffleSizeoffset/10)
  rect(312+waffleRoffset,219+waffleRoffset/1.2,34+waffleSizeoffset/2,5+waffleSizeoffset/10)
}
