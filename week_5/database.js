const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'wingman',
    database: 'kweb_db',
});

const runQuery = async (pstmt, data) => {     //sql문을 받아서 결과 반환
    const conn = await pool.getConnection();
    try {
        const sql = conn.format(pstmt, data)
        const [result] = await conn.query(sql);
        return result;
    } finally {
        conn.release();
    }

};

module.exports = { runQuery };