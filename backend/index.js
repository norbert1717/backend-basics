/* 
expressnek van egy alap váza, amiből érdemes kiindulni
npm init -y - mindenből az alapot adja és az alapján rakja össze a json filét
mindig le kell állítani a honlapot ctrl + c segítségével ahhoz, hogy lássam a változásokat,
mivel az előző verziója fut a kódnak backendnek
ENOENT - nem találja az adott helyen az adott filet
ha html kódban elől van a / jel, akkor mindenhogy működik az oldal
end pointokat érdemes külön csoportosítani
1 request 1 válasz
ha nem fut le akkor a cd paranccsal tudom változtatni a mappát
result-nál meg tudom szűrni, h milyen adatokat írjon ki
fs.readfile-al beolvasom a data.json filet és hibaüzenetet iratok ki vele, ha nincs meg az adat
:-al az express tudni fogja, hogy egy id paraméter fog érkezni
ha olyan id-jű userre keresek rá, amelyik nem létezik, akkor undefined-et ír ki és
erre kell küldeni egy 404-es statust, hogy nincs ilyen felhasználó
1 requestre 1 válasz van, kell az elágazás
*/

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../frontend/index.html'))
})

app.use('/public', express.static(path.join(__dirname, '/../frontend/public')))

app.get('/data', (req, res) => {
  fs.readFile(`${__dirname}/data.json`, (err, data) => {
    if (err) {
      console.log("error at reading the file", err)
      res.json("error at reading the file")
    } else {
      const jsonData = JSON.parse(data)
      const result = jsonData.map(obj => obj.id)
      res.json(result)
    }
  })
})

app.get('/data/:id', (req, res) => {
  console.log(req.params)
  const searchId = Number(req.params.id)

  if (isNaN(searchId)) {
    res.status(400).json(`id must be number`)
  } else {
    fs.readFile(`${__dirname}/data.json`, (err, data) => {
      if (err) {
        console.log("error at reading the file", err)
        res.status(500).json("error at reading the file")
      } else {
        const jsonData = JSON.parse(data)
        const result = jsonData.find(obj => obj.id === searchId)

        if (result === undefined) {
          res.status(404).json(`no user found with id ${searchId}`)
        } else {
          res.status(200).json(result)
        }
      }
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})