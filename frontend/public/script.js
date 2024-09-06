console.log("loaded")

fetch('/data')
  .then(res => res.json())
  .then(data => console.log(data))

fetch('/data/201')
  .then(res => res.json())
  .then(data => console.log(data))

fetch('/data/361')
  .then(res => res.json())
  .then(data => console.log(data))

fetch('/data/valami')
  .then(res => res.json())
  .then(data => console.log(data))

fetch('/data/120')
  .then(res => res.json())
  .then(data => console.log(data))

