function setup() {
  createCanvas(600, 400);
  //saveGif("my charactor", 15)
}
let handdistance = 80
function draw() {
  clear()
  fill(255,255,255)
  stroke(0)
  strokeWeight(1)
  theta = atan((mouseY-200)/(mouseX-300))
  mouseposfactor = 1
  if(mouseX-300<0) mouseposfactor = -1
  //몸체
  ellipse(300,200,100,100)
  
  //눈
  faceoffset = 15
  maxtheta = PI/2-PI/8
  ctheta = constrain(theta, -maxtheta,maxtheta)
  facexpos = 300 + mouseposfactor*faceoffset*cos(ctheta)
  faceypos = 200 + mouseposfactor*faceoffset*sin(ctheta)
  eyeoffset = 15
  ellipse(facexpos-eyeoffset,faceypos,10,10)
  ellipse(facexpos+eyeoffset,faceypos,10,10)
  //코
  fill(0,0,0)
  ellipse(facexpos,faceypos+10,10,5)
  fill(255,255,255)
  //입
  arc(facexpos,faceypos+20,10,10,0,PI)
  //안경
  noFill()
  stroke('#0F1576')
  strokeWeight(2)
  ellipse(facexpos-eyeoffset,faceypos,20,15)
  ellipse(facexpos+eyeoffset,faceypos,20,15)
  strokeWeight(3)
  line(facexpos-5,faceypos,facexpos+5,faceypos)
  line(facexpos+25,faceypos,350,190)
  line(250,190,facexpos-25,faceypos)
  
  strokeWeight(1)
  stroke(0)
  fill(255,255,255)
  //손
  ctheta+=mouseposfactor*PI/8

  if(keyIsDown(90)==true && handdistance<=100){
    handdistance+=1
  }
  if(keyIsDown(88)==true && handdistance >=70){
    handdistance-=1
  }
  
  ellipse(300+handdistance*mouseposfactor*cos(ctheta),200+handdistance*mouseposfactor*sin(ctheta)+3*sin(millis()/300),10,10)
  
  //책
  bookxpos = 315+handdistance*mouseposfactor*cos(ctheta)
  bookypos = 170+handdistance*mouseposfactor*sin(ctheta)+3*sin(millis()/300)
  bookxpos -= 15
  bookypos += 5
  //뒷면
  quad(bookxpos+30*-mouseposfactor,bookypos+15,bookxpos+30*-mouseposfactor,bookypos-25,bookxpos,bookypos-20,bookxpos,bookypos+20)
  fill('#0099ff')
  
  
  
  //표지
  quad(bookxpos+35*-mouseposfactor,bookypos-20*-mouseposfactor,bookxpos+35*-mouseposfactor,bookypos+20*-mouseposfactor,bookxpos,bookypos+20*-mouseposfactor,bookxpos,bookypos-20*-mouseposfactor)
  
  //제목
  quad(bookxpos,bookypos+20*-mouseposfactor,bookxpos,bookypos-20*-mouseposfactor,bookxpos+5*-mouseposfactor,bookypos-20*-mouseposfactor,bookxpos+5*-mouseposfactor,bookypos+20*-mouseposfactor)
  
  //표지 사진
  fill(255,255,255)
  if(mouseposfactor < 0){
    line(bookxpos+14*-mouseposfactor,bookypos+5, bookxpos+20*-mouseposfactor,bookypos-15)
    ellipse(bookxpos+14*-mouseposfactor,bookypos+5,10,10)
  }
}