import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const PRODUCTS_FILE = path.join(__dirname, '../data/products.json');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Função auxiliar para ler produtos
async function readProducts() {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler produtos:', error);
    return [];
  }
}

// Função auxiliar para salvar produtos
async function saveProducts(products) {
  try {
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Erro ao salvar produtos:', error);
    throw error;
  }
}

// GET /api/products - Listar todos os produtos
app.get('/api/products', async (req, res) => {
  try {
    const products = await readProducts();
    res.json(products);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
});

// GET /api/products/:id - Obter um produto específico
app.get('/api/products/:id', async (req, res) => {
  try {
    const products = await readProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao obter produto' });
  }
});

// POST /api/products - Criar novo produto
app.post('/api/products', async (req, res) => {
  try {
    const { name, price, description, shortDescription, imageUrl, affiliateLink } = req.body;

    // Validação
    if (!name || !price || !description || !imageUrl || !affiliateLink) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    const products = await readProducts();
    const newId = Math.max(...products.map(p => p.id), 0) + 1;

    const newProduct = {
      id: newId,
      name,
      price: String(price),
      description,
      shortDescription: shortDescription || null,
      imageUrl,
      affiliateLink
    };

    products.push(newProduct);
    await saveProducts(products);

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// PUT /api/products/:id - Atualizar produto
app.put('/api/products/:id', async (req, res) => {
  try {
    const { name, price, description, shortDescription, imageUrl, affiliateLink } = req.body;
    const productId = parseInt(req.params.id);

    const products = await readProducts();
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    // Atualizar apenas os campos fornecidos
    if (name !== undefined) products[index].name = name;
    if (price !== undefined) products[index].price = String(price);
    if (description !== undefined) products[index].description = description;
    if (shortDescription !== undefined) products[index].shortDescription = shortDescription || null;
    if (imageUrl !== undefined) products[index].imageUrl = imageUrl;
    if (affiliateLink !== undefined) products[index].affiliateLink = affiliateLink;

    await saveProducts(products);
    res.json(products[index]);
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// DELETE /api/products/:id - Deletar produto
app.delete('/api/products/:id', async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const products = await readProducts();
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    products.splice(index, 1);
    await saveProducts(products);

    res.json({ success: true });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✨ Affiliate Store Pro rodando em http://localhost:${PORT}`);
  console.log(`📄 Frontend: http://localhost:${PORT}`);
  console.log(`⚙️  Admin: http://localhost:${PORT}/admin.html`);
});
