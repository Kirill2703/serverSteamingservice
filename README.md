# Streaming Service Backend

Backend service for a streaming platform, built with Node.js and Express.js.

## 🚀 Technologies

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **File Upload:** Multer
- **Email Notifications:** Nodemailer
- **Password Hashing:** Bcrypt
- **CORS:** cors

## 📁 Project Structure

```
├── controllers/     # Request handlers
├── models/         # MongoDB data models
├── routes/         # API routes
├── midlleWare/     # Middleware
├── db/            # Database configuration
├── mail/          # Email configuration
├── public/        # Static files
└── index.mjs      # Application entry point
```

## 🛠 Installation and Setup

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Environment Setup:
   - Copy `.env.example` to `.env`
   - Update the following environment variables in `.env`:

```bash
# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRES_IN=24h

# Email Configuration
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

# Server Configuration
PORT=4000
NODE_ENV=development

# File Upload Configuration
UPLOAD_DIR=public/uploads
MAX_FILE_SIZE=5242880

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Security
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

4. Start the server:

```bash
npm start
```

The server will be available at: `http://localhost:4000`

## 📚 API Endpoints

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/forgot-password` - Password recovery

### Movies

- `GET /movies` - Get all movies
- `POST /movies` - Create a new movie
- `GET /movies/:id` - Get movie details
- `PUT /movies/:id` - Update movie information
- `DELETE /movies/:id` - Delete a movie

### Actors

- `GET /actors` - Get all actors
- `POST /actors` - Create a new actor
- `GET /actors/:id` - Get actor details
- `PUT /actors/:id` - Update actor information
- `DELETE /actors/:id` - Delete an actor

### Filmmakers

- `GET /filmmakers` - Get all filmmakers
- `POST /filmmakers` - Create a new filmmaker
- `GET /filmmakers/:id` - Get filmmaker details
- `PUT /filmmakers/:id` - Update filmmaker information
- `DELETE /filmmakers/:id` - Delete a filmmaker

### File Upload

- `POST /upload-img` - Upload images
- `POST /upload-photo-actor` - Upload actor photos
- `POST /upload-filmmaker-photo` - Upload filmmaker photos
- `POST /upload-img-gallery` - Upload gallery images

## 🔒 Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS for secure frontend communication
- Input validation
- SQL injection protection through Mongoose

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📧 Contact

[Your Name] - [Your Email]

Project Link: [Repository URL]
