# MyBackend API

A RESTful backend API built with Node.js, Express, and MongoDB. This backend provides authentication, student management, user management, and email functionality.

## Features

- 🔐 User authentication with JWT
- 👥 User management with image upload
- 📚 Student CRUD operations with filtering
- 📧 Email sending functionality
- 🔒 Protected routes with authentication middleware
- 📁 File upload support (images)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose v9.0.2
- **Authentication**: JWT (JSON Web Tokens) & Bcrypt
- **File Upload**: Multer v2.0.2
- **Email**: Nodemailer v7.0.12
- **Other**: CORS, dotenv

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mybackend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
DB_URL=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-secret-key-here
PORT=7007
```

4. Start the server:
```bash
npm start
# or with nodemon for development
npx nodemon index.js
```

The server will run on `http://localhost:7007`

## Project Structure

```
mybackend/
├── authMiddleware/
│   └── authmiddleware.js       # JWT authentication middleware
├── controllers/
│   ├── authController.js       # Authentication logic
│   ├── mailsenderController.js # Email sending logic
│   ├── studentsController.js   # Student CRUD operations
│   └── userController.js       # User management logic
├── models/
│   ├── authModel.js           # User authentication schema
│   ├── studentsModels.js      # Student schema
│   └── userModel.js           # User schema
├── routers/
│   ├── authRouter.js          # Auth routes
│   ├── mailsenderRouter.js    # Mail routes
│   ├── studentsRouters.js     # Student routes
│   └── userRouter.js          # User routes
├── uploads/                   # File upload directory
├── index.js                   # Application entry point
├── package.json
└── .env                       # Environment variables
```

## API Endpoints

### Authentication (`/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/add-newuser` | Register new user | No |
| POST | `/auth/login-newuser` | Login user | No |
| GET | `/auth/get-profile` | Get user profile | Yes |

**Register User**
```json
POST /auth/add-newuser
Content-Type: application/json

{
  "userName": "John Doe",
  "userEmail": "john@example.com",
  "userPassword": "password123"
}
```

**Login User**
```json
POST /auth/login-newuser
Content-Type: application/json

{
  "userEmail": "john@example.com",
  "userPassword": "password123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "login success"
}
```

**Get Profile** (Protected Route)
```json
GET /auth/get-profile
Authorization: Bearer <your-jwt-token>
```

### Students (`/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/get-students` | Get all students | No |
| POST | `/add-students` | Add new student | No |
| GET | `/get-student-byid/:userid` | Get student by ID | No |
| GET | `/get-std-details-withfilter` | Get students with filters | No |
| PUT | `/update-students/:id` | Update student by ID | No |
| PUT | `/update-students-status` | Update student status | No |

**Get Students with Filters**
```
GET /get-std-details-withfilter?stdBranch=MECH&stdCollege=AUS&stdCgpa=7.0
```

### Users (`/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/user/add-user` | Add user with image | No |

**Add User with Image**
```
POST /user/add-user
Content-Type: multipart/form-data

Form Data:
- userimage: <image-file> (png, jpg, jpeg, svg - max 2MB)
- Other user fields...
```

### Mail (`/mail`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/mail/send-mail` | Send email | No |

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. 

1. Register or login to receive a JWT token
2. Include the token in the Authorization header for protected routes:
```
Authorization: Bearer <your-jwt-token>
```

**Token Expiration**: 5 minutes

## File Upload

The API supports image uploads with the following specifications:

- **Allowed formats**: PNG, JPG, JPEG, SVG
- **Maximum file size**: 2MB
- **Upload directory**: `/uploads`
- **Access uploaded files**: `http://localhost:7007/uploads/<filename>`

## Database Models

### User (Authentication)
- userName (String, required)
- userEmail (String, required, unique)
- userPassword (String, required, hashed)

### Student
- (Schema details in studentsModels.js)

### User (Profile)
- (Schema details in userModel.js)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DB_URL` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT signing | Yes |
| `PORT` | Server port (default: 7007) | No |

## Security Features

- ✅ Password hashing with bcrypt (10 salt rounds)
- ✅ JWT token-based authentication
- ✅ Protected routes with middleware
- ✅ CORS enabled
- ✅ File type validation for uploads
- ✅ File size limits

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request (e.g., user already exists)
- `401` - Unauthorized (e.g., wrong password)
- `404` - Not Found (e.g., user not found)
- `500` - Internal Server Error

## Development

The project uses ES6 modules (`"type": "module"` in package.json).

**Start with nodemon for auto-reload:**
```bash
npx nodemon index.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC

## Author

Your Name

---

**Base URL**: `http://localhost:7007`

