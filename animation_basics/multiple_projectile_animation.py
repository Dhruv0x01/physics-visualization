import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

# Given Data
v = 100
angle1 = 20
angle2 = 35
angle3 = 70
angle4 = 55
g = 9.8

# Angle to Radians
theta1 = np.radians(angle1)
theta2 = np.radians(angle2)
theta3 = np.radians(angle3)
theta4 = np.radians(angle4)

# Time array
T1 = (2*v*np.sin(theta1))/g
T2 = (2*v*np.sin(theta2))/g
T3 = (2*v*np.sin(theta3))/g
T4 = (2*v*np.sin(theta4))/g
T = max(T1, T2, T3, T4)
t = np.linspace(0, T, 100)

# Projectile motion equation
x1 = v*np.cos(theta1)*t
y1 = v*np.sin(theta1)*t - 0.5*g*t**2

x2 = v*np.cos(theta2)*t
y2 = v*np.sin(theta2)*t - 0.5*g*t**2

x3 = v*np.cos(theta3)*t
y3 = v*np.sin(theta3)*t - 0.5*g*t**2

x4 = v*np.cos(theta4)*t
y4 = v*np.sin(theta4)*t - 0.5*g*t**2

# Canvas
fig, ax = plt.subplots(figsize=(8, 6))

# Range of Graph
x1_max = max(x1)
x2_max = max(x2)
x3_max = max(x3)
x4_max = max(x4)
y1_max = max(y1)
y2_max = max(y2)
y3_max = max(y3)
y4_max = max(y4)
ax.set_xlim(0, 1.5*np.ceil(max(x1_max, x2_max, x3_max, x4_max)))
ax.set_ylim(0, 1.5*np.ceil(max(y1_max, y2_max, y3_max, y4_max)))

# Title
ax.set_title("Projectile Motion")

# X axis label
ax.set_xlabel("Distance")

# Y axis label
ax.set_ylabel("Height")

# grid
ax.grid()

# Time
time_text = ax.text(0.05, 0.85, '', transform=ax.transAxes, fontsize=12, bbox=dict(facecolor='white', alpha = 0.7))

# Ball [color][marker][line]
ball1, = ax.plot([], [], color='red', marker='o')
ball2, = ax.plot([], [], color='orange', marker='o')
ball3, = ax.plot([], [], color='blue', marker='o')
ball4, = ax.plot([], [], color='purple', marker='o')

# Trajectory trail
trail1, = ax.plot([], [], color='red')
trail2, = ax.plot([], [], color='orange')
trail3, = ax.plot([], [], color='blue')
trail4, = ax.plot([], [], color='purple')

def update(frame):
    ball1.set_data([x1[frame]], [y1[frame]])
    trail1.set_data(x1[:frame+1], y1[:frame+1])

    ball2.set_data([x2[frame]], [y2[frame]])
    trail2.set_data(x2[:frame+1], y2[:frame+1])

    ball3.set_data([x3[frame]], [y3[frame]])
    trail3.set_data(x3[:frame+1], y3[:frame+1])

    ball4.set_data([x4[frame]], [y4[frame]])
    trail4.set_data(x4[:frame+1], y4[:frame+1])

    time_text.set_text(f"Time: {t[frame]:.2f} s")

    return ball1, trail1, ball2, trail2, ball3, trail3, ball4, trail4, time_text

ani = FuncAnimation(fig, update, frames=len(t), interval=30, repeat=True)
plt.show()

