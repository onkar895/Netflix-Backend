import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    max: 50
  },
  likedMovies: Array
})

const User = mongoose.model('user', UserSchema)

export default User
