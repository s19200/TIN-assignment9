var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

function calculate (cmd){
  if(cmd == "add"){
    return (x, y) => (x + y);
  }
  else if(cmd == "subtract"){
    return (x, y) => (x - y);
  }
  else if(cmd == "divide"){
    return (x, y) => (x / y);
  }
  else if(cmd == "multiply"){
    return (x, y) => (x * y);
  }
  else{
    return ("something went wrong");
  }
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tin assignment 9' });
});

router.post("/", function(req, res){
  let result = calculate(req.body.operator)(Number(req.body.left), Number(req.body.right));
  let response = {result};
  res.send(JSON.stringify(response));
})

module.exports = router;
