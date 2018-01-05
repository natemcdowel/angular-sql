let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let { Database } = require('../db/db.js');
let db = new Database();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.route('/api/employee/:id')
  .get((req, res) => {
    db.getEmployee(req.params.id).then(data => {
      handleResponse(data, res);
    });
  })
  .put((req, res) => {
    db.updateEmployeeName(req.body.name, req.params.id).then(data => {
      handleResponse(data, res);
    });
  })
  .delete((req, res) => {
    db.deleteEmployee(req.params.id).then(data => {
      handleResponse(data, res);
    });
  });

app.route('/api/employee')
  .post((req, res) => {
    db.createEmployee(req.body.name).then(data => {
      handleResponse(data, res);
    });
});

app.route('/api/employees')
  .get((req, res) => {
    db.getEmployees().then(data => {
      handleResponse(data, res);
    });
});

function handleResponse(data, res) {
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(500).send({error: 'A database error occured'});
  }
}
