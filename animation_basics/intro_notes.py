# Moving from static graphs to moving simulations
# Show one position -> Update -> Repeat -> Motion

# t = 0 -> Draw Point 
# t = 0.1 -> Move point 
# t = 0.2 -> Move point 
# ....
# This created motion

# Basic Animation Structure
# 1. setup figure (where we draw)
# 2. create object (ball) (What moves)
# 3. update function (How it moves)
# 4. animation loop

# Tool for animation - Matplotlib - animation module
from matplotlib.animation import FuncAnimation
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
# This creates the canvas

ax.set_xlim(0, 10)
ax.set_ylim(0, 10)

ax.set_title("Simple Animation")
ax.grid()

point, = ax.plot([], [], 'ro')
# [] empty as no data yet, 'ro' means red dot, also
# point, here the , means its line object and not a list
# ax.plot() returns a list of Line2D objects
# you extract the first element using the comma 

def update(frame):
    x = frame
    y = frame
    point.set_data([x], [y]) # this tells matplotlib to Move this object to a new position
    return point,  # return point, this tells matplotlib -> this object changed → redraw it
    

# frame is current step in animation
# frame = 0 means (0, 0)
# frame = 1 means (1, 1)
# frame = 2 means (2, 2)

ani = FuncAnimation(fig, update, frames=10, interval=500)
# fig is where animation occurs(the canvas we created was in fig)
# update, function automatically calls every frame
# frame is how many steps, frame 10 means run 10 times 
# frames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# interval is time between frames (milliseconds)

plt.show()
