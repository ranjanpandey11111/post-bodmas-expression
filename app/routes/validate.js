const validate =(req,res) =>{
  //validation of expression
  if(req.body.expression){
    return true;
  }else{
    return false;
  }
  }
  module.exports = {
    validate: validate
  }