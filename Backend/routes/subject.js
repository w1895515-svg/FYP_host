const express = require('express')
const {
  getSubjects,
  getSubject,
  createSubject,
  deleteSubject,
  updateSubject
} = require('../controllers/subjectController')

const router = express.Router()

router.get('/', getSubjects)
router.get('/:id', getSubject)
router.post('/', createSubject)
router.delete('/:id', deleteSubject)
router.patch('/:id', updateSubject)

module.exports = router
