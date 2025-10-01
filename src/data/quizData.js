export const quizData = {
  title: "Quiz EXPO Indústria Maranhão 2025",
  subtitle: "Teste seus conhecimentos em 5 áreas essenciais",
  categories: [
    {
      id: 1,
      name: "Comunicação Assertiva",
      icon: "💬",
      color: "#E60012",
      description: "Desenvolva suas habilidades de comunicação eficaz"
    },
    {
      id: 2,
      name: "Liderança e Gestão",
      icon: "👑",
      color: "#0066CC",
      description: "Aprenda sobre liderança e gestão de equipes"
    },
    {
      id: 3,
      name: "Inteligência Emocional",
      icon: "🧠",
      color: "#28A745",
      description: "Compreenda e gerencie suas emoções"
    },
    {
      id: 4,
      name: "Saúde / NR",
      icon: "🛡️",
      color: "#FFC107",
      description: "Normas de segurança e saúde ocupacional"
    },
    {
      id: 5,
      name: "Tecnologia da Informação",
      icon: "💻",
      color: "#17A2B8",
      description: "Fundamentos de TI e tecnologia"
    }
  ],
  questions: {
    1: [ // Comunicação Assertiva
      {
        id: 1,
        question: "O que significa comunicação assertiva?",
        options: [
          "Falar tudo o que pensa, sem se preocupar com os outros.",
          "Expressar ideias e sentimentos de forma clara e respeitosa.",
          "Evitar conflitos, ficando sempre em silêncio."
        ],
        correct: 1,
        explanation: "A comunicação assertiva é a capacidade de expressar-se de forma clara, direta e respeitosa."
      },
      {
        id: 2,
        question: "Uma característica da comunicação assertiva é:",
        options: [
          "Impor a própria opinião acima dos outros.",
          "Usar agressividade para se fazer ouvir.",
          "Equilibrar firmeza e respeito ao se comunicar."
        ],
        correct: 2,
        explanation: "A comunicação assertiva equilibra firmeza na mensagem com respeito pelo interlocutor."
      },
      {
        id: 3,
        question: "Qual dessas frases é um exemplo de comunicação assertiva?",
        options: [
          "Você nunca faz nada direito!",
          "Entendo sua opinião, mas gostaria de explicar meu ponto de vista.",
          "Tanto faz, faça do jeito que quiser."
        ],
        correct: 1,
        explanation: "Esta frase demonstra respeito pela opinião do outro enquanto expressa o próprio ponto de vista."
      },
      {
        id: 4,
        question: "A escuta ativa, essencial na comunicação assertiva, consiste em:",
        options: [
          "Ouvir com atenção e demonstrar interesse pelo que o outro fala.",
          "Pensar na resposta enquanto o outro fala.",
          "Interromper para dar sua opinião rapidamente."
        ],
        correct: 0,
        explanation: "A escuta ativa envolve ouvir atentamente e demonstrar interesse genuíno."
      },
      {
        id: 5,
        question: "O que deve ser evitado na comunicação assertiva?",
        options: [
          "Falar de forma clara e objetiva.",
          "Usar tom agressivo ou acusatório.",
          "Demonstrar empatia ao ouvir o outro."
        ],
        correct: 1,
        explanation: "Tons agressivos ou acusatórios prejudicam a comunicação assertiva."
      },
      {
        id: 6,
        question: "Quando alguém se comunica de forma passiva, geralmente:",
        options: [
          "Expõe suas ideias com respeito e clareza.",
          "Se omite ou aceita situações sem se posicionar.",
          "Impõe suas opiniões de forma dura e autoritária."
        ],
        correct: 1,
        explanation: "A comunicação passiva caracteriza-se pela omissão e falta de posicionamento."
      },
      {
        id: 7,
        question: "A principal vantagem da comunicação assertiva é:",
        options: [
          "Criar conflitos para resolver problemas rapidamente.",
          "Fortalecer relações, promover respeito e compreensão mútua.",
          "Evitar completamente qualquer tipo de divergência."
        ],
        correct: 1,
        explanation: "A comunicação assertiva fortalece relacionamentos através do respeito mútuo."
      }
    ],
    2: [ // Liderança e Gestão
      {
        id: 8,
        question: "O que é liderança?",
        options: [
          "A capacidade de mandar nos outros.",
          "Uma habilidade de influenciar e inspirar pessoas para alcançar objetivos.",
          "O poder de tomar todas as decisões sozinho."
        ],
        correct: 1,
        explanation: "Liderança é sobre influenciar e inspirar, não apenas dar ordens."
      },
      {
        id: 9,
        question: "Um bom líder deve:",
        options: [
          "Delegar tarefas, motivar a equipe e dar bons exemplos.",
          "Centralizar todas as decisões em si mesmo.",
          "Evitar ouvir opiniões diferentes."
        ],
        correct: 0,
        explanation: "Um bom líder delega, motiva e serve como exemplo para a equipe."
      },
      {
        id: 10,
        question: "O que significa 'gestão de pessoas'?",
        options: [
          "Controlar rigidamente o comportamento dos colaboradores.",
          "Administrar e desenvolver talentos dentro da equipe.",
          "Apenas contratar e demitir funcionários."
        ],
        correct: 1,
        explanation: "Gestão de pessoas envolve administrar e desenvolver o potencial da equipe."
      },
      {
        id: 11,
        question: "Qual das opções demonstra uma prática de liderança democrática?",
        options: [
          "Tomar decisões sem consultar a equipe.",
          "Incentivar a participação e considerar opiniões no processo decisório.",
          "Impor regras sem permitir diálogo."
        ],
        correct: 1,
        explanation: "A liderança democrática valoriza a participação e opinião da equipe."
      },
      {
        id: 12,
        question: "Um dos principais papéis da gestão é:",
        options: [
          "Definir metas e organizar recursos para alcançá-las.",
          "Evitar mudanças e manter tudo como está.",
          "Assumir todas as tarefas sem dividir com a equipe."
        ],
        correct: 0,
        explanation: "A gestão envolve planejamento de metas e organização de recursos."
      },
      {
        id: 13,
        question: "Qual é a diferença entre líder e chefe?",
        options: [
          "O chefe exige autoridade; o líder inspira e motiva.",
          "O chefe é simpático; o líder é sério.",
          "Não há diferença entre os dois termos."
        ],
        correct: 0,
        explanation: "Líderes inspiram através do exemplo, chefes dependem da autoridade hierárquica."
      },
      {
        id: 14,
        question: "Qual é uma característica importante de um bom gestor?",
        options: [
          "Ser resistente a mudanças.",
          "Ter visão estratégica e capacidade de planejamento.",
          "Evitar ouvir feedbacks."
        ],
        correct: 1,
        explanation: "Bons gestores têm visão estratégica e planejam adequadamente."
      }
    ],
    3: [ // Inteligência Emocional
      {
        id: 15,
        question: "O que é inteligência emocional?",
        options: [
          "A capacidade de controlar as emoções dos outros.",
          "A habilidade de reconhecer, compreender e gerenciar as próprias emoções e as dos outros.",
          "A facilidade em esconder sentimentos."
        ],
        correct: 1,
        explanation: "Inteligência emocional envolve reconhecer, compreender e gerenciar emoções."
      },
      {
        id: 16,
        question: "Uma pessoa com inteligência emocional desenvolvida é capaz de:",
        options: [
          "Identificar seus sentimentos e lidar com eles de forma saudável.",
          "Ignorar completamente suas emoções.",
          "Reagir de forma impulsiva diante de qualquer situação."
        ],
        correct: 0,
        explanation: "Pessoas emocionalmente inteligentes identificam e gerenciam suas emoções adequadamente."
      },
      {
        id: 17,
        question: "Qual das alternativas é uma das competências da inteligência emocional?",
        options: [
          "Autoconsciência.",
          "Memorização.",
          "Velocidade de cálculo lógico."
        ],
        correct: 0,
        explanation: "Autoconsciência é uma das principais competências da inteligência emocional."
      },
      {
        id: 18,
        question: "Quando conversamos sobre autocontrole emocional, significa:",
        options: [
          "Não sentir nada.",
          "Saber regular emoções em situações de pressão ou conflito.",
          "Reprimir sentimentos de forma permanente."
        ],
        correct: 1,
        explanation: "Autocontrole emocional é sobre regular emoções, não suprimi-las."
      },
      {
        id: 19,
        question: "Um exemplo de empatia no ambiente de trabalho é:",
        options: [
          "Julgar rapidamente a situação do colega.",
          "Colocar-se no lugar do outro e compreender seus sentimentos.",
          "Evitar conversar com pessoas que estão passando por dificuldades."
        ],
        correct: 1,
        explanation: "Empatia envolve compreender e se colocar no lugar do outro."
      },
      {
        id: 20,
        question: "A inteligência emocional contribui para:",
        options: [
          "Melhorar relacionamentos e tomar melhores decisões.",
          "Garantir que nunca haja conflitos.",
          "Impedir que alguém sinta emoções negativas."
        ],
        correct: 0,
        explanation: "A inteligência emocional melhora relacionamentos e a qualidade das decisões."
      },
      {
        id: 21,
        question: "Quando alguém reage de forma agressiva a uma crítica, podemos dizer que:",
        options: [
          "Está utilizando bem a inteligência emocional.",
          "Demonstra falta de controle emocional.",
          "Mostra alta capacidade de empatia."
        ],
        correct: 1,
        explanation: "Reações agressivas indicam falta de autocontrole emocional."
      }
    ],
    4: [ // Saúde / NR
      {
        id: 22,
        question: "O que significa NR-1?",
        options: [
          "Norma Regulamentadora sobre Saúde Mental.",
          "Norma Regulamentadora de Disposições Gerais e Gerenciamento de Riscos Ocupacionais.",
          "Norma Regulamentadora de Higiene Pessoal."
        ],
        correct: 1,
        explanation: "NR-1 estabelece disposições gerais e diretrizes de gerenciamento de riscos ocupacionais."
      },
      {
        id: 23,
        question: "Qual é o objetivo principal da NR-1?",
        options: [
          "Definir regras de convivência entre colegas.",
          "Estabelecer disposições gerais e direitos e deveres para prevenção de acidentes e doenças do trabalho.",
          "Criar normas apenas para empresas de grande porte."
        ],
        correct: 1,
        explanation: "A NR-1 visa prevenir acidentes e doenças ocupacionais através de diretrizes gerais."
      },
      {
        id: 24,
        question: "O que é o Programa de Gerenciamento de Riscos (PGR), previsto na NR-1?",
        options: [
          "Documento que lista apenas os equipamentos usados no trabalho.",
          "Ferramenta para identificar, avaliar e controlar riscos ocupacionais.",
          "Registro de frequência de funcionários."
        ],
        correct: 1,
        explanation: "O PGR é uma ferramenta sistemática para gerenciar riscos ocupacionais."
      },
      {
        id: 25,
        question: "Quem é responsável por cumprir as disposições da NR-1?",
        options: [
          "Somente o empregador.",
          "Somente o trabalhador.",
          "Tanto empregador quanto trabalhadores."
        ],
        correct: 2,
        explanation: "A responsabilidade pelo cumprimento da NR-1 é compartilhada entre empregador e trabalhadores."
      },
      {
        id: 26,
        question: "Segundo a NR-1, o trabalhador deve:",
        options: [
          "Negar-se a usar os equipamentos de proteção fornecidos.",
          "Colaborar com a empresa na aplicação das normas de segurança.",
          "Ignorar os treinamentos obrigatórios."
        ],
        correct: 1,
        explanation: "Os trabalhadores devem colaborar ativamente com as medidas de segurança."
      },
      {
        id: 27,
        question: "Entre os direitos do trabalhador previstos na NR-1 estão:",
        options: [
          "Receber gratuitamente os treinamentos e orientações de segurança.",
          "Comprar seus próprios equipamentos de proteção.",
          "Escolher se deseja ou não participar de treinamentos obrigatórios."
        ],
        correct: 0,
        explanation: "Os trabalhadores têm direito a treinamentos gratuitos de segurança."
      },
      {
        id: 28,
        question: "A saúde ocupacional, dentro da NR-1, está diretamente ligada a:",
        options: [
          "Garantir apenas a produtividade da empresa.",
          "Preservar a integridade física e mental do trabalhador no ambiente laboral.",
          "Aumentar a competitividade entre funcionários."
        ],
        correct: 1,
        explanation: "A saúde ocupacional visa preservar a integridade física e mental dos trabalhadores."
      }
    ],
    5: [ // Tecnologia da Informação
      {
        id: 29,
        question: "O que significa a sigla TI?",
        options: [
          "Tecnologia da Informação",
          "Trabalho Industrial",
          "Transmissão de Internet"
        ],
        correct: 0,
        explanation: "TI significa Tecnologia da Informação."
      },
      {
        id: 30,
        question: "Qual é a principal função da Tecnologia da Informação em uma empresa?",
        options: [
          "Organizar festas e eventos.",
          "Gerenciar dados e dar suporte aos processos organizacionais.",
          "Somente manter computadores."
        ],
        correct: 1,
        explanation: "TI gerencia dados e apoia os processos organizacionais da empresa."
      },
      {
        id: 31,
        question: "O que é um software?",
        options: [
          "Um equipamento físico do computador.",
          "Um conjunto de programas e sistemas que executam funções.",
          "Apenas a parte elétrica da máquina."
        ],
        correct: 1,
        explanation: "Software é o conjunto de programas e sistemas que executam funções específicas."
      },
      {
        id: 32,
        question: "Qual das opções é um exemplo de hardware?",
        options: [
          "Planilha do Excel.",
          "Teclado e monitor.",
          "Sistema operacional Windows."
        ],
        correct: 1,
        explanation: "Hardware refere-se aos componentes físicos, como teclado e monitor."
      },
      {
        id: 33,
        question: "O que é nuvem (computação em nuvem) em TI?",
        options: [
          "Um espaço físico dentro do computador.",
          "Armazenamento e processamento de dados pela internet.",
          "Um programa de edição de imagens."
        ],
        correct: 1,
        explanation: "Computação em nuvem oferece recursos de TI através da internet."
      },
      {
        id: 34,
        question: "Para que serve um antivírus?",
        options: [
          "Criar senhas para usuários.",
          "Proteger o computador contra ameaças e programas maliciosos.",
          "Aumentar a velocidade da internet."
        ],
        correct: 1,
        explanation: "Antivírus protege o sistema contra malware e outras ameaças digitais."
      },
      {
        id: 35,
        question: "O que é um banco de dados?",
        options: [
          "Um lugar físico onde ficam guardados os computadores.",
          "Um sistema que organiza e armazena informações de forma estruturada.",
          "Apenas um programa para escrever textos."
        ],
        correct: 1,
        explanation: "Banco de dados é um sistema para organizar e armazenar informações estruturadamente."
      }
    ]
  },
  scoring: {
    excellent: { min: 90, message: "🏆 Excelente! Você domina o assunto!" },
    good: { min: 70, message: "👏 Muito bom! Continue aprendendo!" },
    average: { min: 50, message: "👍 Bom trabalho! Há espaço para crescer!" },
    needsImprovement: { min: 0, message: "📚 Continue estudando e evolua!" }
  }
};