# 🚀 Physics Visualization

A personal learning project where I explore how physics concepts can be implemented, animated, and simulated through code — starting with Python, now expanding into interactive browser-based simulations with p5.js.

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

### 🔹 Project 1 — Projectile Motion Simulator (p5.js)
- Built a full interactive projectile motion simulation
- Euler integration for real-time physics (vx, vy, gravity)
- Bouncing off walls and ground with energy loss (coefficient of restitution)
- Fading trail to visualize the arc
- Sliders for angle, speed, gravity, and bounciness
- Live angle indicator showing launch direction

---

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
│   └── 03-motion/
│       ├── index.html
│       └── sketch.js
├── projects/
│   └── 01-projectile-motion/    
│       ├── index.html
│       └── sketch.js
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
- [ ] **Project 2:** Orbital Gravity simulator
- [ ] **Project 3:** N-Body chaos simulation
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