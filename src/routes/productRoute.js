const app = require('express').Router()
const database = []

app.get('/product', (req, res) => {
    console.log('requisicao listar produtos')
    res.json(database)
})

app.get('/product/:id', (req, res) => {
    console.log('requisicao listar produtos por id')
    const item = database.find(it => {
        return it.id == req.params.id
    })

    if (!item) {
        return res.send(404, 'Id nao encontrado')
    }
    return res.send(item)
})

app.post('/product', (req, res) => {
    console.log("salvar produto");
    const item = req.body
    if (!item.id) {
        const lastItem = database[database.length-1]
        if (!lastItem) {
            item.id = 1
        } else {
            item.id = (lastItem.id+1)
        }
    }
    database.push(item)
    res.sendStatus(201)
})

app.put('/product', (req, res)=>{
    const requisicao = req.body
    const itemActual = database.find(it=> it.id == requisicao.id )
    if(!itemActual && !requisicao.id){
        return res.send(400, 'Erro ao editar item')
    }
    database[database.findIndex(itemActual)] = requisicao
    res.send(200)

})

app.delete('/product/:id', (req, res)=>{
  const product = database.find(it=> it.id == req.params.id )
  if(!product){
    database.splice(database.indexOf(product),1)
    res.sendStatus(200)
  }else{
    res.sendStatus(404)
  }
})

module.exports = app