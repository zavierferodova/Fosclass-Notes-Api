// const Note = require('../models/note')
const responses = require('../constants/responses')
const apiResponse = require('../helpers/response-helper')

const getNotes = async (req, res) => {
  try {
    /**
     * @todo Write your code here
     */
  } catch (error) {
    return apiResponse(res, responses.error.code, 'Error retrieving notes')
  }
}

const getNote = async (req, res) => {
  try {
    /**
     * @todo Write your code here
     */
  } catch (error) {
    return apiResponse(res, responses.error.code, 'Error retrieving note')
  }
}

const createNote = async (req, res) => {
  try {
    /**
     * @todo Write your code here
     */
  } catch (error) {
    return apiResponse(res, responses.error.code, 'Error creating note')
  }
}

const updateNote = async (req, res) => {
  try {
    /**
     * @todo Write your code here
     */
  } catch (error) {
    return apiResponse(res, responses.error.code, 'Error updating note')
  }
}

const deleteNote = async (req, res) => {
  try {
    /**
     * @todo Write your code here
     */
  } catch (error) {
    return apiResponse(res, responses.error.code, 'Error deleting note')
  }
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
}
