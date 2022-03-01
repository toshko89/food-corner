module.exports = (user) => {
  return {
    _id: user._id,
    email: user.email,
    name: user.name,
    phone: user.phone,
    city: user.city,
    address: user.address
  }

}