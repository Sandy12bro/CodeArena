# CodeArena

CodeArena â A placement preparation platform with WhatsApp-based daily tasks, personalized roadmaps, and AI-powered feedback for students.

## Project Structure

```
CodeArena/
âââ frontend/           # Client-side web application
    â index.html       # Main landing page
    â login.html       # User login page
    â signup.html      # User registration page
    â dashboard.html   # User dashboard
    â profile.html     # User profile management
    â style.css        # Main styling and responsive design
    â script.js        # Frontend JavaScript functionality
    â app.js           # Main application logic
    â firebase.js      # Firebase authentication
    â images/          # Image assets
âââ backend/           # Server-side application
    â server.js        # Express.js server with MongoDB
    â package.json     # Backend dependencies
    â package-lock.json # Dependency lock file
    â models/          # Database models
        â User.js      # User model for MongoDB
âââ .git/              # Git version control
âââ .gitignore         # Git ignore rules
âââ LICENSE            # Project license
âââ README.md          # This file
```

## Features

- **Authentication System**: Firebase-based user authentication
- **User Management**: Complete signup, login, and profile management
- **MongoDB Integration**: User data persistence with Mongoose
- **Responsive Design**: Modern, mobile-friendly interface
- **User Dashboard**: Personalized learning dashboard
- **Profile Management**: Update user information and preferences
- **RESTful API**: Complete backend API for user operations
- **Modular Structure**: Clean separation of client and server code

## Getting Started

### Prerequisites
- Node.js installed on your system
- MongoDB running locally or access to MongoDB Atlas
- Firebase project configured (for authentication)

### Frontend Setup
1. Navigate to the frontend directory: `cd frontend`
2. Configure Firebase in `firebase.js` with your project credentials
3. Open `index.html` in your web browser
4. Navigate through login/signup pages to access the dashboard

### Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Ensure MongoDB is running on `mongodb://127.0.0.1:27017/codearena`
4. Start the server: `npm start`
5. Server will run on `http://localhost:5000`

### Development Mode
For backend development with auto-restart:
```bash
cd backend
npm install
npm start
```

## API Endpoints

- `GET /` - Server status message
- `POST /signup` - Register new user
- `PUT /user/:email` - Update user profile
- `GET /user/:email` - Get user profile data

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Firebase Authentication
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: Firebase Authentication
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Modern CSS with responsive design
- **Version Control**: Git

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to your branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
