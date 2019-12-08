//Configuração do meu BackEnd.  
const express  = require('express');
const cors     = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({extended: false})
);

const users = require('./routes/users');
app.use('/users', users)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.listen(port, function(){
    console.log('Server is running on port:'+port)
});
