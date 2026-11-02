// London Ham - 2-11-2024


let myBuffer; // the variable to create a frame buffer to draw on

let bgColor; // the variable for the background color

let hasMoved = false; // don't paint until the mouse/trackpad has actually moved

function setup() {

  let canvas = createCanvas(400, 400);

  // set color mode to HSB to create a spectrum of values for the brush to update
  //between. It's set once here, before any colors are made, so the first
  //background is picked the same way as the ones picked on mousePressed()

  colorMode(HSB);

  // set values for the background color
  bgColor = color(random(255), random(255), random(255));
  

  // create the graphics buffer to draw on top of
  myBuffer = createGraphics(400, 400);

  // remove the stroke to create a paintbrush like effect with no interruptions
  myBuffer.noStroke();

}

function draw() {
  // place the color changing variable in the parameter for background, so that
  //the background will change colors with each mouse click. It's placed in draw 
  //so that the color can change every frame
  background(bgColor);

  if (hasMoved) {

    //the fill assumes negative values when being drawn to the frame buffer
    //instead of the background canvas.
    //Therefore by placing the inverse color function in the first parameter for fill
    //the inverse color function flips these values back to positive by calculating
    //their mathematical inverse. By placing the frameCount%360 the brush updates its
    //location on the HSB color wheel each frame when selecting a fill color.
    //In dividing this frame value by 3 and subtracting 100, I am able to designate 
    //which section of the color wheel this frame update is constrained to. I have chosen
    // red,blue, and violet hues.

    myBuffer.fill(inverseColor(frameCount % 360/3-100,100,100));


    //draw the shapes for the generative brush

    myBuffer.ellipse(mouseX-10, mouseY-20, random(0,20), random(0,20));
    myBuffer.ellipse(mouseX,mouseY,10,10);
    myBuffer.rect(mouseX+15,mouseY+5,random(0,20),random(0,10));

  }

 // draw the buffer

  image(myBuffer, 0, 0, width, height);

  
}

// the inverse color function that inverts the HSB values drawn to the buffer

function inverseColor(h,s,b){
  
  h = 255 - h; //get the mathmatical inverse
  s = 255 - s; //get the mathmatical inverse
  b = 255 - b; //get the mathmatical inverse
  
  //return a color function containing the inverse color

  return color(h,s,b); 

}

// start painting once the mouse/trackpad moves (otherwise the brush sits at 0,0)

function mouseMoved() {
  hasMoved = true;
}

// change the background color on mousePressed()

function mousePressed() {
  bgColor = color(random(255), random(255), random(255));
}

//save your drawing by pressing the s key (with or without shift)

function keyPressed(){
  if (key === 's' || key === 'S'){
    
    save('mysketch.jpg');
    
  }
  
}
