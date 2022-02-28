const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const config = require('./config/config.js');
const mongo = require('./config/mongo.js');
const cloudinary = require('cloudinary').v2;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(config.CORS));
app.use(cookieParser());

mongo()
.then(()=>{
  cloudinary.config(config.CLOUDINARY);
  app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));
})
.catch((err)=>{
  console.log(err);
  throw new Error(err);
});
