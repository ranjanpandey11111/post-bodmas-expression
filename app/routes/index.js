const crudHandler = require('./crud')

 const index =(req, res) =>{
  res.send('Hi! Welcome to my API!')
}

const setup =(app) =>{
  app.post('/bodmas-expression', crudHandler.add)
  app.get('/', index)
}

exports.setup = setup
