// N-body-simulation

let bodies = [];
let dragStart = null;
let dragEnd = null;
let G = 2000; 
// if it feels weak => double G, 
// if it feels strong => half G

function setup(){
    createCanvas(windowWidth - 50, windowHeight - 50);

    // Clear button 
    let clearBtn = createButton('Clear');
    clearBtn.position(20, 20);
    clearBtn.mousePressed(() => {bodies = []; });
}
function draw(){
    background(0);

    // Physics 
    // 1st loop to compute force, force that body i feels due to body j
    for(let i = 0; i < bodies.length; i++){
        bodies[i].fx = 0;
        bodies[i].fy = 0;

        for(let j = 0; j < bodies.length; j++){
            if(i === j) continue; // skip self 

            let a = bodies[i];
            let b = bodies[j];

            let dx = b.x - a.x;
            let dy = b.y - a.y;
            let r = sqrt(dx*dx + dy*dy);

            let F = (G*a.mass*b.mass)/(r*r + 50); 
            a.fx += F * (dx/r);
            a.fy += F * (dy/r);
        }
    }

    // 2nd Loop - update motion + render 
    for(let i = 0; i<bodies.length; i++){
        let b = bodies[i];

        let ax = b.fx/b.mass;
        let ay = b.fy/b.mass;

        b.vx += ax;
        b.vy += ay;
        b.x += b.vx;
        b.y += b.vy;

        // ---Trail---
        b.trail.push({x: b.x, y:b.y}); // Pushing coordinates of trail through ball live location
        
        // To end trail after a certail length 
        if(b.trail.length > 500){       
            b.trail.shift();
        }

        // Drawing those small circle as trail as balls go on, hence in a loop 
        for(let j = 0; j < b.trail.length; j++){
            let alpha = map(j, 0, b.trail.length, 0, 200);
            fill(b.color[0], b.color[1], b.color[2], alpha);
            noStroke();
            ellipse(b.trail[j].x, b.trail[j].y, 3, 3);
        }
        // --- end trail ---
        // The goal of this last loop is to firstly make small balls run behind our ball, giving the impression of a trail 
        // Now the number of balls is same as trail.length as loop goes from [0 to trail.length-1],
        // fill(r, g, b, alpha) it takes the fourth number going from 0 to 255, where 0 means fully transparent and
        // 255 means fully solid color
        // let alpha = map(), map() is a converter, it takes one range and rescales it to another range,
        // keeping the proportion same  
        // map(value, fromLow, fromHigh, toLow, toHigh)
        // read it as this "value" lives somewhere in the range of fromLow -> fromHigh. Tell me where it lives
        // in the range of toLow -> toHigh 
        // let alpha = map(j, 0, b.trail.length, 0, 200);
        // read it as, "j" is somewhere between 0 and b.trail.length. Convert it to a number between 0 and 200.
        // Since j increases as we move from oldest to newest point, alpha increases too — old points end up nearly invisible, 
        // new points end up bright. That gradient is what makes it look like a fading trail.

        fill(b.color[0], b.color[1], b.color[2]);
        noStroke();
        ellipse(b.x, b.y, 30, 30);
    }

    // Drag indicator
    if(dragStart && dragEnd){
        stroke(255, 255, 255, 200);
        strokeWeight(2);
        line(dragStart.x, dragStart.y, dragEnd.x, dragEnd.y);

        // small circle at the start of drag 
        fill(255, 255, 255, 200);
        noStroke();
        ellipse(dragStart.x, dragStart.y, 10, 10);
    }

}
function windowResized(){
    resizeCanvas(windowWidth - 50, windowHeight-50);
}
function keyPressed(){
    if(key === 'c' || key ==='C'){
        bodies = [];
    }
}

// Remember the start of drag, also reset the end to the same point
// so the indicator doesn't flash from stale position 
function mousePressed(){
    dragStart = {x: mouseX, y: mouseY};
    dragEnd = {x: mouseX, y: mouseY};
}

// Remember where the cursor is now
// update the endpoint 
function mouseDragged(){
    dragEnd = {x: mouseX, y: mouseY};
}

// these x, y, vx, vy, mass, color, trail are part of object hence no need to declare it at top

// compute velocity from the drag and spawn the body 
// fire once the mouse is released 
function mouseReleased(){
    let vx = (dragEnd.x - dragStart.x)*0.1; // 30 pixel to 3 speed 
    let vy = (dragEnd.y - dragStart.y)*0.1; 


    bodies.push({
        x: dragStart.x,
        y: dragStart.y,
        vx: vx,
        vy: vy,
        fx: 0,
        fy: 0,
        mass: 1,
        color: [random(100, 255), random(100, 255), random(100, 255)],
        trail: []
    });

    dragStart = null;
    dragEnd = null;
}
