# CrowsDatingConnect

## Project Overview
CrowsDatingConnect is an innovative dating application designed to connect people from various backgrounds while focusing on user safety and an engaging experience.

## Features
- User Authentication: Secure sign-up and login options.
- Profile Creation: Users can create personalized profiles with photos and bios.
- Matchmaking Algorithm: A smart system to suggest potential matches.
- Messaging: In-app messaging capabilities to chat with matches.
- Safety Features: Reporting and blocking functionalities to ensure user security.

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Heroku/AWS

## Security Focus
CrowsDatingConnect prioritizes user security with a focus on:
- Data Encryption: All sensitive data is encrypted.
- Secure Authentication: Implementation of JWT for secure user sessions.
- Regular Security Audits: Frequent reviews of the code and dependencies to patch vulnerabilities.

## Setup Instructions
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/jessnjosh040508-crow/CrowsDatingConnect.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CrowsDatingConnect
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```env
   DATABASE_URL=<your_database_url>
   JWT_SECRET=<your_jwt_secret>
   ```

5. Start the application:
   ```bash
   npm run start
   ```

## API Documentation
### Authentication
- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### User Management
- **GET /api/users/:id**: Get user profile by ID.
- **PUT /api/users/:id**: Update user profile.

### Matchmaking
- **GET /api/matches**: Retrieve the user's matches.
- **POST /api/matches/send**: Send a match request.

### Messaging
- **GET /api/messages**: Get messages between users.
- **POST /api/messages/send**: Send a message to a match.

For detailed API responses, visit the [API Documentation](link-to-detailed-docs).
