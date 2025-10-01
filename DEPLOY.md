# 🚀 Guia de Deploy - Quiz EXPO Indústria Maranhão 2025

## Opções de Hospedagem

### 1. 🌐 Vercel (Recomendado para Internet)

**Características:**
- ✅ Gratuito para projetos open source
- ✅ Deploy automático via Git
- ✅ CDN global e alta performance
- ✅ HTTPS automático

**Passo a passo:**
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub/GitLab
3. Importe o repositório do quiz
4. Configure:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Deploy automático!

**URL de exemplo:** `https://quiz-expo-industria.vercel.app`

---

### 2. 📱 Netlify (Alternativa Web)

**Deploy Rápido:**
```bash
# Build do projeto
npm run build

# Upload manual
# Arraste a pasta 'dist' para netlify.com/drop
```

**Deploy via Git:**
1. Conecte repositório ao Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

---

### 3. 💻 Servidor Local (Para Exposição)

**Para tablets e totens sem internet:**

#### Opção A - Servidor Node.js
```bash
# Instalar servidor estático
npm install -g serve

# Build e servir
npm run build
serve -s dist -p 3000

# Acesso local: http://localhost:3000
# Acesso em rede: http://[IP-DA-MAQUINA]:3000
```

#### Opção B - Servidor Apache/Nginx
```bash
# Build do projeto
npm run build

# Copiar pasta 'dist' para:
# Apache: /var/www/html/quiz
# Nginx: /usr/share/nginx/html/quiz
```

#### Opção C - Python (Simples)
```bash
# Build do projeto
npm run build
cd dist

# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

---

### 4. 🔧 Configuração para Exposição

#### Arquivo de Configuração Nginx
```nginx
server {
    listen 80;
    server_name quiz-expo.local;
    root /var/www/quiz/dist;
    index index.html;
    
    # Cache de assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Fallback para SPA
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Script de Inicialização Windows
```batch
@echo off
echo Iniciando Quiz EXPO Industria...
cd /d "C:\quiz-expo"
npm run build
npx serve -s dist -p 3000
echo Quiz rodando em http://localhost:3000
pause
```

#### Script de Inicialização Linux
```bash
#!/bin/bash
echo "Iniciando Quiz EXPO Indústria..."
cd /opt/quiz-expo
npm run build
npx serve -s dist -p 3000 &
echo "Quiz rodando em http://localhost:3000"
echo "PID: $!" > quiz.pid
```

---

### 5. 📋 Checklist de Deploy

#### Antes do Deploy
- [ ] Testar todas as 5 categorias
- [ ] Verificar timer funcionando
- [ ] Testar responsividade
- [ ] Validar painel administrativo
- [ ] Checar todas as animações
- [ ] Confirmar cores da marca SENAC

#### Para Exposição Local
- [ ] Configurar IP fixo na rede
- [ ] Testar acesso de múltiplos dispositivos
- [ ] Configurar modo quiosque nos browsers
- [ ] Preparar script de auto-inicialização
- [ ] Testar reconexão após queda de energia
- [ ] Documentar IPs e portas para equipe

#### Pós-Deploy
- [ ] Testar em dispositivos reais
- [ ] Verificar velocidade de carregamento
- [ ] Confirmar funcionamento offline (se local)
- [ ] Treinar equipe de suporte
- [ ] Preparar monitoramento de uso

---

### 6. 🌐 URLs de Acesso

#### Produção (Internet)
- **Principal**: `https://quiz-expo-industria.vercel.app`
- **Backup**: `https://quiz-senac-ma.netlify.app`

#### Local (Exposição)
- **Servidor principal**: `http://192.168.1.100:3000`
- **Tablets**: Configurar IP fixo
- **Totens**: Bookmark no browser

---

### 7. 🔧 Configurações de Rede

#### Para Múltiplos Dispositivos
```bash
# Descobrir IP da máquina
ipconfig        # Windows
ifconfig        # Linux/Mac

# Exemplo: IP 192.168.1.100
# Acesso: http://192.168.1.100:3000
```

#### Firewall Windows
```powershell
# Liberar porta 3000
netsh advfirewall firewall add rule name="Quiz EXPO" dir=in action=allow protocol=TCP localport=3000
```

#### Firewall Linux
```bash
# Ubuntu/Debian
sudo ufw allow 3000

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

---

### 8. 📊 Monitoramento

#### Analytics de Uso
```javascript
// Google Analytics (opcional)
gtag('config', 'GA_MEASUREMENT_ID', {
  custom_map: {
    'custom_parameter_1': 'quiz_category',
    'custom_parameter_2': 'quiz_score'
  }
});
```

#### Log de Acesso
```bash
# Logs do servidor
tail -f access.log

# Monitorar em tempo real
grep "GET /" access.log | wc -l
```

---

### 9. 🚨 Backup e Recuperação

#### Backup dos Dados
```bash
# Backup do projeto
tar -czf quiz-expo-backup-$(date +%Y%m%d).tar.gz quiz-expo/

# Backup automático diário
0 2 * * * tar -czf /backup/quiz-$(date +\%Y\%m\%d).tar.gz /opt/quiz-expo/
```

#### Plano de Contingência
1. **Servidor principal falha**: Usar backup no Vercel/Netlify
2. **Internet cai**: Usar servidor local offline
3. **Hardware falha**: Tablets backup configurados
4. **Software corrompido**: Reinstalar do backup

---

### 📞 Suporte Técnico

**Durante a EXPO Indústria:**
- **Suporte 24h**: WhatsApp (98) 9999-9999
- **Email**: suporte.quiz@senac-ma.br
- **Acesso remoto**: Configurado para emergências

---

*Deploy preparado especialmente para a EXPO Indústria Maranhão 2025*
3. Arraste a pasta `dist` para a área de deploy
4. Pronto! Sua aplicação estará online

**Método 2 - Git Integration:**

1. Conecte seu repositório no Netlify
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy automático a cada commit

---

### 3. Firebase Hosting (Google - Gratuito)

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login no Firebase
firebase login

# Inicializar projeto
firebase init hosting

# Build do projeto
npm run build

# Deploy
firebase deploy
```

**Configuração no firebase.json:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{
      "source": "**",
      "destination": "/index.html"
    }]
  }
}
```

---

### 4. GitHub Pages (Gratuito)

**Adicione ao package.json:**
```json
{
  "homepage": "https://seuusuario.github.io/quiz-CEP",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

---

### 5. Servidor Próprio (VPS/Dedicado)

**Preparação:**
```bash
# Build do projeto
npm run build

# Upload da pasta 'dist' para seu servidor
# Exemplo com SCP:
scp -r dist/* usuario@servidor:/var/www/html/
```

**Configuração Nginx:**
```nginx
server {
    listen 80;
    server_name seudominio.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Configurações para PWA
    location /manifest.json {
        add_header Cache-Control "no-cache";
    }

    # Compressão
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Configuração Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

---

## 🔧 Configurações Específicas para Totens

### Modo Kiosk no Chrome
```bash
# Windows
chrome.exe --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 https://seusite.com

# Linux
google-chrome --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 https://seusite.com

# macOS
open -a "Google Chrome" --args --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 https://seusite.com
```

### Modo Kiosk no Firefox
```bash
firefox --kiosk https://seusite.com
```

### Configurações do Sistema
```javascript
// Adicionar ao index.html para prevenção de zoom
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

// JavaScript para prevenir gestos
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});

