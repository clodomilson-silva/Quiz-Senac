# Quiz ExpoIndústria - Senac

Quiz interativo gamificado inspirado no Wordwall, desenvolvido especialmente para a ExpoIndústria. Otimizado para uso em tablets e totens de exposição.

## 🚀 Características

- **Design Moderno**: Interface inspirada no Wordwall com animações suaves
- **Responsivo**: Otimizado para tablets e totens touch
- **Gamificação**: Sistema de pontuação, timer e feedback visual
- **Identidade Senac**: Cores e design alinhados com a marca
- **Acessibilidade**: Botões grandes e interface intuitiva para toque
- **PWA Ready**: Configurado para funcionar como aplicativo web

## 🛠 Tecnologias Utilizadas

- **React 18** - Biblioteca para interface de usuário
- **Vite** - Ferramenta de build rápida e moderna
- **Styled Components** - CSS-in-JS para estilização dinâmica
- **Framer Motion** - Animações fluidas e interativas
- **Lucide React** - Ícones modernos e limpos
- **React Router** - Navegação entre componentes

## 📱 Compatibilidade

- ✅ Tablets (iOS/Android)
- ✅ Totens touch screen
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Dispositivos com tela de 7" a 32"
- ✅ Orientação portrait e landscape

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos de Instalação

1. **Clone ou baixe o projeto**
   ```bash
   cd quiz-CEP
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento**
   ```bash
   npm run dev
   ```
   O servidor estará disponível em: `http://localhost:5173`

4. **Para build de produção**
   ```bash
   npm run build
   ```

5. **Para preview da build**
   ```bash
   npm run preview
   ```

## 📁 Estrutura do Projeto

```
quiz-CEP/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Quiz.jsx          # Componente principal do quiz
│   ├── data/
│   │   └── quizData.js       # Perguntas e configurações
│   ├── styles/
│   │   └── StyledComponents.js # Estilos com Styled Components
│   ├── App.jsx               # Componente raiz
│   ├── App.css              # Estilos globais
│   └── main.jsx             # Entry point
├── index.html               # HTML principal com meta tags
├── package.json
└── README.md
```

## ⚙️ Configuração do Quiz

### Editando Perguntas

As perguntas estão no arquivo `src/data/quizData.js`:

```javascript
export const quizData = {
  title: "Quiz ExpoIndústria - Senac",
  subtitle: "Teste seus conhecimentos sobre inovação e tecnologia",
  questions: [
    {
      id: 1,
      question: "Sua pergunta aqui?",
      options: [
        "Opção A",
        "Opção B", 
        "Opção C",
        "Opção D"
      ],
      correct: 1, // Índice da resposta correta (0-3)
      explanation: "Explicação da resposta"
    }
    // ... mais perguntas
  ]
}
```

### Personalizando Cores

As cores estão no arquivo `src/styles/StyledComponents.js`:

```javascript
export const colors = {
  primary: '#E60012',      // Vermelho Senac
  secondary: '#0066CC',    // Azul
  success: '#28A745',      // Verde
  // ... outras cores
};
```

### Configurações do Timer

No componente `Quiz.jsx`, você pode ajustar:

```javascript
const [timeLeft, setTimeLeft] = useState(30); // Segundos por pergunta
```

## 🎨 Features Principais

### Tela Inicial
- Logo e título do Senac
- Instruções claras
- Botão de início atrativo

### Durante o Quiz
- Barra de progresso visual
- Timer com mudança de cor
- Animações nas transições
- Feedback imediato nas respostas
- Explicações educativas

### Tela de Resultados
- Pontuação final
- Porcentagem de acertos
- Mensagem motivacional
- Botão para jogar novamente

## 🔧 Configurações para Produção

### Para Totens e Tablets

1. **Modo Kiosk**: Configure o navegador em modo quiosque
2. **Prevenção de Zoom**: Já configurado no HTML
3. **Orientação**: Otimizado para portrait e landscape
4. **Touch**: Interface otimizada para toque

### Hospedagem Recomendada

- **Vercel**: `npm run build` + deploy automático
- **Netlify**: Deploy direto do repositório
- **Firebase Hosting**: Para projetos Google
- **Servidor próprio**: Arquivos da pasta `dist/`

## 📊 Métricas e Analytics

Para adicionar tracking, você pode integrar:

- Google Analytics
- Hotjar para heatmaps
- Custom events para pontuações

## 🚀 Deploy Rápido

### Vercel (Recomendado)

1. Instale a CLI: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções

### Netlify

1. Execute: `npm run build`
2. Arraste a pasta `dist` para netlify.app
3. Configure domínio personalizado

## 🔒 Segurança

- Nenhum dado sensível no frontend
- Configurado para HTTPS
- Headers de segurança configurados

## 📱 PWA (Progressive Web App)

O projeto está configurado para funcionar como PWA:

- Instalável em dispositivos
- Funciona offline (após primeiro carregamento)
- Ícones e splash screens configurados

## 🤝 Suporte

Para dúvidas ou problemas:

1. Verifique se Node.js está atualizado
2. Execute `npm install` novamente
3. Verifique o console do navegador
4. Teste em modo incógnito

## 📄 Licença

Este projeto foi desenvolvido para o Senac - ExpoIndústria.

---

**Desenvolvido com ❤️ para o Senac**

Quiz interativo que combina educação e tecnologia para uma experiência única na ExpoIndústria!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
