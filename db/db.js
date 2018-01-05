class Database {

  constructor() {
    this.mysql = require('mysql');
    this.con = this.mysql.createConnection({
      database: 'node_database',
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
    });

    this.con.connect((err) => {
      if (err) {
        console.log('Error connecting to Db');
        return;
      }
      console.log('Connection established!');
    });
  }

  createEmployee(name) {
    return new Promise((resolve) => {
      const employee = { name: name };

      this.con.query('INSERT INTO employees SET ?', employee, (err, res) => {
        if (err) {
          resolve(null);
        }
        resolve(employee);
      });
    });
  }

  getEmployees() {
    return new Promise((resolve) => {
      this.con.query('SELECT * FROM employees', (err, rows) => {
        if (err) {
          resolve(null);
        }
        resolve(rows);
      });
    });
  }

  getEmployee(id) {
    return new Promise((resolve) => {
      this.con.query('SELECT * FROM employees WHERE ID = ?', [id], (err, row) => {
        if (err) {
          resolve(null);
        }
        resolve(row);
      });
    });
  }

  updateEmployeeName(name, id) {
    return new Promise((resolve) => {
      this.con.query(
        'UPDATE employees SET name = ? Where ID = ?',
        [name, id],
        (err, result) => {
          if (err) {
            resolve(null);
          }
          resolve({id: id, name: name});
        }
      );
    });
  }

  deleteEmployee(id) {
    return new Promise((resolve) => {
      this.con.query(
        'DELETE FROM employees WHERE id = ?', [id], (err, result) => {
          if (err) {
            resolve(null);
          }
          resolve({});
        }
      );
    });
  }
};

exports.Database = Database;
