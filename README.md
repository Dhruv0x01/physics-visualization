# 🚀 Physics Visualization

A personal learning project where I explore how physics concepts can be implemented, animated, and simulated through code — starting with Python, now expanding into interactive browser-based simulations with p5.js.

## 🌐 Live Demos

| Project | Link |
|---------|------|
| Project 1 — Projectile Motion | [Play →](https://dhruv0x01.github.io/physics-visualization/projects/01-projectile-motion/) |
| Project 2 — Orbital Gravity | [Play →](https://dhruv0x01.github.io/physics-visualization/projects/02-orbital-gravity/) |
| Project 3 — N-Body Chaos | [Play →](https://dhruv0x01.github.io/physics-visualization/projects/03-n-body-chaos/) |

---



## 📌 Overview

The goal is not to master any single library, but to use code as a tool to **understand and see physics**. Each phase of this project pushed the boundary a little further — from static plots, to animations, to real-time interactive simulations.

---

## 🧠 What I've Learned

### 🔹 Numerical Computation (Python / NumPy)
- Created time-based arrays using NumPy
- Implemented physics equations (motion, projectile motion)
- Used vectorized operations instead of loops

### 🔹 Visualization (Matplotlib)
- Plotted projectile trajectories
- Compared multiple trajectories
- Used subplots (trajectory and height vs time)

### 🔹 Animation
- Learned how animations work using frame-based updates
- Implemented animations using `FuncAnimation`
- Built a projectile motion animation

### 🔹 Simulation & Interaction (Python)
- Visualized velocity vectors (vx, vy, resultant)
- Displayed real-time speed and time
- Added trajectory trail
- Implemented pause/play and reset controls

### 🔹 p5.js Basics (New 🔥)
- Setting up a canvas and background
- Drawing shapes — ellipse, rect, line
- Understanding fill, stroke, and how they persist
- Motion using vx/vy update loop
- Wall bouncing with edge detection
- Acceleration over time
- Multiple objects using arrays of objects + for loops
- Responsive canvas — `windowWidth`/`windowHeight` and `windowResized()`
- Live mouse position with `mouseX`/`mouseY` (where) vs `mousePressed` (when)

### 🔹 Project 1 — Projectile Motion Simulator (p5.js)
- Built a full interactive projectile motion simulation
- Euler integration for real-time physics (vx, vy, gravity)
- Bouncing off walls and ground with energy loss (coefficient of restitution)
- Fading trail to visualize the arc
- Sliders for angle, speed, gravity, and bounciness
- Live angle indicator showing launch direction
- Angle indicator showing launch direction
- Max height tracker — freezes at peak
- Live current speed using Pythagoras (√vx²+vy²)
---

### Project 2 — Orbital Gravity Simulator

A 2D gravitational sandbox. A massive sun sits in the center; click and drag anywhere on the canvas to launch planets with custom velocity. Each planet feels Newton's gravitational pull and traces its own colored orbit.

**Live demo:** [https://dhruv0x01.github.io/physics-visualization/projects/02-orbital-gravity/]
**Physics implemented:**
- Newton's law of gravitation: F = G·M·m / r²
- Vector force decomposition using unit vectors (dx/r, dy/r)
- Force → acceleration via Newton's 2nd law (a = F/m)
- Euler integration for velocity and position updates
- Per-frame direction recalculation (force vector changes as planet moves)

**Features:**
- Click-and-drag launch — drag direction sets velocity, drag length sets speed
- Live angle readout between drag direction and sun-radial — turns green at 90° (the sweet spot for circular orbit)
- Per-planet color and fading trail
- Multi-body support — spawn as many planets as you want
- Clear button + `C` keyboard shortcut to reset
- Responsive canvas (resizes with window)

**Key insight:** the magic number for circular orbit at distance r is **v = √(G·M/r)**. With G=1, M=10000, r=200, that's v ≈ 7.07. Slower → spiral in. Faster → ellipse or escape. The angle indicator helps users find that perpendicular launch direction reliably.

**What I learned:**
- Vector decomposition with unit vectors — the dot product as a tool for finding angles between vectors
- Why orbits actually orbit: gravity bends sideways velocity into a closed loop ("falling and missing")
- The 1/r² blowup near the sun — a numerical artifact of discrete-step integration, not real physics
- Object-oriented thinking in JS — bundling state (position, velocity, trail, color) per object so the draw loop stays clean
- p5.js callbacks like `windowResized` — case-sensitive, silently ignored if misnamed

### Project 3 — N-Body Chaos Simulator

The next conceptual jump after Project 2: no fixed sun, no special bodies. Every body pulls on every other body with mutual gravity. Click and drag to launch bodies into the system and watch the chaos unfold.

**Live demo:** [https://dhruv0x01.github.io/physics-visualization/projects/03-n-body-chaos/]

**Physics implemented:**
- Mutual Newtonian gravity — every body pulls on every other body
- O(n²) force computation via nested loop over body pairs
- Two-pass update (compute all forces from a snapshot, then apply) — avoids ordering bugs where one body's update would skew the next body's force calculation
- Softened gravity (r² + ε) to prevent singularity blowups during close passes
- Force → acceleration via Newton's 2nd law, then Euler integration

**Features:**
- Click-and-drag launch with live drag indicator (line + spawn marker)
- Per-body random color
- Clear button + `C` keyboard shortcut to reset
- Responsive canvas

**Tuning:** `G = 2000`, `mass = 1`, drag-to-velocity scale = `0.1`, softening = `r² + 50`. These were dialed in by experimentation — strong enough that two stationary bodies visibly fall together within seconds, soft enough that close passes don't fling bodies offscreen at warp speed.

**Key insight:** two bodies are predictable. Three bodies are chaos. The same physics that gave Project 2 perfect ellipses gives Project 3 unrepeatable, sensitive-to-initial-conditions tangles. Try spawning three stationary bodies in a triangle — same setup twice will give different outcomes because tiny differences in click position get amplified.

**What I learned:**
- Why physics simulations need a two-pass update loop — mixing reads and writes inside the same loop introduces ordering bugs
- The singularity problem with point-mass gravity, and why softening (r² + ε) is the standard hack
- Tuning N-body simulations is half the work — `G`, mass, softening, and time step all interact
- O(n²) scaling is real — every body added scales force computation quadratically. Fine for v1; matters at v2+
- "Simple rules, complex behavior" — three lines of physics produce genuinely unpredictable motion



## 📂 Project Structure

```
physics-visualization/
│
├── numpy_basics/
│   └── projectile_motion.py
│
├── matplotlib_basics/
│   └── projectile_plot.py
│
├── animation_basics/
│   ├── multiple_projectile_animation.py
│   └── projectile_animation.py        
│
├── p5_basics/                          # p5.js fundamentals
│   ├── 01-canvas-and-background/
│   │   ├── index.html
│   │   └── sketch.js
│   ├── 02-drawing-shapes/
│   │   ├── index.html
│   │   └── sketch.js
│   ├── 03-Motion/
│   │   ├── index.html
│   │   └── sketch.js
│   ├── 04-responsive-canvas/
│   │   ├── index.html
│   │   └── sketch.js
│   └── 05-mouseX-mouseY/
│       ├── index.html
│       └── sketch.js
├── projects/
│   ├── 01-projectile-motion/    
│   │   ├── index.html
│   │   └── sketch.js
│   ├── 02-orbital-gravity/    
│   │   ├── index.html
│   │   └── sketch.js
│   └── 03-n-body-chaos
│        ├── index.html
│        └── sketch.js
│
├── README.md
└── .gitignore
```

---

## 🎯 Key Concepts Implemented

### Projectile Motion (Python)
- Horizontal: `x = v cos(θ) t`
- Vertical: `y = v sin(θ) t − (1/2) g t²`
- Computed using NumPy, visualized using Matplotlib

### p5.js Canvas & Drawing
- `createCanvas()`, `background()` for setting up the world
- `ellipse()`, `rect()`, `line()` for drawing
- `fill()`, `stroke()`, `noStroke()` for styling
- Understanding that `draw()` runs ~60fps — the heartbeat of every simulation

### p5.js Motion
- `vx`/`vy` velocity variables updated every frame
- Wall bouncing by flipping velocity sign on edge collision
- Acceleration by incrementing velocity each frame
- Multiple moving objects using arrays of objects + `for` loops

### N-Body Dynamics
- Mutual gravity via nested pair loop — each body sums force contributions from every other body
- Two-pass update structure: read all positions → compute forces → write all positions
- Softening (r² + ε) to handle the close-pass singularity
- Sensitive dependence on initial conditions — chaos as an emergent property, not coded explicitly

---

## 🎬 Features (Python Simulation)

- 📈 Real-time projectile animation
- 🔵 Velocity component visualization (vx, vy)
- 🟢 Resultant velocity vector
- 🟠 Trajectory trail
- ⏱️ Live time display
- ⚡ Speed (magnitude) display
- 🎮 Interactive controls (pause/play, reset)

---

## 🛠️ Tech Stack

| Phase | Stack |
|-------|-------|
| Numerical computation | Python, NumPy |
| Plotting & animation | Matplotlib |
| Interactive browser simulations | JavaScript, p5.js |

---

## 🔜 What's Next

- [x] Canvas, background, drawing shapes
- [x] Motion — velocity, bouncing, acceleration, objects & arrays
- [x] Mouse interaction
- [x] Sliders & UI controls
- [x] **Project 1:** Projectile Motion simulator in p5.js
- [x] **Project 2:** Orbital Gravity simulator
- [x] **Project 3 (v1):** N-Body chaos simulator (no trails yet)
- [ ] **Project 4:** Electric Field visualizer
- [ ] **Project 5:** Electric Potential map
- [ ] **Project 6:** Charged particle in EM field
- [ ] **Project 7:** Collision simulator
- [ ] **Project 8:** Fluid flow simulation

---

## 💡 Purpose

The journey so far:

```
basic equations → visualization → animation → simulation → interactive p5.js
```

The goal is to eventually build stunning, real-time, browser-based physics simulations that anyone can open and play with.

---

## 👨‍💻 Author

Dhruv — [@Dhruv0x01](https://github.com/Dhruv0x01)
