# 📋 GUIA DE IMPLEMENTAÇÃO PARA EXPOSIÇÃO

## 🎯 Configuração para EXPO Indústria Maranhão 2025

Este documento contém orientações específicas para configurar o quiz no ambiente da exposição.

### 🖥️ Configuração de Hardware Recomendada

#### Tablets
- **Tamanho**: 10" ou superior
- **Sistema**: Android 8+ ou iOS 12+
- **RAM**: Mínimo 3GB
- **Orientação**: Landscape (paisagem) preferencialmente
- **Suporte**: Base antifurto com cabo USB

#### Totens Interativos
- **Tela**: 21" a 32" touchscreen
- **Resolução**: 1920x1080 (Full HD) mínimo
- **Sistema**: Windows 10+ ou Ubuntu com Chrome
- **Hardware**: PC integrado ou mini PC
- **Conexão**: Ethernet para estabilidade

### ⚙️ Configurações Específicas

#### 1. Modo Quiosque
```javascript
// No arquivo quizConfig.js
exhibitionMode: {
  enabled: true,                    // Ativa modo exposição
  autoRestartAfterCompletion: 30,   // Reinicia após 30s
  hideAdminControls: false,         // Mantém acesso admin
  preventNavigation: true,          // Impede navegação externa
  attractMode: {
    enabled: true,                  // Modo atrativo
    timeout: 120,                   // 2 min para voltar ao início
    animation: true                 // Animações atrativas
  }
}
```

#### 2. Navegador (Chrome/Edge)
```
# Parâmetros de linha de comando para modo quiosque:
--kiosk
--disable-pinch
--overscroll-history-navigation=0
--disable-dev-shm-usage
--no-sandbox
--disable-web-security
--allow-running-insecure-content
```

#### 3. Prevenção de Problemas
```css
/* Desabilitar seleção de texto */
body { 
  user-select: none; 
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Desabilitar zoom */
meta[name="viewport"] { 
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" 
}
```

### 📊 Monitoramento de Uso

#### Estatísticas Coletadas
- Número de sessões por categoria
- Tempo médio por pergunta
- Taxa de acerto por eixo temático
- Picos de uso por horário
- Perguntas mais difíceis

#### Dashboard Administrativo
Acesse via botão ⚙️ para visualizar:
- **Participações em tempo real**
- **Categoria mais popular**
- **Pontuação média por eixo**
- **Gráficos de engajamento**

### 🎨 Personalização Visual

#### Cores da Marca SENAC
```javascript
// Cores oficiais já configuradas
senacRed: '#E60012',     // Vermelho principal
senacBlue: '#0066CC',    // Azul secundário
senacGray: '#6C757D',    // Cinza neutro
```

#### Logos e Branding
- Logo SENAC: 200x60px (PNG transparente)
- Logo EXPO: 180x50px (PNG transparente)
- Favicon: 32x32px
- Splash screen: 512x512px

### 🔧 Instalação no Local

#### Checklist Pré-Evento
- [ ] Testar conectividade de internet
- [ ] Verificar resolução de tela
- [ ] Configurar modo quiosque
- [ ] Testar todos os eixos temáticos
- [ ] Validar timer e animações
- [ ] Configurar auto-reinício
- [ ] Testar painel administrativo
- [ ] Preparar instruções para staff

#### Script de Inicialização
```bash
#!/bin/bash
# Para sistemas Linux
google-chrome --kiosk --disable-pinch http://localhost:3000

# Para Windows (PowerShell)
Start-Process chrome.exe "--kiosk --disable-pinch http://localhost:3000"
```

### 👥 Orientações para Staff

#### Durante o Evento
1. **Monitor principal**: Verificar funcionamento a cada 2h
2. **Limpeza de tela**: Passar pano seco a cada 4h
3. **Reinicialização**: Se necessário, usar Ctrl+F5
4. **Suporte técnico**: Telefone de contato disponível

#### Problemas Comuns
| Problema | Solução |
|----------|---------|
| Tela congelada | F5 para recarregar |
| Quiz não carrega | Verificar internet |
| Timer não funciona | Recarregar página |
| Tela muito escura | Ajustar brilho do dispositivo |

### 📱 Modo Tablet Específico

#### Configurações Android
```xml
<!-- Adicionar ao AndroidManifest.xml para app dedicado -->
<uses-permission android:name="android.permission.INTERNET" />
<activity android:name=".MainActivity"
          android:launchMode="singleTask"
          android:screenOrientation="landscape" />
```

#### Configurações iOS
```json
// Para PWA no iOS
{
  "display": "fullscreen",
  "orientation": "landscape",
  "start_url": "/",
  "scope": "/"
}
```

### 🎯 Métricas de Sucesso

#### KPIs do Evento
- **Participação**: Meta de 500+ usuários/dia
- **Engajamento**: 90%+ completam ao menos 1 categoria
- **Satisfação**: Feedback positivo visual
- **Tempo médio**: 3-5 minutos por categoria
- **Taxa de retorno**: 30%+ fazem mais categorias

#### Relatório Pós-Evento
O sistema gera automaticamente:
- Total de participações
- Ranking de categorias
- Pontuação média por eixo
- Horários de pico
- Recomendações para próximos eventos

### 🚨 Contingência

#### Plano B - Problemas Técnicos
1. **Backup offline**: Versão simplificada sem timer
2. **Quiz em papel**: Versão impressa das perguntas
3. **Demonstração**: Staff apresenta no tablet
4. **Contato técnico**: Suporte remoto 24h

#### Suporte Técnico
- **Email**: suporte.quiz@senac-ma.br
- **WhatsApp**: (98) 9999-9999
- **Desenvolvedor**: Disponível durante evento

---

### 📞 Contatos da Implementação

**Coordenação SENAC MA**
- Nome: [Coordenador do Projeto]
- Email: [email@senac-ma.br]
- Telefone: (98) 3216-8000

**Suporte Técnico**
- Disponível 8h às 18h durante o evento
- WhatsApp para emergências
- Acesso remoto configurado

---

*Este guia garante uma implementação perfeita do Quiz EXPO Indústria Maranhão 2025*