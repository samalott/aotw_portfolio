function setup() {
  x = windowWidth*.2;
  y = windowWidth*.2;
  createCanvas(x*.8, y*.8);
}

function windowResized() {
  x = windowWidth*.2;
  y = windowWidth*.2;
  resizeCanvas(x*.8, y*.8);
}

function draw() {
  background(0, 0, 0, 0);
  noStroke();
 s = second();
 m = minute();
 h = hour();
  // s = 1;
  // m = 59;
  // h = 18;
  
//***COLORS***
  
  // BEFORE 5 AM AND AFTER 8 PM
  if (h<5 || h>=20) {
  hourColor = color(7, 1, 54); //black-navy
  minuteColor = color(28, 7, 92); //deep purple
  secondColor = color(28, 15, 135); //deep navy
  } 
  
  // BETWEEN 5 AM AND 6 AM, AND BETWEEN 7 PM AND 8 PM
  else if ((h>=5 && h<6) || (h>=19 && h<20)) {
  hourColor = color(44, 3, 168); //dark periwinkle
  minuteColor = color(28, 7, 92); //deep purple
  secondColor = color(76, 9, 107); //warm dark purple
  } 
  
  // BETWEEN 6 AM AND 7 AM, AND BETWEEN 6 PM AND 7 PM
  else if ((h>=6 && h<7) || (h>=18 && h<19)) {
  hourColor = color(86, 56, 255); //bright purple-blue
  minuteColor = color(76, 9, 107); //warm dark purple
  secondColor = color(153, 17, 137); //warm magenta
  } 
  
  // BETWEEN 7 AM AND 8 AM, AND BETWEEN 5 PM AND 6 PM
  else if ((h>=7 && h<8) || (h>=17 && h<18)) {
  hourColor = color(66, 113, 255); //bright blue
  minuteColor = color(178, 145, 255); //light purple
  secondColor = color(252, 156, 121); // light peach
  } 
  
  // BETWEEN 8 AM AND 10 AM, AND BETWEEN 3 PM AND 5 PM
  else if ((h>=8 && h<10) || (h>=15 && h<17)) {
  hourColor = color(82, 200, 255); //darker bright blue
  minuteColor = color(232, 166, 0); //deep orange-yellow
  secondColor = color(255, 236, 69); //goldenrod
  } 
  
  // BETWEEN 10 AM AND 3 PM OR OTHER
  else {
  hourColor = color(125, 214, 255); //lighter bright blue
  minuteColor = color(255, 205, 79); //light goldenrod
  secondColor = color(255, 238, 150); //bright light yellow
  }   
  
//***TOP SECTION***  

  //Hours-Top
  h3 = map(h, 0, 24, y*.1, y*.2);
  w1 = map(h, 0, 24, x*.2, x*.27);
  w2 = map(h, 0, 24, x*.6, x*.53);
  noStroke();
  fill(hourColor);
  triangle(w1, h3, x*.4, y*.4, w2, h3);
  
  //Minutes-Top
  h3 = map(m, 0, 60, y*.2, y*.3);
  w1 = map(m, 0, 60, x*.27, x*.33);
  w2 = map(m, 0, 60, x*.53, x*.47);
  noStroke();
  //minuteColor = color(255, 142, 28);
  //minuteColor.setAlpha(150);
  fill(minuteColor);
  triangle(w1, h3, x*.4, y*.4, w2, h3);

  
  //Seconds-Top
  h5 = map(s, 0, 60, y*.3, y*.4);
  w9 = map(s, 0, 60, x*.33, x*.4);
  w10 = map(s, 0, 60, x*.47, x*.4);
  noStroke();
  //secondColor = color(255, 218, 33);
  //secondColor.setAlpha(150);
  fill(secondColor);  
  triangle(w9, h5, x*.4, y*.4, w10, h5);

  
  //Top Outline
  strokeWeight(x*.01);
  strokeJoin(ROUND);
  stroke(255, 255, 255);
  fill(255, 255, 255, 1); 
  triangle(x*.2, y*.1, x*.4, y*.4, x*.6, y*.1);
  
  
//***BOTTOM SECTION***
  
  //Hours-Bottom
  h3 = map(h, 0, 24, y*.6, y*.7);
  w1 = map(h, 0, 24, x*.27, x*.2);
  w2 = map(h, 0, 24, x*.53, x*.6);
  noStroke();
  fill(hourColor);
  triangle(w1, h3, x*.4, y*.4, w2, h3);

  //Minutes-Bottom
  h4 = map(m, 0, 60, y*.5, y*.6);
  w3 = map(m, 0, 60, x*.33, x*.27);
  w4 = map(m, 0, 60, x*.47, x*.53);
  noStroke();
  //minuteColor = color(0, 0, 0);
  //minuteColor.setAlpha(150);
  fill(minuteColor);
  triangle(w3, h4, x*.4, y*.4, w4, h4);

  //Seconds-Bottom
  h6 = map(s, 0, 60, y*.4, y*.5);
  w11 = map(s, 0, 60, x*.4, x*.33);
  w12 = map(s, 0, 60, x*.4, x*.47);
  //secondColor = color(0, 0, 0);
  // secondColor.setAlpha(150);
  fill(secondColor);  
  triangle(w11, h6, x*.4, y*.4, w12, h6);

  //Bottom Outline
  strokeWeight(x*.01);
  strokeJoin(ROUND);
  stroke(255, 255, 255);
  fill(255, 255, 255, 1); 
  triangle(x*.2, y*.7, x*.4, y*.4, x*.6, y*.7);
}

