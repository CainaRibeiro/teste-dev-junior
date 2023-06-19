const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000
const mongoUri = '' //inserir link para conectar ao cluster desejado
const userRoute = require('./routes/api/User')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api/v1', userRoute)

app.listen(port, () => {
    console.log(`Server running in localhost:${port}`)
    mongoose
        .connect(mongoUri, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        .then(() => console.log('Database connected'))
        .catch((error) => console.log(error))
})