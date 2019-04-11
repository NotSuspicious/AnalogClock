  var s = 20


var setup = function(){

}

var draw = function(){
  //centerpoint
  var cp = windowHeight/2;

    var ellipseS = windowHeight-s;


  createCanvas(windowHeight, windowHeight);
  drawClock();
  drawMS();
  drawS();
  drawM();
  drawH();
}

var drawClock = function(){
  background(205, 200, 255);
  strokeWeight(1);
  ellipse(cp, cp, ellipseS, ellipseS);

  //hour lines
  for(var i = 0 ; i < 12 ; i++){
    line(cp+sin(radians(i*30))*200, -cos(radians(i*30))*200 + cp, sin(radians(i*30))*240 + cp, -cos(radians(i*30))*240 + cp)
  }

  //minute lines
  for(var i = 0 ; i < 60 ; i++){
    line(cp+sin(radians(i*6))*220, -cos(radians(i*6))*220 + cp, sin(radians(i*6))*240 + cp, -cos(radians(i*6))*240 + cp)
  }

  //millisecond lines
  for(var i = 0 ; i < 1000 ; i++){
    line(cp+sin(radians(i*.36))*230, -cos(radians(i*.36))*230 + cp, sin(radians(i*.36))*240 + cp, -cos(radians(i*.36))*240 + cp)
  }
}

var drawMS = function(){
  var ms = millis();
  strokeWeight(1);
  line(cp, cp, sin(radians(ms*.36))*240 + cp, -cos(radians(ms*.36))*240 + cp)
}

var drawS = function(){
  var s = second();
  strokeWeight(1);
  line(cp, cp, sin(radians(s*6))*230 + cp, -cos(radians(s*6))*230 + cp)
}

var drawM = function(){
  var m = minute();
  strokeWeight(3);
  line(cp, cp, sin(radians(m*6))*200 + cp, -cos(radians(m*6))*200 + cp)
}

var drawH = function(){
  var h = hour();
  strokeWeight(5);
  line(cp, cp, sin(radians(h*30))*150 + cp, -cos(radians(h*30))*150 + cp)
}
