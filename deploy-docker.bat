@echo off
REM Build and deploy script for Nuxt 4 + Nginx Docker setup

echo Nuxt 4 + Nginx Docker Deployment Script
echo ========================================

if "%1"=="static" (
    echo Building static site version...
    docker-compose -f docker-compose.static.yml up -d --build
    echo Static site deployed on http://localhost
    goto :end
)

if "%1"=="ssr" (
    echo Building SSR version...
    docker-compose up -d --build
    echo SSR app deployed on http://localhost
    goto :end
)

echo Building SSR version by default...
docker-compose up -d --build
echo SSR app deployed on http://localhost

:end
pause