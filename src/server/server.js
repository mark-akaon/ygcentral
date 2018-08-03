const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const router = require('./router/main')(app);

const mysql = require('mysql');

const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const generatePassword = require('password-generator');

app.set('port', process.env.PORT || 3001);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// Set up a whitelist and check against it:
const whitelist = ['http://example1.com', 'http://example2.com']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Then pass them to cors:
//app.use(cors(corsOptions));
// Then use it before your routes are set up:
//app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/test', (req, res) => res.send('Hello World!'));

app.post('/signin', (req, res) => {
  const {username, password} = req.body;
  // 클라이언트로부터 전송된 페이로드를 그대로 response
  res.send({username, password});
});


connection.connect();
connection.query('SELECT * from Persons', function (err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

app.get('/persons', function(req, res){
  
  connection.query('SELECT * from Persons', function(err, rows) {
    if(err) throw err;
    
    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});


// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;
  
  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )
  
  // Return them as json
  res.json(passwords);
  
  console.log(`Sent ${count} passwords`);
});

// connection.end();