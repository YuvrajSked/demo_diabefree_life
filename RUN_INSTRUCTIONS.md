# DiabeFree Life - Full Stack Application

A monolithic web application with Rails 8 backend and Next.js frontend for diabetes reversal programs.

## Architecture

- **Backend**: Rails 8 API with PostgreSQL database
- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **API Communication**: RESTful API with CORS enabled

## Prerequisites

Make sure you have the following installed:
- Ruby 3.2.2 (check with `ruby -v`)
- Rails 8.0+ (check with `rails -v`)
- Node.js 18+ (check with `node -v`)
- PostgreSQL (check with `psql --version`)
- Bundler gem (`gem install bundler`)

## Setup Instructions

### 1. Backend Setup (Rails API)

```bash
# Navigate to the project root
cd /home/developer/diabefree_life/diabefree_life

# Install Ruby dependencies
bundle install

# Setup database (make sure PostgreSQL is running)
rails db:create
rails db:migrate
rails db:seed

# Start the Rails server (will run on port 3000)
rails server
```

The Rails API will be available at: `http://localhost:3000`

### 2. Frontend Setup (Next.js)

Open a new terminal window/tab:

```bash
# Navigate to the frontend directory
cd /home/developer/diabefree_life/diabefree_life/frontend

# Install Node.js dependencies
npm install

# Start the Next.js development server (will run on port 3001)
npm run dev -- --port 3001
```

The Next.js frontend will be available at: `http://localhost:3001`

## API Endpoints

The Rails backend provides the following API endpoints:

- `GET /api/v1/testimonials` - Get all testimonials
- `GET /api/v1/testimonials/:id` - Get specific testimonial
- `GET /api/v1/programs` - Get all active programs
- `GET /api/v1/programs/:id` - Get specific program

## Available Pages

### Frontend Routes:
- `/` - Home page with hero section, featured testimonials, and programs
- `/testimonials` - Complete testimonials page with success stories
- `/programs` - Programs page with pricing and features

### Backend Admin:
- `/admin` - ActiveAdmin interface (if needed)
- Login: `admin@example.com` / `password` (development only)

## Development Workflow

### Running Both Servers

You need to run both servers simultaneously:

1. **Terminal 1 - Rails Backend:**
   ```bash
   cd /home/developer/diabefree_life/diabefree_life
   rails server
   ```

2. **Terminal 2 - Next.js Frontend:**
   ```bash
   cd /home/developer/diabefree_life/diabefree_life/frontend
   npm run dev -- --port 3001
   ```

### Making Changes

- **Backend changes**: Modify Rails controllers, models, or routes. Server will auto-reload.
- **Frontend changes**: Modify Next.js pages or components. Hot reload is enabled.
- **Database changes**: Create migrations with `rails generate migration` and run `rails db:migrate`

## Configuration

### Backend Configuration
- Database: `config/database.yml`
- CORS: `config/initializers/cors.rb`
- Routes: `config/routes.rb`

### Frontend Configuration
- API URL: `frontend/config.ts`
- Tailwind: `frontend/tailwind.config.js`
- Next.js: `frontend/next.config.ts`

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Make sure Rails server is running and CORS is configured properly
2. **Database Connection**: Ensure PostgreSQL is running and database exists
3. **Port Conflicts**: Rails runs on 3000, Next.js on 3001 by default
4. **API Connection**: Check that `config.apiUrl` points to the correct Rails server URL

### Checking Services:

```bash
# Check if Rails server is running
curl http://localhost:3000/api/v1/testimonials

# Check if Next.js is running
curl http://localhost:3001

# Check database connection
rails console
# Then: Testimonial.count
```

## Sample Data

The application comes with pre-seeded data:
- 5 testimonials based on the reference website
- 3 diabetes reversal programs (Basic, Comprehensive, Premium)

## Next Steps

1. Start both servers as described above
2. Visit `http://localhost:3001` to see the frontend
3. Navigate through the pages to see the dynamic data
4. Check the API endpoints directly at `http://localhost:3000/api/v1/testimonials`

## Production Deployment

For production deployment, you'll need to:
1. Set up environment variables for database and API URLs
2. Build the Next.js application (`npm run build`)
3. Configure a reverse proxy (nginx) to serve both applications
4. Set up SSL certificates
5. Configure production database settings
