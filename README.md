# Node.js Authentication

This repository contains a full-stack authentication project built with Node.js and React. The project consists of an Express.js backend API and a React frontend application.

## Features

- User registration (Signup)
- User login (Login)
- Password hashing (bcryptjs)
- MongoDB database integration
- CORS support
- Secure configuration with environment variables
- Responsive design (Tailwind CSS)

## Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- CORS

## Install

Clone the repository:

```bash
git clone https://github.com/muratkazma0/node-authentication
cd node-authentication
```

## Setup

### Client (Frontend) Setup

```bash
cd client
npm install
```

**Create client/.env file:**

```env
VITE_API_BASE_URL=http://localhost:3001
```

### Server (Backend) Setup

```bash
cd server
npm install
```

**Create server/.env file:**

```env
PORT=3001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0
```

## Run

### Start the Server

```bash
cd server
npm start
```

Server will run on `http://localhost:3001`.

### Start the Client

```bash
cd client
npm run dev
```

Client will run on `http://localhost:5173`.

## API Endpoints

### Authentication Endpoints

- `POST /login` — User login

  - Body: `{ email, password }`
  - Response: `"Login successful!"` or error message

- `POST /signup` — User registration
  - Body: `{ name, email, password }`
  - Response: User object or error message

## Project Structure

```
node-authentication/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx        # Main application
│   │   ├── Login.jsx      # Login page
│   │   ├── Signup.jsx     # Registration page
│   │   └── Home.jsx       # Home page
│   ├── package.json
│   └── .env              # Client environment variables
├── server/                # Express backend
│   ├── models/
│   │   └── Employee.js    # MongoDB model
│   ├── index.js          # Main server file
│   ├── package.json
│   └── .env              # Server environment variables
└── README.md
```

## Environment Variables

### Client (.env)

```env
VITE_API_BASE_URL=http://localhost:3001
```

### Server (.env)

```env
PORT=3001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0
```

## Security

- Passwords are hashed with bcryptjs
- Sensitive information protected with environment variables
- CORS configuration
- MongoDB connection string stored securely

## Development

### Server commands

```bash
cd server
npm start          # Run in production mode
npm run dev        # Run in development mode (nodemon)
```

### Client commands

```bash
cd client
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview built application
```

