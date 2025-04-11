# Student Job Tracker

A React application for students to track their job applications during the job search process.

## Features

- **User Authentication**: Register and login functionality with JWT
- **Track Job Applications**: Add, view, update, and delete job applications
- **Application Status Management**: Mark applications as Applied, Interview, Offer, or Rejected
- **Filter Applications**: Filter by status or application date
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**:
  - React (with Hooks)
  - Redux Toolkit for state management
  - React Router for navigation
  - CSS for styling

- **Backend**:
  - RESTful API (hosted on render.com)
  - JWT authentication

## Installation and Setup

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

### Steps to Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Sahil7475/Student-Job-Tracker-Frontend.git
   cd Student-Job-Tracker-Frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
student-job-tracker/
├── public/
├── src/
│   ├── api/
│   │   └── interceptors.js
│   │   └── authApi.js
│   │   └── jobApi.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   └── jobs/
│   │       ├── AddJobForm.jsx
│   │       ├── JobCard.jsx
│   │       ├── JobList.jsx
│   │       └── StatusFilter.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── AddJob.jsx
│   │   └── JobApplications.jsx
│   ├── state/
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   └── jobSlice.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Usage

### Authentication

1. **Register**: Create a new account by providing email and password
2. **Login**: Access your account using your credentials

### Managing Job Applications

1. **Add Applications**: Fill out the form with company name, role, status, date, and link
2. **View Applications**: See all your applications in a card layout
3. **Update Status**: Change the status of your application as you progress
4. **Delete Applications**: Remove applications you no longer want to track

### Filtering

1. **Status Filter**: Filter applications by their current status (Applied, Interview, Offer, Rejected)
2. **Date Filter**: Find applications submitted on a specific date

## API Endpoints

The application interacts with the following API endpoints:

- **Authentication**:
  - POST `/api/auth/register`: Register a new user
  - POST `/api/auth/login`: Login a user

- **Job Applications**:
  - GET `/api/`: Get all job applications
  - GET `/api/?status=<status>`: Filter jobs by status
  - GET `/api/?date=<date>`: Filter jobs by date
  - POST `/api/add`: Add a new job application
  - PATCH `/api/:id/status`: Update job application status
  - DELETE `/api/:id`: Delete a job application
