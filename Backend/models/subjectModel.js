const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  id: {
    type: String,
    required: false
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = mongoose.model('Subject', subjectSchema)
