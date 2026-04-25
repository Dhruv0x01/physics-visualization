// Concept 2.1: Drawing Shapes
// SHAPES
ellipse(x, y, w, h)        // circle/oval — x,y is CENTER // w and h should be equal for it to make a circle
rect(x, y, w, h)           // rectangle — x,y is TOP LEFT corner
line(x1, y1, x2, y2)       // line between two points // draws a line between (x1, y1) and (x2, y2)

// COLOR
fill(r, g, b)              // inside color of shapes, if you just write one number then 0 is black and 255 is white 
noFill()                   // transparent inside
stroke(r, g, b)            // outline color + line color
noStroke()                 // no outline
strokeWeight(n)            // line thickness

// REMEMBER
// fill/stroke persist until changed
// line only listens to stroke, not fill
// y=0 is TOP, y increases DOWNWARD
// to make line you have to start stroke first
// strokeWeight(number) is use to make it thicker
// stroke() stay active until you change it, so you don't need to write stroke everytime before line if it is already active before ofc,
// also if you want it to change lets say color for next line, then write stroke with diff number again before 2nd line
// fill() and stroke() apply to everything drawn after them until you change it, so always set color before the shape

// Task: 
// 1. Draw an orange circle anywhere on the canvas 
// 2. Draw a white rectangle somewhere else 
// 3. Draw a line from bottom right to corner of the circle

function setup(){
    createCanvas(1600, 700);
}

function draw(){
    background(0);

    fill(255, 100, 0);
    noStroke();
    ellipse(400, 200, 200, 200);

    fill(255);
    noStroke();
    rect(800, 120, 350, 100);

    stroke(255);
    strokeWeight(3.5);
    line(1600, 700, 400, 200);
    
    stroke(255, 0, 0);   // changed stroke to red one now
    strokeWeight(2.5);   // changed stroke weight to 2.5 now
    line(800, 120, 400, 200);

}

