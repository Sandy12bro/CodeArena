#!/bin/bash

# Navigate to backend and install dependencies
echo "Installing backend dependencies..."
cd backend
npm install

# Start the server
echo "Starting CodeArena backend..."
npm start
