const express = require('express');

const authorizeToken = require('./middleware/auth')
const PORT = process.env.PORT || 3030
const app = express();

app.use(express.json())




app.use('/', express.static(__dirname + '/public/login'))


const usersEndpoint = require('./endpoints/users.js')
app.use('/users', usersEndpoint)

const boardsEndpoint = require('./endpoints/boards.js')
app.get('/boards', authorizeToken, boardsEndpoint)



app.listen(8800, ()=>{
    console.log("Connected to backend")
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})