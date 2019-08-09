const Crud = require('../models/crud')
const Calculate = require('./calculate')
const validate =require('./validate')
/* Add one expression of bodmas and return calculation of that bodmas
 */
const add =(req, res) =>{
  if(!validate.validate(req)){
    res.send({"error":"Please send valid attrubute here"})
  };
  const answer =Calculate.calculate(req)
  const insertBodmas ={};
  insertBodmas.expression = req.body.expression;
  insertBodmas.answer = answer;
  console.log(insertBodmas)
  Crud.create(insertBodmas, (err) => {
    if (err) {
      console.log('Error on save!')
    } else {
      console.log('Data has been saved')
    }
  })
  res.send(insertBodmas)
}
module.exports = {
  add: add
}
