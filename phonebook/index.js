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

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})