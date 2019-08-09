/* Add one expression of bodmas and return calculation of that bodmas
 */
const calculate =(req) =>{
  const answer =eval(req.body.expression);
    return answer;
}
module.exports = {
    calculate: calculate
}
