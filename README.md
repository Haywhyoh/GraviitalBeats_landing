# GraviitalBeats Landing Page

A modern, interactive landing page for GraviitalBeats - the future of beat licensing.

## Features

- Interactive UI with micro-interactions for enhanced user experience
- Responsive design for all device sizes
- Built with Vite and React
- Support for both fiat and crypto payments
- Waitlist form collection

## Technology Stack

- React
- Vite
- Tailwind CSS
- TypeScript
- React Hook Form with Zod validation

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/GraviitalBeats_landing.git
cd GraviitalBeats_landing
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## Deployment

This project is configured with GitHub Actions for automated deployment.

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions workflow automatically:
   - Builds the application
   - Deploys the build to the production server at `graviitalbeats.com`
   - Sets up HTTPS with Let's Encrypt for both `graviitalbeats.com` and `www.graviitalbeats.com`
   - Configures Nginx for serving the application with proper www to non-www redirects
   - Verifies the deployment is working correctly

### Manual Deployment

If you need to deploy manually:

1. Build the project
```bash
npm run build
```

2. Transfer the contents of the `dist` directory to your server
3. Configure your web server to serve the files

## Server Configuration

The deployment process automatically configures Nginx with:

- HTTPS support via Let's Encrypt
- Proper caching headers for static assets
- Gzip compression
- Security headers
- HTTP to HTTPS redirects

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | API endpoint for backend services |
| `VITE_APP_VERSION` | Automatically set to the git commit SHA during deployment |

## Monitoring

The deployment sets up basic uptime monitoring via a cron job that checks the site status every 5 minutes and logs the results.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Proprietary - All Rights Reserved
