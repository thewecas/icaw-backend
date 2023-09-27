# Twitter-like App

A Twitter-like application built with Node.js, Express.js, MongoDB, Passport.js, JWT authentication, and Joi input validation.

## Features

- User Registration: Users can register an account with the application.
- User Login: Registered users can log in to their accounts.
- Password Update: Logged-in users can update their account passwords.
- Account Deletion: Logged-in users can delete their accounts.
  .
- Posting Tweets: Users can create new tweets.
- Editing Tweets: Users can edit their own tweets.
- Deleting Tweets: Users can delete their own tweets.
- Liking Tweets: Users can like tweets.
- Retweeting: Users can retweet tweets.
- Fetching Tweets: Users can retrieve tweets.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thewecas/icaw-backend.git
   ```

2. Change to the project directory:

   ```bash
   cd icaw-backend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set environment variables:

   - Create a `.env` file in the root directory of the project.
   - Define the following environment variables in the `.env` file:

     ```plaintext
     PORT=3000
     DATABASE_URL=mongodb://localhost/twitter_like_app
     ACCESS_TOKEN_SECRET=your_jwt_secret
     ```

     Replace `your_jwt_secret` with your own secret key for JWT token generation.

5. Start the application:

   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

- `POST /api/auth/register` : Register a new user.
- `POST /api/auth/login` : Log in an existing user.
- `PUT /api/user/password` : Update the user's password.
- `DELETE /api/user/delete` : Delete the user's account.
  .
- `GET /api/tweets/:id` : Get a single tweet.
- `GET /api/tweets/user` : Get all tweets of the current user.
- `GET /api/tweets` : Get all tweets.
- `POST /api/tweets` : Create a new tweet.
- `PUT /api/tweets/:id` : Update a tweet.
- `DELETE /api/tweets/:id` : Delete a tweet.
- `POST /api/tweets/:id/like` : Like a tweet.
- `POST /api/tweets/:id/retweet` : Retweet a tweet.

## Authentication

Authentication is implemented using Passport.js, which provides a flexible and modular approach to authentication in Node.js applications. Passport.js is integrated with the application to handle user authentication using JWT (JSON Web Tokens).

## Validation

Input validation is performed using the Joi library. Requests are validated before processing to ensure the correctness and integrity of the data.

## Branches

- `master` : Has the basic functionality

- `master+jwt` : Implemented the authentication using `jwt`

- `master-userEdit` : Added option to update password & delete account

- `master+passport` : Implemented authentication using `passportjs` and `jwt`

- `master-refactor` : Refactored the code.
