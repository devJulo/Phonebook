require('dotenv').config()
const { response } = require('express')
const express = require('express')
const { token } = require('morgan')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(cors())
app.use(express.json())


morgan.token('body', (req, res) => JSON.stringify(req.body))
const logger = morgan(':method :url :status :res[content-length] - :response-time ms - :body')
app.use(logger)

app.use(express.static('build'))

let persons = [{
    id: 1,
    name: "Arto Hellas",
    number: "6454616"
},
{
    id: 2,
    name: "Ada Lovelace",
    number: "55266516"
},
{
    id: 3,
    name: "Dan Abramov",
    number: "561651656"
},
{
    id: 4,
    name: "Maty Poppendick",
    number: "2655165"
}
]

app.get('/', (request, response) =>{
    response.send('<h1>My first Backend Server</h1>')
})

app.get('/info', (request, response) => {
    const date = new Date().toString()
    const peopleNumber = persons.length
    response.send(`<p>Phonebook has info for ${peopleNumber} people</p><p>${date} (European West Time)</p>`)
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    Person.findById(id).then(person => response.json(person))
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    const finder = Person.find({ name: body.name }).exec()
    
    /*if(!body.name){
        return (response.status(400).json({
            error: 'name missing'
        }))
    }
    if(!body.number){
        return (response.status(400).json({
            error: 'number missing'
        }))
    }
    if(finder){
        return (response.status(400).json({
            error: 'name must be unique'
        }))
    }*/
    
    const person = new Person({
        name: body.name,
        number: body.number,
        date: new Date()
    })

    person.save().then(savedPerson => {
        response.json(person)
    })
})

app.put('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const body = request.body

    const update = {
        number: body.number,
        date: new Date()
    }

    const updatePerson = Person.findByIdAndUpdate(id, update, {})

    updatePerson.then(person => {
        const updatedPerson = person
        updatedPerson.number = update.number
        response.json(updatedPerson)
    })
})
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    console.log(id)
    Person.findByIdAndDelete(id, () => {})

    response.status(204).end()
})

app.get('')

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})