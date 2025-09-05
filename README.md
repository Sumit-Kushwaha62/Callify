## Video Calling Web App

### A real-time video calling application built with WebRTC, React, Node.js, Express, and Socket.io.
The app supports 1:1 and group video calls, screen sharing, and chat messaging with a secure authentication system.

## Features

- User Authentication (with bcrypt + MongoDB)

- Video Calling (powered by WebRTC & Socket.io signaling)

- Screen Sharing (share entire screen or specific window)

- Real-time Chat inside video rooms

- Cross-platform support (works on all modern browsers)

- Modern UI with React & Material UI

- Scalable Signaling Server with Socket.io

## Tech Stack
### Frontend (React)

- React 18

- Material UI (MUI)

- React Router v6

- ocket.io-client

- Axios (REST API calls)

### Backend (Node.js + Express)

- Express.js (API + signaling server)

- MongoDB with Mongoose

- Bcrypt (password hashing)

- Crypto (secure tokens)

- Socket.io (real-time signaling)

- CORS handling

### WebRTC (Core of Video Calls)

- Peer-to-peer audio/video streaming

- Screen sharing API integration

## Project Structure
```
video-calling-app/
│── backend/         # Node.js + Express + MongoDB API + Socket.io server
│   ├── src/
│   │   ├── app.js   # Main server file
│   │   ├── models/  # Database models
│   │   ├── routes/  # API routes
│   │   └── socket/  # Socket.io + WebRTC signaling logic
│   └── package.json
│
│── frontend/        # React + MUI client
│   ├── src/
│   │   ├── components/   # Reusable UI Components
│   │   ├── pages/        # Pages (Login, Dashboard, Call Room, etc.)
│   │   ├── hooks/        # Custom hooks for WebRTC
│   │   └── App.js
│   └── package.json
│
└── README.md


```

⚙️ Installation & Setup
1️⃣ Clone Repository


git clone https://github.com/your-username/video-calling-app.git
cd video-calling-app



2️⃣ Backend Setup


cd backend
npm install



