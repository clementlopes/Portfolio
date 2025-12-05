# Docker Deployment for Nuxt 4 App

This project includes Docker configurations to deploy your Nuxt 4 application with nginx.

## Available Docker Configurations

### 1. Server-Side Rendered (SSR) Deployment
Uses Nuxt's server mode with nginx as a reverse proxy.

- `Dockerfile` - Builds the Nuxt SSR application
- `docker-compose.yml` - Sets up nginx and Nuxt SSR app
- `nginx.conf` - Nginx reverse proxy configuration

### 2. Static Site Deployment
Uses Nuxt's static generation with nginx as a static file server.

- `Dockerfile.static` - Builds a static Nuxt site served by nginx
- `docker-compose.static.yml` - Single container setup for static site
- `nginx-static.conf` - Nginx static file server configuration

## Setup Instructions

### For SSR Deployment:

1. Build and start the containers:
```bash
docker-compose up -d --build
```

2. Your app will be available at `http://localhost`

### For Static Site Deployment:

1. Build and start the container:
```bash
docker-compose -f docker-compose.static.yml up -d --build
```

2. Your app will be available at `http://localhost`

## Notes

- The SSR setup allows for dynamic content, API routes, and server-side rendering
- The Static site setup provides better performance and is easier to scale but doesn't support server-side rendering for dynamic content
- Both configurations include security headers, gzip compression, and proper caching headers
- For HTTPS in production, add SSL certificates to the `ssl/` directory and update the nginx configurations

## Environment Variables

If your application requires environment variables, create a `.env` file in the project root and update the docker-compose files to reference it.