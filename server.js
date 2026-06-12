const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Arquivo de banco de dados simples (JSON)
const dbFile = path.join(__dirname, 'products.json');

// Inicializar banco de dados se não existir
if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify([]));
}

// Função para ler produtos
function readProducts() {
    try {
        const data = fs.readFileSync(dbFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler produtos:', error);
        return [];
    }
}

// Função para salvar produtos
function saveProducts(products) {
    try {
        fs.writeFileSync(dbFile, JSON.stringify(products, null, 2));
    } catch (error) {
        console.error('Erro ao salvar produtos:', error);
    }
}

// GET - Listar todos os produtos
app.get('/api/products', (req, res) => {
    try {
        const products = readProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao carregar produtos' });
    }
});

// GET - Obter um produto específico
app.get('/api/products/:id', (req, res) => {
    try {
        const products = readProducts();
        const product = products.find(p => p.id === req.params.id);
        
        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }
        
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao carregar produto' });
    }
});

// POST - Criar novo produto
app.post('/api/products', (req, res) => {
    try {
        const { name, price, imageUrl, affiliateLink } = req.body;

        // Validação
        if (!name || !price || !imageUrl || !affiliateLink) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const newProduct = {
            id: Date.now().toString(),
            name,
            price: parseFloat(price),
            imageUrl,
            affiliateLink,
            createdAt: new Date().toISOString()
        };

        let products = readProducts();
        products.push(newProduct);
        saveProducts(products);

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
});

// PUT - Atualizar produto
app.put('/api/products/:id', (req, res) => {
    try {
        const { name, price, imageUrl, affiliateLink } = req.body;

        // Validação
        if (!name || !price || !imageUrl || !affiliateLink) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        let products = readProducts();
        const productIndex = products.findIndex(p => p.id === req.params.id);

        if (productIndex === -1) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        products[productIndex] = {
            ...products[productIndex],
            name,
            price: parseFloat(price),
            imageUrl,
            affiliateLink,
            updatedAt: new Date().toISOString()
        };

        saveProducts(products);
        res.json(products[productIndex]);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

// DELETE - Deletar produto
app.delete('/api/products/:id', (req, res) => {
    try {
        let products = readProducts();
        const productIndex = products.findIndex(p => p.id === req.params.id);

        if (productIndex === -1) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        const deletedProduct = products[productIndex];
        products.splice(productIndex, 1);
        saveProducts(products);

        res.json({ message: 'Produto deletado com sucesso', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
});

// Rota de teste
app.get('/api/health', (req, res) => {
    res.json({ status: 'Servidor funcionando!' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
