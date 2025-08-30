# Memoir

A personal journaling app built with MERN stack (MongoDB, Express, React, Node.js) for capturing daily thoughts and experiences.

## Features

- User authentication with JWT
- Create, edit, and delete journal entries
- Search functionality
- Responsive design
- Secure data storage

## Tech Stack

- **Frontend:** React.js, TailwindCSS, DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT tokens

## Quick Start

### Backend
```bash
cd backend
npm install
# Create .env file with:
# PORT=3000
# MONGO_URI=mongodb://localhost:27017/daybook
# JWT_SECRET=your_secret_key
# FRONTEND_URL=http://localhost:5173
npm start
```

### Frontend
```bash
cd frontend
npm install
# Create .env file with:
# VITE_BACKEND_URL=http://localhost:3000
npm run dev
```

## Author

**Ashish Rolan** - [GitHub](https://github.com/ashish7472)
