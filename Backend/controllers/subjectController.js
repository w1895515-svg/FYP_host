const Subject = require('../models/subjectModel')
const mongoose = require('mongoose')

// get all subjects
const getSubjects = async (req, res) => {
  try {
    
   // const user_id = req.user._id

    //const subjects = await Subject
      //.find({ user_id })
      //.sort({ createdAt: -1 })
     const subjects = await Subject.find({})
      console.log(subjects)
    res.status(200).json(subjects)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get one subject
const getSubject = async (req, res) => {
  const { id } = req.params
  const user_id = req.user._id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such subject' })
  }

  const subject = await Subject.findOne({ _id: id, user_id })

  if (!subject) {
    return res.status(404).json({ error: 'No such subject' })
  }

  res.status(200).json(subject)
}

// create subject
const createSubject = async (req, res) => {
  const { title, description } = req.body
  let emptyFields = []

  if (!title) {
    res.status(404).json({error: 'missing title'})
  }
  if (!description) {
    res.status(404).json({error: 'missing descrption'})
  }
  

  if (emptyFields.length > 0) {
   return res.status(400).json({
    error: 'Please fill in all fields',
     emptyFields
    })
  }

  try {
    const user_id = 67//req.user._id

    const subject = await Subject.create({
      title,
      description
      
    })

    res.status(200).json(subject)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete subject
const deleteSubject = async (req, res) => {
  const { id } = req.params
  const user_id = req.user._id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such subject' })
  }

  const subject = await Subject.findOneAndDelete({ _id: id, user_id })

  if (!subject) {
    return res.status(404).json({ error: 'No such subject' })
  }

  res.status(200).json(subject)
}

// update subject
const updateSubject = async (req, res) => {
  const { id } = req.params
  const user_id = req.user._id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such subject' })
  }

  const subject = await Subject.findOneAndUpdate(
    { _id: id, user_id },
    { ...req.body },
    { new: true }
  )

  if (!subject) {
    return res.status(404).json({ error: 'No such subject' })
  }

  res.status(200).json(subject)
}

module.exports = {
  getSubjects,
  getSubject,
  createSubject,
  deleteSubject,
  updateSubject
}
