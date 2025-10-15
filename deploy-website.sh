#!/bin/bash

# Simple Site Blocker Website Deployment Script

echo "🚀 Building Simple Site Blocker Website..."

# Navigate to website directory
cd "$(dirname "$0")/website"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the website
echo "🔨 Building website..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Static files generated in ../public/"
    echo ""
    echo "🌐 To deploy:"
    echo "  1. Copy contents of ../public/ to your web server"
    echo "  2. Or use GitHub Pages, Netlify, or Vercel"
    echo ""
    echo "🔧 To preview locally:"
    echo "  npm run preview"
else
    echo "❌ Build failed!"
    exit 1
fi
