const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot funcionando!")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Servidor Listo.")
  })
}

module.exports = keepAlive