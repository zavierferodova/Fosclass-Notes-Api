const apiResponse = (response, statusCode, message, data) => {
  return response.status(statusCode).json({
    status: statusCode,
    message,
    data
  })
}

module.exports = apiResponse
