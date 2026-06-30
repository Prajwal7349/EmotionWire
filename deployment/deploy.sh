#!/bin/bash
# Simple Deployment Script for EmotionWire Next.js on EC2
# Usage: ./deploy.sh

echo "Starting Deployment Process..."

# 1. Pull latest code (Uncomment if using Git)
# echo "Pulling from Git..."
# git pull origin main

# 2. Install Dependencies
echo "Installing Node Dependencies..."
npm install --production=false

# 3. Build Next.js App
echo "Building the Application..."
npm run build

# 4. Restart PM2 Process
echo "Restarting PM2 Cluster..."
# If not running yet, this will fail but trying to restart is safe. We can use start or reload.
pm2 start ecosystem.config.js || pm2 reload emotionwire-website

# 5. Save PM2 configuration to restart automatically continuously
pm2 save

echo "Deployment Successful! The application is running."
