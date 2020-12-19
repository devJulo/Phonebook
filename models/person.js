const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'Path name is shorter than the minimum allowed length'],
        required: true,
        unique: true
    },
    number: {
        type: String,
        minLength: [8, 'Provide a valid phone number'],
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})
personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

/*if (process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
            console.log(person.name,' ', person.number, ' ', person.id)
        })
        mongoose.connection.close()
    })
}
else if (process.argv.length === 5){
    const name = process.argv[3]
    const number = process.argv[4]

    const person = new Person({
        name: name,
        number: number,
        date: new Date(),
    })

    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}
else {
    console.log('Please provide arguments like so: node mongo.js <password> <"name"> <"number">')
    mongoose.connection.close()
}
*/

module.exports = mongoose.model('Person', personSchema)

