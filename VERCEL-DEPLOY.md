# 🚀 Deploy Guide - Vercel

## 📋 Checklist de Deploy

### ✅ Preparação Concluída
- [x] Build da aplicação executado com sucesso
- [x] Repositório Git configurado
- [x] Código enviado para GitHub
- [x] Arquivo `vercel.json` criado
- [x] README atualizado

### 🔧 Configurações do Vercel

#### 1. **Framework Preset**
```
Vite
```

#### 2. **Build Command**
```
npm run build
```

#### 3. **Output Directory**
```
dist
```

#### 4. **Install Command**
```
npm install
```

## 🌐 Passos para Deploy no Vercel

### 1. **Acesse o Vercel**
- Vá para [vercel.com](https://vercel.com)
- Faça login com sua conta GitHub

### 2. **Importar Projeto**
- Clique em "New Project"
- Selecione o repositório: `clodomilson-silva/Quiz-Senac`
- Configure as opções:
  - **Framework Preset:** Vite
  - **Root Directory:** `./`
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`

### 3. **Deploy Automático**
- Clique em "Deploy"
- Aguarde o processo de build
- URL será gerada automaticamente

### 4. **Configurações Adicionais**
- **Domain:** Configure um domínio personalizado (opcional)
- **Environment Variables:** Não necessárias para este projeto
- **Analytics:** Ative se desejar métricas

## 📁 Arquivos de Configuração

### `vercel.json`
```json
{
  "version": 2,
  "name": "quiz-senac-expo-industria-2025",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### `package.json` - Scripts Necessários
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 🔄 Deploy Contínuo

### Configuração Automática
- **Branch Principal:** `main`
- **Auto-Deploy:** Habilitado
- **Preview Deploys:** Habilitado para PRs

### Comandos Git para Updates
```bash
# Fazer alterações no código
# Commit das mudanças
git add .
git commit -m "update: descrição das mudanças"

# Push para deploy automático
git push origin main
```

## 🎯 URL Final
Após o deploy, a aplicação estará disponível em:
```
https://quiz-senac-[hash].vercel.app
```

## ⚡ Performance
- **Build Time:** ~30-60 segundos
- **Cold Start:** <500ms
- **CDN:** Global
- **HTTPS:** Automático

## 🔧 Troubleshooting

### Problemas Comuns
1. **Build Falha:** Verificar se todos os packages estão instalados
2. **Rota 404:** Configurar redirects no `vercel.json`
3. **Assets não carregam:** Verificar paths relativos

### Comandos de Debug
```bash
# Testar build local
npm run build

# Preview da build
npm run preview

# Verificar logs do Vercel
vercel logs [deployment-url]
```

---

**✅ Aplicação pronta para deploy no Vercel!**