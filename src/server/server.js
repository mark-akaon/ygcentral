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
const whitelist = ['http://localhost:3001', 'http://localhost:3000']
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
app.use(cors(corsOptions));
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

app.get('/getScores', (req, res) => {
  console.log("/getScores @ req : " + req + " , res : " + res);
  
  const test = `SELECT score FROM Groups_yg`;
  console.log(test);
  let response;
  let hishScores = [];
  
  connection.query(test, function (err, rows) {
    if (!err) {
      console.log('The getScores solution is: ', rows);
      
      const string = JSON.stringify(rows);
      const json = JSON.parse(string);
      const tempScore1 = json[0].score;
      const tempScore2 = json[1].score;
      const tempScore3 = json[2].score;
      const tempScore4 = json[3].score;
      
      const arrValue =[];
      arrValue.push(tempScore1);
      arrValue.push(tempScore2);
      arrValue.push(tempScore3);
      arrValue.push(tempScore4);
      
      const temp1 = findMaxValue(arrValue, arrValue.length, tempScore1);
      console.log("temp1 : " + temp1);
      
      console.log("tempScore1 : " + tempScore1);
      console.log("tempScore2 : " + tempScore2);
      console.log("tempScore3 : " + tempScore3);
      console.log("tempScore4 : " + tempScore4);
      console.log("temp1 : " + temp1);
  
      response = {a: tempScore1, b:tempScore2, c:tempScore3, d:tempScore4, high:temp1};
    } else {
      console.log('Error while performing Query.', err);
    }
    
    res.json(response);
  });
  
});

function findMaxValue(ArrValue, ArrValueLength, maxValue){
  for(let i =0; i < ArrValueLength; i++){
    if(ArrValue[i] > maxValue){
      maxValue = ArrValue[i];
    }
  }
  
  return maxValue;
}

app.post('/api/form-submit-url', (req, res) => {
  console.log("/api/form-submit-url @ req : " + req + " , res : " + res);
  
  const {labels, score} = req.body;
  if (labels instanceof Array) {
    console.log("yes!");
  } else {
    console.log("no!");
  }
  
  console.log(labels.length);
  
  labels.map((element) => {
    const test = `SELECT score FROM Groups_yg WHERE label='${element}'`;
    console.log(test);
    connection.query(test, function (err, rows) {
      if (!err) {
        console.log('The solution is: ', rows);
        const string = JSON.stringify(rows);
        const json = JSON.parse(string);
        const tempScore = json[0].score;
        console.log((typeof tempScore));
        console.log((typeof score));
        
        const finalScore = tempScore + parseInt(score);
        console.log(finalScore);
        const tempQuery = `UPDATE Groups_yg SET score =${finalScore} where label='${element}'`;
        console.log(tempQuery)
        connection.query(tempQuery, function (err, rows) {
          if (err) throw err;
          
          console.log('The solution is: ', rows);
          
          return true;
        });
      } else {
        console.log('Error while performing Query.', err);
      }
    });
  });
 
  res.send({labels, score});
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