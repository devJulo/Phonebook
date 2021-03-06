require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')





app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', req => JSON.stringify(req.body))
const logger = morgan(':method :url :status :res[content-length] - :response-time ms - :body')
app.use(logger)




app.get('/', (request, response) => {
  response.send('<h1>My first Backend Server</h1>')
})

app.get('/info', (request, response) => {
  const date = new Date().toString()
  Person.find({}).count()
    .then(numberPeople => response.send(`<p>Phonebook has info for ${numberPeople} people</p><p>${date} (European West Time)</p>`))
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person.findById(id)
    .then(person => {
      if (person) {
        response.json(person)
      }
      else{
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
    date: new Date()
  })

  person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  const body = request.body

  Person.findById(id)
    .then(person => {
      person.number = body.number
      person.save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
          response.json(savedAndFormattedPerson)
        })
        .catch(error => next(error))
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
  const id = request.params.id

  Person.findByIdAndDelete(id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})




const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)




const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})