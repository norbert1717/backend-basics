/* 
expressnek van egy alap váza, amiből érdemes kiindulni
npm init -y - mindenből az alapot adja és az alapján rakja össze a json filét
mindig le kell állítani a honlapot ctrl + c segítségével ahhoz, hogy lássam a változásokat,
mivel az előző verziója fut a kódnak backendnek
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})