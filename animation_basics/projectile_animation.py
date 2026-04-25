import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

v = 100
angle = 45
g = 9.8

theta = np.radians(angle)

# In this 2d projectile motion , total time of flight is T = 2v sinθ / g
T = (2 * v * np.sin(theta)) / g
t = np.linspace(0, T, 400)

x = v*np.cos(theta)*t
y = v*np.sin(theta)*t - 0.5*g*t**2

fig, ax = plt.subplots(figsize=(7, 6))

# Those lines set the visible range (limits) of the plot axes.
ax.set_xlim(0, 1.3*np.ceil(max(x)))
ax.set_ylim(0, 1.3*np.ceil(max(y)))


ax.set_title("Projectile Motion")
ax.set_xlabel("Distance")
ax.set_ylabel("Height")
ax.grid()

# Speed (resultant vector magnitude) text
resultant_speed_text = ax.text(0.05, 0.95, '', transform=ax.transAxes, fontsize=12, bbox = dict(facecolor='white', alpha=0.7))
# 0.05, 0.95 is the position (top-left corner)
# transform=ax.transAxes -> relative to plot and not data

# Horizontal Velocity magnitude text
horizontal_speed_text = ax.text(0.05, 0.90, '', transform=ax.transAxes, fontsize=12, bbox = dict(facecolor='white', alpha=0.7))

# Vertical Velocity magnitude text 
vertical_speed_text = ax.text(0.05, 0.85, '', transform=ax.transAxes, fontsize=12, bbox = dict(facecolor='white', alpha=0.7))

# Time
time_text = ax.text(0.05, 0.80, '', transform=ax.transAxes, fontsize=12, bbox = dict(facecolor='white', alpha=0.7))

# Ball
ball, = ax.plot([], [], 'ro')

#Trajectory trail
line, = ax.plot([], [], color='orange') 

# Vx and Vy vector arrow
vx_arrow = ax.quiver(0,0,0,0, color='blue', angles='xy', scale_units='xy', scale=1)
vy_arrow = ax.quiver(0,0,0,0, color='red', angles='xy', scale_units='xy', scale=1)

# Resultant vector Arrow 
arrow = ax.quiver(0, 0, 0, 0, color="green", angles = 'xy', scale_units = 'xy', scale=1)

# Controlling frame manually
current_frame = 0

# Reset button r
def on_key(event):
    global current_frame
    if event.key == 'r':
        current_frame = 0

fig.canvas.mpl_connect('key_press_event', on_key)

# Start/Stop on just clicking the screen
paused = False 

def on_click(event):
    global paused
    paused = not paused

fig.canvas.mpl_connect('button_press_event', on_click)

def update(frame):
    global current_frame

    if not paused:
        current_frame += 1
    
    # Prevents overflow
    if current_frame >= len(t):
        current_frame = len(t) - 1
    
    frame = current_frame

    if paused:
        return ball, line, arrow, resultant_speed_text, horizontal_speed_text, vertical_speed_text, time_text
    ball.set_data([x[frame]], [y[frame]])
    line.set_data(x[:frame+1], y[:frame+1])

    # Velocity components
    vx = v*np.cos(theta)
    vy = v*np.sin(theta) - g*t[frame]

    # Speed (Velocity magnitude) text
    resultant_speed = np.sqrt(vx**2 + vy**2)
    resultant_speed_text.set_text(f"Resultant velocity: {resultant_speed:.2f} m/s")
    horizontal_speed_text.set_text(f"Horizontal velocity: {vx:.2f} m/s")
    vertical_speed_text.set_text(f"Vertical velocity: {vy:.2f} m/s")
    
    # Time text
    time_text.set_text(f"Time: {t[frame]:.2f} s")

    # Move arrow to current position
    arrow.set_offsets([x[frame], y[frame]])
    vx_arrow.set_offsets([x[frame], y[frame]])
    vy_arrow.set_offsets([x[frame], y[frame]])

    scale_factor = 2

    # Horizontal only
    vx_arrow.set_UVC(vx*scale_factor, 0)

    # Vertical Only
    vy_arrow.set_UVC(0, vy*scale_factor)

    # Resultant vector
    arrow.set_UVC(vx*scale_factor, vy*scale_factor)

    return ball, line, arrow, resultant_speed_text, horizontal_speed_text, vertical_speed_text, time_text

ani = FuncAnimation(fig, update, frames=len(t), interval=30, repeat=True)


plt.show()




