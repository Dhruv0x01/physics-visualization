let x, y, vx, vy; 
let g = 0.5;
let launched = false;
let bounce = 0.8;

let speed = 30;
let angle = 40;

let trail = [];

let angleSlider, speedSlider, gravitySlider, bounceSlider;

function setup(){
    createCanvas(1900, 700);
    angleSlider = createSlider(0, 90, 45, 1);
    angleSlider.position(10, height+20);

    speedSlider = createSlider(0, 100, 30, 5);
    speedSlider.position(190, height+20);

    gravitySlider = createSlider(0, 3, 1, 0.2);
    gravitySlider.position(340, height+20);

    bounceSlider = createSlider(0.4, 1, 0.8, 0.05);
    bounceSlider.position(520, height+20);

}
function draw(){
    background(0);
    angle = angleSlider.value();
    speed = speedSlider.value();
    g = gravitySlider.value();
    bounce = bounceSlider.value();
    

    if(launched){
        x = x + vx;
        y = y + vy;
        vy = vy + g;
        trail.push({x: x, y: y});
        if(y >= height - 60){y = height - 60; vy *= -bounce;}
        if(y<0){y = 0; vy *= -bounce;}

        if(x >= width - 20){x = width - 20; vx *= -bounce;}
        if(x<20){x = 20; vx *= -bounce;}

        // clear trail 
        if(trail.length > 70){
             trail.shift();
            }
    }

    // trail before ball
    for(let i=0; i < trail.length; i++){
        let alpha = map(i, 0, trail.length, 0, 255);
        fill(255, 0, 0, alpha);
        noStroke();
        ellipse(trail[i].x, trail[i].y, 8, 8);
    }
    

    fill(255, 0, 0);
    noStroke();
    ellipse(x, y, 20, 20);

    fill(255);
    textSize(13);
    text('Angle: '+ angle + '°', 10, height - 20);
    text('Speed: '+ speed, 190, height - 20);
    text('Gravity: '+ g, 340, height - 20);
    text('Bounce back: '+ bounce, 520, height - 20);

    stroke(255);
    line(0, height-50, width, height - 50);
}
function mousePressed(){
    trail = [];
    launched = true;
    x = 50;
    y = height - 50;
    let theta = radians(angle);
    vx = speed*cos(theta);
    vy = -speed*sin(theta);
}

/*
So in projectile motion:

Launch velocity is vy = -speed * sin(theta) — negative because ball starts going UP
Gravity is vy += g — positive because gravity pulls DOWN (increases y)
At peak: vy = 0
After peak: vy becomes positive, ball falls down

If this were normal math coordinates (y=0 at bottom), vy at launch would be positive and gravity would subtract. Same physics — just flipped.
One line to remember: In p5.js, up is negative.
*/
/*
 In real life g = 9.8 m/s².
But in our simulation there are no meters — only pixels. If you put g = 9.8, the ball would accelerate 9.8 pixels/frame² and shoot off screen in less than a second. Try it and see.
The 0.5 is a scaled gravity — chosen to make the motion look realistic on screen at a reasonable speed. It's not wrong, it's just tuned for pixels instead of meters.
This is actually something every game and simulation does. They don't simulate real units — they simulate visually convincing motion. If it looks right, it is right for the purpose.
Later when we want to be more physically accurate, we can:

Define a scale like 1 meter = 10 pixels
Then convert: g = 9.8 m/s² × 10 pixels/m = 98 pixels/s²
And use real time steps: dt = 1/60 (one frame = 1/60th of a second)
So per frame: vy += 98 * (1/60) = 1.63 pixels/frame

But for now 0.5 is fine — we're learning the simulation structure, not building a physics engine.
*/