const cloudinary = require('cloudinary');

const cloudinaryUpload = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(image, (err, response) => {
      if (err) return reject(err);
      return resolve(response);
    })
  })
}

const cloudinaryDelete = (id) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.destroy(id, (err, response) => {
      if (err) return reject(err);
      return resolve(response.url);
    })
  })
}

module.exports = { cloudinaryUpload, cloudinaryDelete }