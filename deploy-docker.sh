#!/bin/bash
# Build and deploy script for Nuxt 4 + Nginx Docker setup

echo "Nuxt 4 + Nginx Docker Deployment Script"
echo "========================================"

if [ "$1" = "static" ]; then
    echo "Building static site version..."
    docker-compose -f docker-compose.static.yml up -d --build
    echo "Static site deployed on http://localhost"
elif [ "$1" = "ssr" ] || [ "$1" = "" ]; then
    echo "Building SSR version..."
    docker-compose up -d --build
    echo "SSR app deployed on http://localhost"
else
    echo "Usage: $0 [static|ssr]"
    echo "  static - Deploy as static site (default)"
    echo "  ssr    - Deploy with server-side rendering"
fi