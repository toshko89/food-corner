
const config = {
  development: {
    PORT: 3030,
    DB_CONNECTION_STRING: "mongodb+srv://TodorPetkov:VeryStrongPass@food-corner.imc4v.mongodb.net/food-corner?retryWrites=true&w=majority",
    COOKIE_NAME: 'X-Authorization',
    SECRET: 'My strong secret',
    SALT_ROUNDS: 10,
    CLOUDINARY: {
      cloud_name: 'dl72c1rli',
      api_key: '587398618388114',
      api_secret: 'p86tgv0IJxRETWEw2KsiiHLs4O8'
    },
    CORS: {
      origin: ['http://localhost:3000'],
      credentials: true
    }
  }
}

module.exports = config['development'];