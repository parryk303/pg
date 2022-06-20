const express = require('express');
const app = express();
const pool = require('./db')

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json()) // req.body

// CREATE
app.post('/todos', async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES ($1) RETURNING *',
            [description])
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// READ all
app.get('/todos', async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo')
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// READ id
app.get('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id])
        res.json('todo was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

// DELETE
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
        res.json('todo was sucessfully deleted');
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(3000, () => {
    console.log('server is listenting on port 3000')
})