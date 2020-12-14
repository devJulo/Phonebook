const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

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
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => {
        return person.id === id
    })
    if(!person){
        return response.status(404).json({
            error: 'content missing'
        })
    }
    response.json(person)
})

const generateId = () => {
    const randomId = Math.floor(Math.random() * Math.floor(1000000))
    return randomId
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const finder = persons.find(person => {
        return person.name === body.name
    })
    if(!body.name || !body.number || finder){
            console.log("body.name is missing")
        return (response.status(400).json({
            error: 'content missing'
        }))
    }
    const person = {
        name: body.name,
        number: body.number,
        date: new Date(),
        id: generateId()
    }
    
    persons = persons.concat(person)

    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.get('')

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})