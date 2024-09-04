/* 
expressnek van egy alap váza, amiből érdemes kiindulni
npm init -y - mindenből az alapot adja és az alapján rakja össze a json filét
mindig le kell állítani a honlapot ctrl + c segítségével ahhoz, hogy lássam a változásokat,
mivel az előző verziója fut a kódnak backendnek
ENOENT - nem találja az adott helyen az adott filet
ha html kódban elől van a / jel, akkor mindenhogy működik az oldal
end pointokat érdemes külön csoportosítani
*/

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../frontend/index.html'))
  res.send("hello world")
})

app.use('/public', express.static(path.join(__dirname, '/../frontend/public')))

app.get('/data', (req, res) => {
  res.json({ name: "kismacska" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})