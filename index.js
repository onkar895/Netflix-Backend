import express from 'express'
import cors from 'cors'
import Connection from './database/db.js'
import userRoutes from './Routes/userRoutes.js'

const PORT = 8000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/user', userRoutes)

Connection()
app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`))
