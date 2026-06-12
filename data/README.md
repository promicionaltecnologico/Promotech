# Affiliate Store Pro - HTML Edition

Site de vendas de afiliados ultra profissional com tema **cyberpunk neon** em **HTML puro** com backend Node.js/Express.

## 🎨 Características

### Frontend
- **HTML5 Puro** - Sem frameworks, apenas HTML + CSS + JavaScript vanilla
- **Tema Cyberpunk Neon** - Cores rosa vibrante (#ec4899) e ciano elétrico (#22d3ee) em fundo preto profundo
- **Design Responsivo** - Mobile-first, funciona perfeitamente em todos os dispositivos
- **Efeitos Visuais**:
  - Grid animado de fundo
  - Brilho neon em textos (neon-glow)
  - Elementos flutuantes com parallax
  - Animações suaves e transições

### Páginas
1. **index.html** - Landing page com:
   - Hero section impactante com CTAs
   - Catálogo de produtos carregado dinamicamente
   - Seção de vantagens/features
   - Depoimentos de clientes
   - Badges de confiança

2. **admin.html** - Painel administrativo com:
   - Listagem de produtos em tabela
   - Criar novo produto (modal)
   - Editar produto existente
   - Deletar produto com confirmação
   - Validação de campos obrigatórios
   - Alertas de sucesso/erro

### Backend
- **Express.js** - Servidor Node.js simples e rápido
- **Armazenamento JSON** - Arquivo `data/products.json` para persistência
- **API RESTful** com endpoints:
  - `GET /api/products` - Listar todos os produtos
  - `GET /api/products/:id` - Obter um produto
  - `POST /api/products` - Criar novo produto
  - `PUT /api/products/:id` - Atualizar produto
  - `DELETE /api/products/:id` - Deletar produto

## 📁 Estrutura do Projeto

```
affiliate_store/
├── public/
│   ├── index.html          # Landing page
│   └── admin.html          # Painel administrativo
├── server/
│   └── index.js            # Servidor Express
├── data/
│   └── products.json       # Banco de dados (JSON)
├── package.json
└── README.md
```

## 🚀 Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar o Servidor
```bash
npm start
```

O servidor iniciará em `http://localhost:3000`

### 3. Acessar o Site
- **Frontend**: http://localhost:3000
- **Admin**: http://localhost:3000/admin.html

## 📝 Gerenciar Produtos

### Adicionar Produto
1. Acesse http://localhost:3000/admin.html
2. Clique em "+ Novo Produto"
3. Preencha os campos:
   - **Nome** - Nome do produto (obrigatório)
   - **Preço** - Preço em R$ (obrigatório)
   - **Descrição** - Descrição completa (obrigatório)
   - **Descrição Curta** - Resumo (opcional)
   - **URL da Imagem** - Link da imagem (obrigatório)
   - **Link de Afiliado** - URL do link de afiliado (obrigatório)
4. Clique em "Salvar"

### Editar Produto
1. Na tabela de produtos, clique em "Editar"
2. Modifique os campos desejados
3. Clique em "Salvar"

### Deletar Produto
1. Na tabela de produtos, clique em "Deletar"
2. Confirme a exclusão
3. Produto será removido imediatamente

## 🎯 Funcionalidades de Conversão

- ✅ Hero section com CTAs destacados
- ✅ Badges de confiança (100% Seguro, Entrega Rápida, Suporte 24/7)
- ✅ Seção de vantagens com cards
- ✅ Depoimentos de clientes com 5 estrelas
- ✅ Cards de produtos com imagem, preço e botão de compra
- ✅ Todos os botões apontam para links de afiliado

## 🔧 API Endpoints

### Listar Produtos
```bash
GET /api/products
```

### Obter Produto Específico
```bash
GET /api/products/1
```

### Criar Produto
```bash
POST /api/products
Content-Type: application/json

{
  "name": "Nome do Produto",
  "price": "99.99",
  "description": "Descrição completa",
  "shortDescription": "Resumo",
  "imageUrl": "https://...",
  "affiliateLink": "https://..."
}
```

### Atualizar Produto
```bash
PUT /api/products/1
Content-Type: application/json

{
  "name": "Novo Nome",
  "price": "199.99"
}
```

### Deletar Produto
```bash
DELETE /api/products/1
```

## 💾 Dados

Os produtos são armazenados em `data/products.json`. Cada produto tem:
- `id` - ID único
- `name` - Nome do produto
- `price` - Preço em string (ex: "99.99")
- `description` - Descrição completa
- `shortDescription` - Descrição curta (opcional)
- `imageUrl` - URL da imagem
- `affiliateLink` - Link de afiliado

## 🎨 Customização

### Cores
As cores estão definidas no CSS dos arquivos HTML:
- **Rosa Neon**: `#ec4899` ou `rgb(236, 72, 153)`
- **Ciano Neon**: `#22d3ee` ou `rgb(34, 211, 238)`
- **Fundo**: `rgb(13, 0, 26)` a `rgb(0, 13, 26)`

### Fontes
- **Títulos**: Space Mono (monospace)
- **Corpo**: Inter (sans-serif)

## 📱 Responsividade

O site é totalmente responsivo:
- ✅ Desktop (1280px+)
- ✅ Tablet (768px - 1279px)
- ✅ Mobile (até 767px)

## 🐛 Troubleshooting

### Porta 3000 já está em uso
```bash
# Usar outra porta
PORT=3001 npm start
```

### Erro ao criar/editar produtos
- Verifique se todos os campos obrigatórios estão preenchidos
- Verifique se as URLs são válidas
- Verifique os logs do servidor

### Imagens não carregam
- Verifique se a URL da imagem é válida
- Tente usar URLs de imagens públicas (Unsplash, Pexels, etc.)

## 📦 Deploy

Para fazer deploy:

1. **Heroku**
```bash
git init
git add .
git commit -m "Initial commit"
heroku create seu-app-name
git push heroku main
```

2. **Vercel** (não recomendado, pois é serverless)
3. **DigitalOcean App Platform**
4. **Railway.app**

## 📄 Licença

MIT

---

**Desenvolvido com ❤️ para vendas de afiliados**
