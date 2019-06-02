const express = require('express');
const path = require('path');
const routes = require('./routes');
const httpErrors = require('http-errors')
const app = express();

if(app.get('env')==='development'){
  app.locals.pretty=true;
}

app.set('view engine','pug');
app.set('views',path.join(__dirname,'./views'));

app.use(express.static('public'));
app.use('/',routes());

app.use((req,res,next)=>{
  return next(httpErrors(404,'File Not Found'));
});

app.use((err,req,res,next)=>{
  res.locals.message = err.message;
  const status = err.status || 500;
  res.locals.status = status;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(status);
  return res.render('error');
});

app.listen(3000);

module.exports = app;
