const express = require('express')
const app = express()
const port = 3000
var obj = { name: "John", age: 30, city: "New York" };

app.get('/', (request, response) => {
  response.send(JSON.stringify(obj))
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})