const express = require('express')
const router = express.Router();


module.exports = () =>
{
    router.get('/',(req,res,next)=>{
    return res.send('Inside Speakders');
  });

  return router;
}

// update new code to feature