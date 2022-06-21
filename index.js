const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use(express.json()) // req.body

//CYBERFUSION HTTP

// CREATE
app.post('/ssaqs', async (req, res) => {
    try {
        const { ssaqs } = req.body;
        const newData = await pool.query(
            'INSERT INTO ssaqs (ssaqs) VALUES ($1) RETURNING *',
            [ssaqs])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// CREATE
app.post('/tube', async (req, res) => {
    try {
        const { tube } = req.body;
        const newData = await pool.query(
            'INSERT INTO tube (tube) VALUES ($1) RETURNING *',
            [tube])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// CREATE
app.post('/a_a', async (req, res) => {
    try {
        const { approved_awaiting } = req.body;
        const newData = await pool.query(
            'INSERT INTO approved_awaiting (approved_awaiting) VALUES ($1) RETURNING *',
            [approved_awaiting])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// CREATE
app.post('/ratings', async (req, res) => {
    try {
        const { ratings } = req.body;
        const newData = await pool.query(
            'INSERT INTO ratings (ratings) VALUES ($1) RETURNING *',
            [ratings])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// READ all
app.get('/cyberfusion', async (req, res) => {
    try {
        const allcyberfusion = await pool.query('SELECT * FROM cyberfusion')
        res.json(allcyberfusion.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// READ ssaqs
app.get('/ssaqs', async (req, res) => {
    try {
        const ssaqsD = await pool.query('SELECT * FROM ssaqs')
        res.json(ssaqsD.rows[0].ssaqs);
    } catch (err) {
        console.error(err.message)
    }
})

// READ tube
app.get('/tube', async (req, res) => {
    try {
        const tubeD = await pool.query('SELECT * FROM tube')
        res.json(tubeD.rows[0].tube);
    } catch (err) {
        console.error(err.message)
    }
})

// READ approved_awaiting
app.get('/a_a', async (req, res) => {
    try {
        const approved_awaitingD = await pool.query('SELECT * FROM approved_awaiting')
        res.json(approved_awaitingD.rows[0].approved_awaiting);
    } catch (err) {
        console.error(err.message)
    }
})

// READ ratings
app.get('/ratings', async (req, res) => {
    try {
        const ratingsD = await pool.query('SELECT * FROM ratings')
        res.json(ratingsD.rows[0].ratings);
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE ssaqs
app.put('/ssaqs', async (req, res) => {
    try {
        const { ssaqs } = req.body;
        await pool.query('UPDATE ssaqs SET ssaqs = $1', [ssaqs])
        res.json('ssaqs was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE tube
app.put('/tube', async (req, res) => {
    try {
        const { tube } = req.body;
        await pool.query('UPDATE tube SET tube = $1', [tube])
        res.json('tube was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE ratings
app.put('/ratings', async (req, res) => {
    try {
        const { ratings } = req.body;
        await pool.query('UPDATE ratings SET ratings = $1', [ratings])
        res.json('ratings was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE approved_awaiting
app.put('/a_a', async (req, res) => {
    try {
        const { approved_awaiting } = req.body;
        await pool.query('UPDATE approved_awaiting SET approved_awaiting = $1', [approved_awaiting])
        res.json('approved_awaiting was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(8888, () => {
    console.log('server is listenting on port 8888')
})
