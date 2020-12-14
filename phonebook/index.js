const { response } = require('express')
const express = require('express')
const app = express()

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

app.get('')

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})