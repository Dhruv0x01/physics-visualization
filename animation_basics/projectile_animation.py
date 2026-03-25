import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation


v = 50
angle = 60
g = 9.8

theta = np.radians(angle)

# In this 2d projectile motion , total time of flight is T = 2v sinθ / g
T = (2 * v * np.sin(theta)) / g
t = np.linspace(0, T, 100)

x = v*np.cos(theta)*t
y = v*np.sin(theta)*t - 0.5*g*t**2


fig, ax = plt.subplots(figsize=(7, 6))

# Those lines set the visible range (limits) of the plot axes.
ax.set_xlim(0, np.ceil(max(x)))
ax.set_ylim(0, np.ceil(max(y)))


ax.set_title("Projectile Motion")
ax.set_xlabel("Distance")
ax.set_ylabel("Height")
ax.grid()

ball, = ax.plot([], [], 'ro')

def update(frame):
    ball.set_data([x[frame]], [y[frame]])
    return ball, 
# This means if frame is 0, then x[0] and y[0]
# x[0] is position when t = t[0]
# y[0] is position when t = t[0] 
# t = [0, 0.03, 0.06, ...., 3]
# x[i], y[i] → position at time t[i]

ani = FuncAnimation(fig, update, frames=len(t), interval=50)
plt.show()

