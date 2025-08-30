# Memoir

A secure and user-friendly personal journaling application built with the MERN stack (MongoDB, Express, React, and Node.js). Memoir allows users to create, manage, and preserve their daily thoughts and experiences in a private, distraction-free environment.

## 🚀 Features

- **User Authentication:** Secure login and registration with JWT tokens
- **Personal Journaling:** Create, read, update, and delete personal entries
- **Responsive Design:** Modern UI built with React and TailwindCSS
- **Search Functionality:** Find entries by title or content
- **Profile Management:** Update personal information securely
- **Data Security:** MongoDB with encrypted authentication

## 🛠️ Tech Stack

- **Frontend:** React.js with TailwindCSS & DaisyUI
- **Backend:** Node.js with Express.js
- **Authentication:** JWT with HTTP-only secure cookies
- **State Management:** Redux Toolkit (RTK) and RTK Query
- **Database:** MongoDB with Mongoose ODM
- **Build Tool:** Vite

## 📁 Project Structure

```
memoir/
├── backend/                    # Server-side code
│   ├── src/
│   │   ├── config/            # Database configuration
│   │   ├── controllers/       # Request handlers
│   │   ├── middleware/        # Authentication middleware
│   │   ├── models/            # Database schemas
│   │   ├── routes/            # API routes
│   │   ├── utils/             # Helper functions
│   │   └── index.js           # Server entry point
│   └── package.json
├── frontend/                   # Client-side code
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Application pages
│   │   ├── redux/             # State management
│   │   └── main.jsx           # App entry point
│   └── package.json
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Git

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashish7472/Memoir.git
   cd Memoir/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the backend directory:
   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/daybook
   JWT_SECRET=your_jwt_secret_here
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the server:**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 📚 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `PUT /api/auth/change-password` - Change password

### User Management
- `GET /api/users/me` - Get user profile
- `PUT /api/users/me` - Update user profile

### Journal Entries
- `POST /api/entries` - Create new entry
- `GET /api/entries` - Get all entries
- `GET /api/entries/:id` - Get specific entry
- `PATCH /api/entries/:id` - Update entry
- `DELETE /api/entries/:id` - Delete entry
- `GET /api/entries/search?text=` - Search entries

## 🔧 Development

### Running Tests
```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm run lint
```

### Building for Production
```bash
# Frontend
cd frontend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Ashish Rolan**
- GitHub: [@ashish7472](https://github.com/ashish7472)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for secure personal journaling
- Special thanks to the open-source community
