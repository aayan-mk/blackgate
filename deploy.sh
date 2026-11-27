#!/bin/bash
set -e

echo "🚀 Starting automated deployment for Blackgate..."

cd /var/www/blackgate-app

# 1. Pull latest code from GitHub
echo "📥 Pulling latest changes from main..."
git pull origin main

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 3. Build frontend production bundle
echo "🔨 Building frontend..."
npm run build

# 4. Restart / Reload backend in PM2
echo "♻️ Reloading PM2 server..."
pm2 reload blackgate-api --update-env || pm2 start server.js --name "blackgate-api"

echo "✅ Deployment completed successfully!"
