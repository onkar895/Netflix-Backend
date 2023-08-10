import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const DB_URL = process.env.DB_URL

const Connection = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology : true,
    })
    console.log("Database connected successfully")
  } catch (err) {
    console.log(err, "error while connected to database")
  }
}

export default Connection
