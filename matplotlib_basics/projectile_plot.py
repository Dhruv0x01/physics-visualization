import numpy as np
import matplotlib.pyplot as plt

def projectilemotion(v, angle, g=9.8):
    theta = np.radians(angle)
    t = np.linspace(0, 5, 100)

    x = v*np.cos(theta)*t
    y = v*np.sin(theta)*t - 0.5*g*t**2

    return t, x, y

# 1. Same Graph (multiple trajectories)
def plot_multiple_trajectories():
    t, x1, y1 = projectilemotion(20, 45)
    _, x2, y2 = projectilemotion(30, 60)

    plt.figure(figsize=(8,4))
    plt.plot(x1, y1, label = "Trajectory 1")
    plt.plot(x2, y2, label = "Trajectory 2")

    plt.xlabel("Horizontal Distance(m)")
    plt.ylabel("Vertical Distance(m)")
    plt.title("Projectile Motion")
    plt.legend()
    plt.grid()

    plt.show()

# 2. Subplots version
def plot_subplots():
    t, x, y = projectilemotion(20, 45)

    fig, ax = plt.subplots(2, figsize=(8, 6))

    ax[0].plot(x, y)
    ax[0].set_title("Trajectory")
    ax[0].set_xlabel("Distance")
    ax[0].set_ylabel("Height")

    ax[1].plot(t, y)
    ax[1].set_title("Height vs Time")
    ax[1].set_xlabel("Time")
    ax[1].set_ylabel("Height")

    for a in ax:
        a.grid()
    
    plt.tight_layout()
    plt.show()

if __name__ == "__main__":
    plot_multiple_trajectories()
    plot_subplots()
    

    