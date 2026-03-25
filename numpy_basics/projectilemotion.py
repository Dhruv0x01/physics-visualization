import numpy as np

# Initial conditions
v = 20           # velocity (m/s)
angle = 45       # angle (degrees)
g = 9.8          # gravity (m/s^2)

# Convert angles to radians
theta = np.radians(angle)

# Time array
t = np.linspace(0, 10, 50)

# Projectile motion equations
x = v * np.cos(theta) * t
y = v * np.sin(theta) * t - 0.5*g*t**2

# Output (previews) (first 5 element of the array)
print("X positions: ", x[:5])  
print("Y positions: ", y[:5])