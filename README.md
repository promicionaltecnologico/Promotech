# 🚀 Promotech - Sistema Admin de Produtos

Sistema completo de gerenciamento de produtos para a loja afiliada Promotech com autenticação segura e backend Node.js.

## 📋 Requisitos

- **Node.js** (v14 ou superior) - [Download](https://nodejs.org/)
- **npm** (vem com Node.js)
- Navegador moderno (Chrome, Firefox, Edge, Safari)

---

## 🔧 Instalação Rápida

### 1️⃣ Clonar ou baixar o repositório

```bash
git clone https://github.com/promicionaltecnologico/Promotech.git
cd Promotech
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Organizar pastas (importante!)

Crie uma pasta `public` e mova os arquivos HTML:

```bash
mkdir public
mv admin.html public/
mv index.html public/
```

**Estrutura esperada:**
```
Promotech/
├── server.js              ✅ Backend
├── package.json           ✅ Dependências
├── public/                ✅ Pasta de arquivos estáticos
│   ├── admin.html         ✅ Painel administrativo
│   └── index.html         ✅ Página principal
├── products.json          (criado automaticamente)
└── node_modules/          (instalado com npm install)
```

### 4️⃣ Rodar o servidor

```bash
npm start
```

Você verá:
```
🚀 Servidor rodando em http://localhost:3000
```

### 5️⃣ Acessar o admin

Abra no navegador:
```
http://localhost:3000/admin.html
```

---

## 🔐 Senha de Acesso

**Senha:** `PromoTech@2024#Secure`

> ⚠️ **Altere esta senha em produção!** Edite a função `checkPassword()` no `admin.html`

---

## 📊 Como Usar

### ✅ Criar Produto

1. Clique em **"+ Novo Produto"**
2. Preencha os 4 campos obrigatórios:
   - Nome do Produto
   - Preço (R$)
   - URL da Imagem
   - Link de Afiliado
3. Clique em **"Salvar"**

### ✏️ Editar Produto

1. Na tabela, clique em **"Editar"** no produto
2. Modifique os dados
3. Clique em **"Salvar"**

### 🗑️ Deletar Produto

1. Na tabela, clique em **"Deletar"** no produto
2. Confirme a exclusão

---

## 🔌 API REST

### Endpoints disponíveis:

#### 📥 GET - Listar todos os produtos
```bash
curl http://localhost:3000/api/products
```

#### 📥 GET - Obter um produto específico
```bash
curl http://localhost:3000/api/products/1234567890
```

#### ➕ POST - Criar novo produto
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Capinha de Celular",
    "price": 29.90,
    "imageUrl": "https://exemplo.com/imagem.jpg",
    "affiliateLink": "https://shopee.com.br/..."
  }'
```

#### ✏️ PUT - Atualizar produto
```bash
curl -X PUT http://localhost:3000/api/products/1234567890 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Capinha de Celular Premium",
    "price": 49.90,
    "imageUrl": "https://exemplo.com/imagem-nova.jpg",
    "affiliateLink": "https://shopee.com.br/..."
  }'
```

#### 🗑️ DELETE - Deletar produto
```bash
curl -X DELETE http://localhost:3000/api/products/1234567890
```

---

## 📁 Banco de Dados

Os produtos são salvos em **`products.json`** (criado automaticamente).

**Exemplo:**
```json
[
  {
    "id": "1718204397000",
    "name": "Capinha de Celular",
    "price": 29.90,
    "imageUrl": "https://exemplo.com/imagem.jpg",
    "affiliateLink": "https://shopee.com.br/...",
    "createdAt": "2026-06-12T13:09:57.000Z"
  }
]
```

---

## 🚨 Troubleshooting

### ❌ Erro: "npm: command not found"
**Solução:** Instale Node.js em https://nodejs.org/

### ❌ Erro: "Port 3000 already in use"
**Solução:** Mude a porta no `server.js`:
```javascript
const PORT = process.env.PORT || 5000; // Mude para 5000
```

### ❌ Admin não carrega produtos
**Solução:** Certifique-se que:
- Servidor está rodando (`npm start`)
- Arquivo está em `public/admin.html`
- Não há erro no console do navegador (F12)

### ❌ Produtos não salvam
**Solução:** Verifique permissões de pasta e se há espaço em disco

---

## 🔒 Segurança

### ⚠️ Importante para Produção:

1. **Mude a senha padrão:**
   - Edite `PromoTech@2024#Secure` no `admin.html`

2. **Use HTTPS:**
   - Configure certificado SSL/TLS

3. **Valide dados no backend:**
   - Já implementado em `server.js`

4. **Proteja com senha o banco de dados:**
   - Considere usar MongoDB ou PostgreSQL

---

## 🌐 Deploy (Produção)

### Opção 1: Heroku

```bash
# 1. Instale Heroku CLI
# 2. Login
heroku login

# 3. Crie app
heroku create seu-app-name

# 4. Deploy
git push heroku main
```

### Opção 2: AWS, Google Cloud, Azure

Consulte documentação específica de cada plataforma.

---

## 📞 Suporte

Dúvidas? Abra uma issue no GitHub ou entre em contato: promicionaltecnologiabr@gmail.com

---

## 📝 Licença

ISC © 2026 Promotech

---

## 📦 Dependências

- **Express.js** 4.18.2 - Framework web
- **CORS** 2.8.5 - Permite requisições cross-origin

---

**Desenvolvido com ❤️ para Promotech**
