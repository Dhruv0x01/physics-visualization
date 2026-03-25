from matplotlib.animation import FuncAnimation
import matplotlib.pyplot as plt

fig, ax = plt.subplots()

ax.set_xlim(0, 10)
ax.set_ylim(0, 10)

ax.set_title("Basic Animation")
ax.grid()

point, = ax.plot([], [], 'ro')

def update(frame):
    x = frame
    y = frame 

    point.set_data([x], [y])

    return point, 

ani = FuncAnimation(fig, update, frames=10, interval = 500)
plt.show()