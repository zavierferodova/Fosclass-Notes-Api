const { Router } = require('express')
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notes')

const router = Router()
router.get('/notes', getNotes)
router.get('/notes/:id', getNote)
router.post('/notes', createNote)
router.put('/notes/:id', updateNote)
router.delete('/notes/:id', deleteNote)

module.exports = router
