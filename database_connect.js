const mysql = require("mysql");

function connect(nama, res, querry) {
    const pool = mysql.createPool({
      host        : 'localhost',
      user        : 'root',
      password    : '',
      database    : 'web_organisasi',
    });

    var data = pool.getConnection((err, connection) => {
        connection.query(querry, function (err, result, field) {
          if (err) throw err;
          res.render(nama, {database : result});
          connection.release();
        })
    })
}

module.exports = {
  connect : connect
}