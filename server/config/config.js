const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    PORT: process.env.PORT || 3030,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    COOKIE_NAME: 'X-Authorization',
    SECRET: 'My strong secret',
    SALT_ROUNDS: 10,
    CLOUDINARY: {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET
    },
    CORS: {
      origin: ['http://localhost:3000'],
      credentials: true
    }
  },
  production: {
    PORT: process.env.PORT || 80,
    DB_CONNECTION: process.env.DB_CONNECTION_STRING,
    COOKIE_NAME: 'X-Authorization',
    SECRET: process.env.JWT_SECRET,
    SALT_ROUNDS: 10,
    CLOUDINARY: {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_KEY,
      api_secret: process.env.CLOUDINARY_SECRET
    },
    CORS: {
      origin: [],
      credentials: true
    }
  },
}

module.exports = config[env];