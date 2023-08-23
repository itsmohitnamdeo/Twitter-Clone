# Mini Twitter Clone - MERN Stack

A Twitter clone built using the MERN (MongoDB, Express, React, Node.js) stack. This project allows users to post tweets, follow/unfollow other users, and see a feed of tweets from users they follow.

## Screenshots

![screenshot-0](https://github.com/itsmohitnamdeo/Twitter-Clone/assets/85800451/1e7ab090-4882-4e2a-aa31-9a88177666ba)
![screenshot-3](https://github.com/itsmohitnamdeo/Twitter-Clone/assets/85800451/3f752d80-eb86-443e-bd6d-82fe798957f7)
![screenshot-2](https://github.com/itsmohitnamdeo/Twitter-Clone/assets/85800451/c2f00f10-1293-48a8-afb6-f1be0054245f)
![screenshot-1](https://github.com/itsmohitnamdeo/Twitter-Clone/assets/85800451/caa510fd-881a-427a-851d-57af07ca2f6f)

## Features

- User authentication and authorization
- Post tweets with text and media attachments
- Follow/unfollow other users
- User profile with avatar and bio
- News feed showing tweets from followed users
- Like and comment on tweets

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm
- MongoDB instance

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsmohitnamdeo/Twitter-Clone.git
   cd mini-twitter-clone
   
1. Install server dependencies:

   ```bash
   cd server
   npm install


2. Install client dependencies:

   ```bash
   cd ../client
   npm install


## Configuration

- Create a .env file in the server directory based on .env.example, and provide necessary configuration like database connection URL, JWT secret, etc.
- Configure client settings in client/src/config.js.

## Usage

- Start the server:
  
   ```bash
   cd server
   npm start


2. Start the client:

   ```bash
   cd client
   npm start


3. Access the app at http://localhost:3000.

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- React Router (for client-side routing)
- Redux (for state management)
- Passport (for authentication)
- Multer (for handling file uploads)
- Dotenv (for environment variables)
- JSON Web Token (JWT) (for secure authentication)


## Contributing
- Contributions are welcome! Please follow these guidelines:

- Fork the repository.
- Create a branch: git checkout -b feature/new-feature.
- Commit your changes: git commit -m 'Add a new feature'.
- Push to the branch: git push origin feature/new-feature.
- Open a pull request.
