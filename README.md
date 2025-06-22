# ROS2 Robot Web UI

A modern Web UI built with **React** for controlling and visualizing data from a **ROS2-based luminance measurement robot**.  
This interface communicates with the robot via **WebSocket** using **rosbridge_suite**, enabling real-time data exchange between the browser and ROS2 topics/services.

## Features

- 🧠 Real-time communication with ROS2 via `rosbridge_suite`
- 💡 Visual display of brightness sensor readings
- 🔌 WebSocket-based connection to ROS2
- 🕹️ Remote control interface for robot movement (if applicable)
- 📊 Extendable for custom sensors and controls

## Technologies

- React + TypeScript
- MUI (Material UI)
- ROS2 (Foxy/Humble/etc.)
- rosbridge_suite (for WebSocket-ROS2 bridge)
- roslibjs


## Setup Instructions

### Prerequisites

- ROS2 installed on the robot system
- `rosbridge_suite` running and listening on WebSocket port (default: `9090`)
- Node.js ≥ 18

### Install Dependencies

```bash
git clone https://github.com/JamesXiaoMo/ros2_robot_web_ui.git
cd ros2_robot_web_ui
npm install
npm run dev
```
## Author
Designed by WU YUNGANG in Fukuyama University, Oki Lab, 2025