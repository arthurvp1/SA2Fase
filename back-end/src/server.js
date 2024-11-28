const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    
    user: 'postgres',
    host: 'localhost',
    database: 'SaleSight',
    password: 'senai',
    port: 5432,

}); 

app.use(cors());
app.use(express.json());

// npm install axios    FRONT-END
// npm install express --save    BACK-END
// npm install --save-dev nodemon      BACK-END

// post get put delete patch


// // Rota para inserção de user no banco de dados

// app.post('/Users', async (req, res) => {
//     const {username} = req.body
//     try {
//         // Query para inserção do user no banco de dados
//         const result = await pool.query(
//             'INSERT INTO users (username) VALUES ($1) RETURNING *',
//             [username]
//         )
//         res.status(201).json(result.rows[0])
//     } catch (err) {
//         console.error(err.message)
//         res.status(500).json({ error: 'Erro ao cadastrar usuário! :(' })
//     }
// })


// // Listener para confirmação de servidor rodando
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000! :D')
})