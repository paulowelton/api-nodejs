const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'P@ulinho08',
    database: 'vanturismo'
})

module.exports = connection