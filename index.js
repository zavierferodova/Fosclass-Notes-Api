const express = require('express')
const api = require('./src/routes/api')

const app = express()
const db = require('./src/database/sequelize')
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', api)

app.listen(port, async () => {
  try {
    await db.authenticate()
    console.log('Database donnection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  console.log(`Example app listening at port ${port}`)
})
