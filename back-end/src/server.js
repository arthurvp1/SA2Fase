const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');


const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'SaleSight', // Nome da sua database
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os clientes
app.get('/produtos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produtos');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

// Rota para buscar um cliente por ID
app.get('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM produtos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar cliente' });
    }
});

// Rota para adicionar um cliente
app.post('/produtos', async (req, res) => {
    const { marca, modelo , anoFabri , anoModelo , combustivel , versao , km , cambio , preco , localizacao , descri , image } = req.body;
    try {
        if(marca != '' && modelo != '' && anoFabri != '' && anoModelo != '' && combustivel != '' && versao != '' && km != '' && cambio != '' && preco != '' && localizacao != '' && descri != '' && image != ''){
        const result = await pool.query(
            'INSERT INTO produtos (prodMarca , prodModelo , prodAnoFabri , prodAnoModelo , prodCombustivel , prodversao , prodKm , prodCambio , prodPreco , prodLocalizacao , proddescri , prodDmage) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
            [marca , modelo , anoFabri , anoModelo , combustivel , versao , km , cambio , preco , localizacao , descri , image]
            );
        }else{
            res.status(400).json({ error: 'Preencha todos os campos! :(' })
        }
                   
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar produtos' });
    }
});

// Rota para atualizar um cliente
app.put('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    const { marca, modelo , anoFabri , anoModelo , combustivel , versao , km , cambio , preco , localizacao , descri , image } = req.body;
    try {
        const result = await pool.query(
            'UPDATE clientes SET marca = $1, modelo = $2, anoFabri = $3, anoModelo = $4, combustivel = $5, versao = $6, km = $7, cambio = $8, preco = $9, localizacao = $10, descri = $11, image = $12 WHERE id = $13 RETURNING *',
            [marca, modelo , anoFabri , anoModelo , combustivel , versao , km , cambio , preco , localizacao , descri , image, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'produtos não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar produtos' });
    }
});

// Rota para deletar um cliente
app.delete('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM produtos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'produtos não encontrado' });
        }
        res.json({ message: 'produtos deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// npm install axios    FRONT-END
// npm install express --save    BACK-END
// npm install --save-dev nodemon      BACK-END

// post get put delete patch


// // Rota para inserção de user no banco de dados

