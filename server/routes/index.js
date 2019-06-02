const express = require('express')
const router = express.Router();
const speakersRoute = require('./speaker')
const feedbackRoute = require('./feedback')

module.exports = () =>
{
  router.get('/',(req,res,next)=>{
    return res.render('index');
  });

  router.use('/speaker',speakersRoute());
  router.use('/feedback',feedbackRoute());
  return router;
}
