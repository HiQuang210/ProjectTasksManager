# Project Task Management Web App

## Introduction
The Project Task Management Web App is a full-stack web application designed to facilitate task management within teams. It enables administrators to assign and manage tasks while allowing users to interact with their assignments efficiently. This system provides authentication, role-based access control, task prioritization, and collaboration features to streamline project workflows.

## Features

### Admin Features:

#### User Management:
- Create and manage admin accounts.
- Add and manage team members.

#### Task Assignment:
- Assign tasks to users or multiple team members.
- Update task details and track task progress.

#### Task Properties:
- Categorize tasks as "To Do," "In Progress," or "Completed."
- Set priority levels (High, Medium, Normal, Low).
- Add and manage sub-tasks.

#### Asset Management:
- Upload and manage task-related assets (images, documents).

#### User Account Control:
- Activate or disable user accounts.
- Permanently delete or archive tasks.

### User Features:

#### Task Interaction:
- Change task status ("In Progress" or "Completed").
- View detailed task information.

#### Communication:
- Add comments or chat within task activities.

### General Features:

#### Authentication and Authorization:
- Secure login and user authentication.
- Role-based access control (Admin, User).

#### Profile Management:
- Update user profiles.

#### Password Management:
- Change passwords securely.

#### Dashboard:
- View a summary of user activities.
- Filter tasks based on their status (To Do, In Progress, Completed).

## Technologies Used

### Frontend:
- React (Vite)
- Redux Toolkit for State Management
- Headless UI
- Tailwind CSS

### Backend:
- Node.js with Express.js

### Database:
- MongoDB for efficient and scalable data storage.
- Firebase for storing images.

## Setup Instructions

### Server Setup

#### Environment Variables
Create a `.env` file inside the `server` folder with the following variables:

```
MONGODB_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=8800  # You can change the port
NODE_ENV=development
```

#### Set Up MongoDB
1. Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).
2. Create an account or log in.
3. Create a new cluster and configure the settings.
4. Add a database user and whitelist your IP.
5. Get the MongoDB connection URL and update your `.env` file.

#### Steps to Run the Server

1. Open the project in a code editor.
2. Navigate to the `server` directory:
   ```sh
   cd server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. If configured correctly, you should see a message confirming that the server is running and the database is connected.

### Client Setup

#### Environment Variables
Create a `.env` file inside the `client` folder with the following variables:

```
VITE_APP_BASE_URL=http://localhost:8800  # Change if using a different port
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
```

#### Steps to Run the Client

1. Navigate to the `client` directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the client application:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.
