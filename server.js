const express = require('express')
const app = express()

app.get('/', function (req,res) {
res.send('Hello World')
})

app.get('/hello', function (req,res) {
if(!req.query.nom) {
res.send('Quel est votre nom ?') 
} else {
res.send(` bonjour, ${req.query.nom} !`)
}
})


app.listen(3000, function () {
console.log('Exemple app listening on port 3000!')
})