document.addEventListener('gestureend', function (e) {
    e.preventDefault();
});
```

---

## 📱 Configurações PWA

**Manifest.json (já incluído):**
```json
{
  "name": "Quiz ExpoIndústria - Senac",
  "short_name": "Quiz Senac",
  "description": "Quiz interativo sobre tecnologia e inovação",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#f5f7fa",
  "theme_color": "#E60012",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🔒 Configurações de Segurança

**Headers de Segurança (Netlify):**
Criar arquivo `_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self';
```

**Headers de Segurança (Vercel):**
Criar arquivo `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📊 Analytics e Monitoramento

**Google Analytics 4:**
```javascript
// Adicionar ao index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Eventos Customizados:**
```javascript
// No componente Quiz
const trackQuizStart = () => {
  gtag('event', 'quiz_start', {
    event_category: 'engagement',
    event_label: 'expo_industria'
  });
};

const trackQuizComplete = (score) => {
  gtag('event', 'quiz_complete', {
    event_category: 'engagement',
    event_label: 'expo_industria',
    value: score
  });
};
```

---

## 🚀 Checklist de Deploy

- [ ] Testar em diferentes navegadores
- [ ] Testar em tablets e dispositivos touch
- [ ] Verificar responsividade
- [ ] Testar modo offline (PWA)
- [ ] Configurar domínio personalizado
- [ ] Adicionar certificado SSL
- [ ] Configurar headers de segurança
- [ ] Testar performance (Lighthouse)
- [ ] Configurar analytics (opcional)
- [ ] Testar modo kiosk
- [ ] Backup do código fonte

---

## 🆘 Solução de Problemas

**Problema: Aplicação não carrega**
- Verificar se o build foi gerado corretamente
- Checar se os arquivos estão no diretório correto
- Verificar console do navegador para erros

**Problema: Zoom indesejado em tablets**
- Verificar meta viewport
- Testar CSS touch-action
- Verificar JavaScript de prevenção

**Problema: Fontes muito pequenas**
- Ajustar CSS media queries
- Usar unidades rem em vez de px
- Testar em dispositivos reais

**Problema: Performance lenta**
- Otimizar imagens
- Verificar se compression está ativa
- Usar ferramentas como Lighthouse

---

**Desenvolvido para o Senac - ExpoIndústria 2025**