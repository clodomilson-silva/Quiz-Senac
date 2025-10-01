# Quiz EXPO Indústria Maranhão 2025 - SENAC

## 📋 Sobre o Projeto

Quiz interativo desenvolvido especialmente para a **EXPO Indústria Maranhão 2025**, organizada pelo **SENAC Maranhão**. O projeto foi criado com interface similar ao **WordWall**, oferecendo uma experiência gamificada e envolvente para os visitantes do evento.

## 🎯 Eixos Temáticos

O quiz está organizado em **5 eixos temáticos**, cada um com **7 questões**:

### 1. 💬 Comunicação Assertiva
- Conceitos de comunicação eficaz
- Técnicas de expressão clara e respeitosa
- Escuta ativa e feedback construtivo

### 2. 👑 Liderança e Gestão
- Princípios de liderança moderna
- Gestão de pessoas e equipes
- Tomada de decisões estratégicas

### 3. 🧠 Inteligência Emocional
- Autoconhecimento e autocontrole
- Empatia e relacionamentos interpessoais
- Gestão de emoções no ambiente de trabalho

### 4. 🛡️ Saúde / NR
- Normas Regulamentadoras (NR-1)
- Segurança e saúde ocupacional
- Direitos e deveres no trabalho

### 5. 💻 Tecnologia da Informação
- Fundamentos de TI
- Hardware e software
- Segurança digital e computação em nuvem

## 🚀 Funcionalidades

### Interface Gamificada
- ✨ Animações fluidas e transições suaves
- 🎨 Design moderno inspirado no WordWall
- 📱 Responsivo para tablets, totens e desktops
- 🎯 Cores temáticas para cada eixo

### Sistema de Quiz
- ⏱️ Timer de 30 segundos por pergunta
- 📊 Sistema de pontuação em tempo real
- 📝 Explicações detalhadas para cada resposta
- 🔄 Possibilidade de repetir o quiz
- 📈 Resultados com feedback personalizado

### Painel Administrativo
- ⚙️ Configurações gerais do quiz
- 📊 Visualização de estatísticas
- 🎨 Personalização de temas
- 🔧 Modo quiosque para exposições

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Styled Components** - Estilização CSS-in-JS
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e dev server

## 📦 Instalação e Execução

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd quiz-CEP

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Acesse o projeto em
http://localhost:5173
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── CategorySelector.jsx    # Seleção de categorias
│   ├── Quiz.jsx               # Componente principal do quiz
│   ├── AdminPanel.jsx         # Painel administrativo
│   └── AppMain.jsx           # Componente principal
├── data/
│   └── quizData.js           # Dados das perguntas e respostas
├── config/
│   └── quizConfig.js         # Configurações do sistema
├── styles/
│   └── StyledComponents.js   # Componentes estilizados
└── assets/                   # Recursos estáticos
```

## 🎨 Personalização

### Cores por Categoria
- **Comunicação Assertiva**: `#E60012` (Vermelho SENAC)
- **Liderança e Gestão**: `#0066CC` (Azul)
- **Inteligência Emocional**: `#28A745` (Verde)
- **Saúde / NR**: `#FFC107` (Amarelo)
- **Tecnologia da Informação**: `#17A2B8` (Ciano)

### Configurações Disponíveis
- Tempo por pergunta (padrão: 30s)
- Modo quiosque para exposições
- Personalização de mensagens
- Configurações de acessibilidade
- Temas responsivos por dispositivo

## 📱 Modo Exposição

O projeto inclui configurações especiais para uso em exposições:

- **Auto-reinício**: Retorna à tela inicial após inatividade
- **Modo quiosque**: Interface otimizada para uso público
- **Prevenção de zoom**: Evita manipulação indevida
- **Controles administrativos**: Acesso restrito por botão flutuante

## 📊 Sistema de Pontuação

- **Excelente**: 90% ou mais (🏆 Excelente! Você domina o assunto!)
- **Bom**: 70% - 89% (👏 Muito bom! Continue aprendendo!)
- **Regular**: 50% - 69% (👍 Bom trabalho! Há espaço para crescer!)
- **Precisa Melhorar**: Abaixo de 50% (📚 Continue estudando e evolua!)

## 🔧 Configurações Avançadas

### Arquivo `quizConfig.js`
```javascript
export const quizConfig = {
  timePerQuestion: 30,        // Tempo por pergunta
  showTimer: true,            // Exibir timer
  enableAnimations: true,     // Habilitar animações
  exhibitionMode: {           // Modo exposição
    enabled: true,
    autoRestartAfterCompletion: 30
  }
};
```

### Personalização de Temas
```javascript
export const categoryThemes = {
  1: {
    primary: '#E60012',
    gradient: 'linear-gradient(135deg, #E60012 0%, #FF4444 100%)'
  }
  // ...
};
```

## 🎯 Uso no Evento

### Para Visitantes
1. Acesse a tela inicial
2. Escolha um eixo temático
3. Responda às 7 perguntas
4. Veja seu resultado e explicações
5. Experimente outras categorias

### Para Organizadores
1. Use o botão ⚙️ para acessar configurações
2. Ajuste tempo, temas e modo quiosque
3. Monitore estatísticas de uso
4. Personalize mensagens do evento

## 📄 Licença

Este projeto foi desenvolvido especificamente para o SENAC Maranhão e a EXPO Indústria Maranhão 2025.

## 🤝 Contato

Para suporte ou dúvidas sobre o projeto, entre em contato com a equipe do SENAC Maranhão.

---

**SENAC Maranhão** | **EXPO Indústria Maranhão 2025**
*Educação profissional de qualidade para o futuro da indústria*