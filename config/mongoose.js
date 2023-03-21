const mongoose = require('mongoose')
const MONGO_URI = 'mongodb://127.0.0.1/test'
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(data => {
        if (data) {
            console.log(`Successfully connected to database`)
        }
    }).catch(err => {
        if (err) {
            console.log(`There was an error connecting to db: ${err}`)
        }
    })
}

module.exports = connectDB