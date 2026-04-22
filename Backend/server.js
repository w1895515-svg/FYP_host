const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const subjectRoutes = require('./routes/subject')
const userRoutes = require('./routes/user')
const chatRoutes = require('./routes/chat')

const app = express()

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://ipd-1-ogw5.onrender.com'
  ],
  credentials: true
}))

app.use(express.json())
// logging
app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

// routes
app.use('/api/subject', subjectRoutes)
app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log('Connected to DB')
      console.log('Server running on port', process.env.PORT || 4000)
    })
  })
  .catch(err => console.log('DB Error:', err))