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
app.get('/produtos/:idp', async (req, res) => {
    const { idp } = req.params;
    try {
        const result = await pool.query('SELECT * FROM produtos WHERE idp = $1', [idp]);
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
    const { marca, modelo, ano_fabri, ano_modelo, combustivel, versao, km, cor, cambio, preco, localizacao, descri, image } = req.body;
    
    // Verificar se todos os campos foram preenchidos
    if (marca && modelo && ano_fabri && ano_modelo && combustivel && versao && km && cambio && preco && localizacao && descri && image && cor) {
        try {
            // Realizar a consulta de inserção no banco de dados
            const result = await pool.query(
                'INSERT INTO produtos (marca, modelo, ano_fabri, ano_modelo, combustivel, versao, km, cor, cambio, preco, localizacao, descri, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
                [marca, modelo, ano_fabri, ano_modelo, combustivel, versao, km, cor, cambio, preco, localizacao, descri, image]
            );

            // Verificar se a inserção foi bem-sucedida e retornar o resultado
            if (result.rows.length > 0) {
                res.status(201).json(result.rows[0]); // Retornar o produto inserido
            } else {
                res.status(500).json({ error: 'Erro ao adicionar produto' }); // Caso não haja resultado
            }

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao adicionar produto' });
        }
    } else {
        // Retornar um erro caso algum campo obrigatório esteja vazio
        res.status(400).json({ error: 'Preencha todos os campos! :(' });
    }
});

// Rota para atualizar um cliente
app.put('/produtos/:idp', async (req, res) => {
    const { idp } = req.params;
    const { marca, modelo, ano_fabri, ano_modelo, combustivel, versao, km, cor, cambio, preco, localizacao, descri, image } = req.body;
    try {
        const result = await pool.query(
            'UPDATE produtos SET marca = $1, modelo = $2, ano_fabri = $3, ano_modelo = $4, combustivel = $5, versao = $6, km = $7, cor = $8, cambio = $9, preco = $10, localizacao = $11, descri = $12, image = $13 WHERE idp = $14 RETURNING *',
            [marca, modelo, ano_fabri, ano_modelo, combustivel, versao, km, cor, cambio, preco, localizacao, descri, image, idp]
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
app.delete('/produtos/:idp', async (req, res) => {
    const { idp } = req.params;
    try {
        const result = await pool.query('DELETE FROM produtos WHERE idp = $1 RETURNING *', [idp]);
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

