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

// ======================================================== CREATE ========================================================
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

// USER TRACKER

app.post('/ssa', async (req, res) => {
    try {
        const { ssa } = req.body;
        const newData = await pool.query(
            'INSERT INTO ssa (user_id, avatar, email, name, created, lastsignin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [ssa.user, ssa.avatar, ssa.email, ssa.name, ssa.created, ssa.last ])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

app.post('/sr', async (req, res) => {
    try {
        const { sr } = req.body;
        const newData = await pool.query(
            'INSERT INTO sr (user_id, avatar, email, name, created, lastsignin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [sr.user, sr.avatar, sr.email, sr.name, sr.created, sr.last ])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

app.post('/od', async (req, res) => {
    try {
        const { od } = req.body;
        const newData = await pool.query(
            'INSERT INTO od (user_id, avatar, email, name, created, lastsignin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [od.user, od.avatar, od.email, od.name, od.created, od.last ])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

app.post('/ft', async (req, res) => {
    try {
        const { ft } = req.body;
        const newData = await pool.query(
            'INSERT INTO ft (user_id, avatar, email, name, created, lastsignin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [ft.user, ft.avatar, ft.email, ft.name, ft.created, ft.last ])
        res.json(newData.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

// ======================================================== READ ========================================================

app.get('/cyberfusion', async (req, res) => {
    try {
        const allcyberfusion = await pool.query('SELECT * FROM cyberfusion')
        res.json(allcyberfusion.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/ssaqs', async (req, res) => {
    try {
        const ssaqsD = await pool.query('SELECT * FROM ssaqs')
        res.json(ssaqsD.rows[0].ssaqs);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/tube', async (req, res) => {
    try {
        const tubeD = await pool.query('SELECT * FROM tube')
        res.json(tubeD.rows[0].tube);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/a_a', async (req, res) => {
    try {
        const approved_awaitingD = await pool.query('SELECT * FROM approved_awaiting')
        res.json(approved_awaitingD.rows[0].approved_awaiting);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/ratings', async (req, res) => {
    try {
        const ratingsD = await pool.query('SELECT * FROM ratings')
        res.json(ratingsD.rows[0].ratings);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/ssa/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const ssaD = await pool.query('SELECT * FROM ssa WHERE user_id = $1', [id])
        ssaD.rows.length === 0 ? res.json('User does not exist') :
        res.json(ssaD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/ssa', async (req, res) => {
    try {
        const ssaD = await pool.query('SELECT * FROM ssa')
        res.json(ssaD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/sr/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const srD = await pool.query('SELECT * FROM sr WHERE user_id = $1', [id])
        srD.rows.length === 0 ? res.json('User does not exist') :
        res.json(srD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/sr', async (req, res) => {
    try {
        const srD = await pool.query('SELECT * FROM sr')
        res.json(srD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/od/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const odD = await pool.query('SELECT * FROM od WHERE user_id = $1', [id])
        odD.rows.length === 0 ? res.json('User does not exist') :
        res.json(odD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/od', async (req, res) => {
    try {
        const odD = await pool.query('SELECT * FROM od')
        res.json(odD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/ft/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const ftD = await pool.query('SELECT * FROM ft WHERE user_id = $1', [id])
        ftD.rows.length === 0 ? res.json('User does not exist') :
        res.json(ftD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/ft', async (req, res) => {
    try {
        const ftD = await pool.query('SELECT * FROM ft')
        res.json(ftD.rows);
    } catch (err) {
        console.error(err.message)
    }
})

// ======================================================== UPDATE ========================================================

app.put('/ssaqs', async (req, res) => {
    try {
        const { ssaqs } = req.body;
        await pool.query('UPDATE ssaqs SET ssaqs = $1', [ssaqs])
        res.json('ssaqs was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

app.put('/tube', async (req, res) => {
    try {
        const { tube } = req.body;
        await pool.query('UPDATE tube SET tube = $1', [tube])
        res.json('tube was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

app.put('/ratings', async (req, res) => {
    try {
        const { ratings } = req.body;
        await pool.query('UPDATE ratings SET ratings = $1', [ratings])
        res.json('ratings was sucessfully updated');
    } catch (err) {
        console.error(err.message)
    }
})

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
