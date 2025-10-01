// Configurações gerais do quiz
export const quizConfig = {
  // Configurações de tempo
  timePerQuestion: 30, // segundos por pergunta
  showTimer: true,
  timerWarningThreshold: 10, // segundos para mudar cor do timer
  
  // Configurações de pontuação
  pointsPerCorrectAnswer: 1,
  showScore: true,
  
  // Configurações de interface
  showProgressBar: true,
  showQuestionCounter: true,
  showExplanations: true,
  
  // Configurações de animação
  enableAnimations: true,
  transitionDuration: 0.5,
  
  // Configurações de acessibilidade
  highContrast: false,
  largeFonts: false,
  
  // Configurações específicas para totens/tablets
  preventZoom: true,
  fullscreenMode: false,
  autoRestart: false, // Reiniciar automaticamente após X minutos de inatividade
  autoRestartDelay: 300000, // 5 minutos em milissegundos
  
  // Configurações de marca
  branding: {
    showLogo: true,
    logoUrl: '/senac-logo.png',
    primaryColor: '#E60012',
    secondaryColor: '#0066CC',
    companyName: 'Senac Maranhão',
    eventName: 'EXPO Indústria Maranhão 2025'
  },
  
  // Configurações de dados
  shuffleQuestions: false,
  shuffleOptions: false,
  allowRetake: true,
  
  // Configurações de exportação/analytics
  trackResults: false,
  exportResults: false,
  analyticsId: '', // Google Analytics ID
  
  // Mensagens personalizáveis
  messages: {
    welcome: {
      title: "Quiz EXPO Indústria Maranhão 2025",
      subtitle: "Escolha seu eixo temático e teste seus conhecimentos",
      description: "Você terá {timePerQuestion} segundos para cada pergunta."
    },
    completion: {
      title: "Quiz Concluído!",
      thankYou: "Obrigado por participar!",
      callToAction: "Continue explorando as inovações do Senac na EXPO Indústria."
    },
    buttons: {
      start: "Iniciar Quiz",
      next: "Próxima Pergunta",
      finish: "Ver Resultado",
      restart: "Tentar Novamente",
      confirm: "Confirmar Resposta",
      backToCategories: "Outras Categorias"
    }
  },

  // Configurações para modo quiosque/exposição
  exhibitionMode: {
    enabled: true,
    autoRestartAfterCompletion: 30, // segundos
    hideAdminControls: false,
    preventNavigation: false,
    attractMode: {
      enabled: true,
      timeout: 120, // segundos de inatividade para voltar à tela inicial
      animation: true
    }
  }
};

// Configurações de temas/cores por categoria
export const categoryThemes = {
  1: { // Comunicação Assertiva
    primary: '#E60012',
    secondary: '#FF4444',
    gradient: 'linear-gradient(135deg, #E60012 0%, #FF4444 100%)',
    name: 'Comunicação Assertiva',
    icon: '💬'
  },
  2: { // Liderança e Gestão
    primary: '#0066CC',
    secondary: '#3399FF',
    gradient: 'linear-gradient(135deg, #0066CC 0%, #3399FF 100%)',
    name: 'Liderança e Gestão',
    icon: '👑'
  },
  3: { // Inteligência Emocional
    primary: '#28A745',
    secondary: '#5CB85C',
    gradient: 'linear-gradient(135deg, #28A745 0%, #5CB85C 100%)',
    name: 'Inteligência Emocional',
    icon: '🧠'
  },
  4: { // Saúde / NR
    primary: '#FFC107',
    secondary: '#FFD54F',
    gradient: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
    name: 'Saúde / NR',
    icon: '🛡️'
  },
  5: { // Tecnologia da Informação
    primary: '#17A2B8',
    secondary: '#5DADE2',
    gradient: 'linear-gradient(135deg, #17A2B8 0%, #5DADE2 100%)',
    name: 'Tecnologia da Informação',
    icon: '💻'
  }
};

// Configurações para diferentes dispositivos
export const deviceSettings = {
  tablet: {
    fontSize: 1.2,
    buttonPadding: '20px 30px',
    cardPadding: '30px',
    touchTargetSize: '60px'
  },
  desktop: {
    fontSize: 1.0,
    buttonPadding: '15px 25px',
    cardPadding: '25px',
    touchTargetSize: '50px'
  },
  totem: {
    fontSize: 1.4,
    buttonPadding: '25px 40px',
    cardPadding: '40px',
    touchTargetSize: '80px'
  }
};