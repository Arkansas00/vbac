const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2/promise')

app.use(bodyParser.json())
app.use(cors())

let conn = null

//คำสั่งเชื่อมต่อ MySQL 
const connectMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'std_wallets'
  })
}

// คำสั่งดึงข้อมูลจาก MySQL รายคน
app.get('/students/:id', async (req, res) => {
  const id = req.params.id
  try {
    const [results] = await conn.query('SELECT * FROM student_card_basic WHERE student_id = ?', [id])
    if (results.length === 0) {
      return res.status(404).json({ error: 'Student not found' })
    }
    res.json(results[0])
  } catch (error) {
    console.error('Error fetching student:', error.message)
    res.status(500).json({ error: 'Error fetching student' })
  }
})

// คำสั่งดึงข้อมูลจาก MySQL
app.get('/students', async (req, res) => {
  try {
    const [results] = await conn.query('SELECT * FROM student_card_basic');
    res.json(results);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({ error: 'Error fetching students' });
  }
});

// คำสั่งเพิ่มข้อมูลลง MySQL
app.post('/students', async (req, res) => {
  const data = req.body;

  try {
    const [result] = await conn.query('INSERT INTO student_card_basic SET ?', data);
    const studentId = result.insertId;
    res.status(201).json({ message: 'Student created successfully', studentId });
  } catch (error) {
    console.error('Error creating student:', error.message);
    res.status(500).json({ error: 'Error creating student' });
  }
});

// คำสั่งอัพเดทข้อมูลใน MySQL
app.put('/students/:id', async (req, res) => {
  const id = req.params.id
  const data = req.body

  try {
    const result = await conn.query('UPDATE student_card_basic SET ? WHERE student_id = ?', [data, id])
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' })
    }
    res.json({ message: 'Student updated successfully', studentId: id })
  } catch (error) {
    console.error('Error updating student:', error.message)
    res.status(500).json({ error: 'Error updating student' })
  }
})

// คำสั่งลบข้อมูลใน MySQL
app.delete('/students/:id', async (req, res) => {
  const id = req.params.id

  try {
    const result = await conn.query('DELETE FROM student_card_basic WHERE student_id = ?', [id])
    if (result[0].affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' })
    }
    res.json({ message: 'Student deleted successfully', studentId: id })
  } catch (error) {
    console.error('Error deleting student:', error.message)
    res.status(500).json({ error: 'Error deleting student' })
  }
})

// คำสั่งดึงข้อมูลจาก MySQL
app.listen(8000, async () => {
  // เรียกใช้ connectMySQL ตอน start server
  await connectMySQL()
  console.log('Server started on port 8000')
})