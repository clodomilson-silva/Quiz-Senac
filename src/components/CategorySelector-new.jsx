import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Play, Sparkles } from 'lucide-react';

const SelectorContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: clamp(10px, 3vw, 20px);
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="%23ffffff" opacity="0.1"/></svg>') repeat;
    background-size: 50px 50px;
    animation: float 20s infinite linear;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-50px); }
  }

  /* Breakpoints para diferentes dispositivos */
  @media (max-width: 480px) {
    padding: 15px 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px 15px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 25px 20px;
  }

  @media (min-width: 1025px) {
    padding: 30px 40px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: clamp(30px, 5vw, 50px);
  z-index: 2;
  width: 100%;
  max-width: 800px;

  h1 {
    color: white;
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 900;
    margin-bottom: clamp(10px, 2vw, 15px);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    letter-spacing: -1px;
    line-height: 1.1;
  }

  h2 {
    color: rgba(255,255,255,0.9);
    font-size: clamp(1rem, 3vw, 1.3rem);
    font-weight: 400;
    margin-bottom: clamp(20px, 4vw, 30px);
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    line-height: 1.4;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .senac-badge {
    background: rgba(255,255,255,0.2);
    padding: clamp(8px 15px, 2vw, 10px 25px);
    border-radius: 50px;
    color: white;
    font-weight: 600;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
    display: inline-block;
    margin-bottom: clamp(15px, 3vw, 20px);
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90vw;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(15px, 3vw, 25px);
  width: 100%;
  max-width: 1200px;
  z-index: 2;
  
  /* Garantir que não ultrapasse as bordas */
  box-sizing: border-box;
  
  /* Responsividade específica */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 0 5px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 22px;
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
  }
`;

const CategoryCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: clamp(20px, 4vw, 30px);
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  border: 3px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  /* Garantir que o card não quebre o layout */
  box-sizing: border-box;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => props.color || '#667eea'};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.15);
    border-color: ${props => props.color || '#667eea'};
  }

  &:active {
    transform: translateY(-4px);
  }

  .category-icon {
    font-size: clamp(2.5rem, 8vw, 4rem);
    margin-bottom: clamp(15px, 3vw, 20px);
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
    display: block;
  }

  .category-name {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    font-weight: 700;
    color: #2d3748;
    margin-bottom: clamp(10px, 2vw, 15px);
    line-height: 1.2;
    hyphens: auto;
    word-wrap: break-word;
  }

  .category-description {
    color: #666;
    font-size: clamp(0.8rem, 2vw, 0.95rem);
    line-height: 1.4;
    margin-bottom: clamp(15px, 3vw, 20px);
    flex-grow: 1;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .start-button {
    background: ${props => props.color || '#667eea'};
    color: white;
    border: none;
    padding: clamp(10px 20px, 3vw, 12px 30px);
    border-radius: 50px;
    font-weight: 600;
    font-size: clamp(0.8rem, 2vw, 0.95rem);
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 44px; /* Touch target mínimo */
    width: 100%;
    max-width: 200px;
    margin: 0 auto;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  /* Responsividade para telas muito pequenas */
  @media (max-width: 320px) {
    min-height: 180px;
    padding: 15px;
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(20px, 5vw, 40px);
  margin-top: clamp(30px, 5vw, 40px);
  z-index: 2;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  color: white;
  min-width: 80px;

  .stat-number {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 900;
    display: block;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  .stat-label {
    font-size: clamp(0.7rem, 2vw, 0.9rem);
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 5px;
    line-height: 1.2;
  }
`;

const CategorySelector = ({ onCategorySelect }) => {
  const categories = [
    {
      id: 1,
      name: "Comunicação Assertiva",
      icon: "💬",
      color: "#E60012",
      description: "Desenvolva suas habilidades de comunicação eficaz e aprenda a se expressar com clareza"
    },
    {
      id: 2,
      name: "Liderança e Gestão",
      icon: "👑",
      color: "#0066CC",
      description: "Aprenda sobre liderança efetiva e gestão de equipes para o sucesso organizacional"
    },
    {
      id: 3,
      name: "Inteligência Emocional",
      icon: "🧠",
      color: "#28A745",
      description: "Compreenda e gerencie suas emoções para melhores relacionamentos interpessoais"
    },
    {
      id: 4,
      name: "Saúde / NR1",
      icon: "🛡️",
      color: "#FFC107",
      description: "Normas de segurança e saúde ocupacional para um ambiente de trabalho seguro"
    },
    {
      id: 5,
      name: "Tecnologia da Informação",
      icon: "💻",
      color: "#17A2B8",
      description: "Fundamentos de TI e tecnologia para o mundo digital moderno"
    }
  ];

  return (
    <SelectorContainer>
      <HeaderSection>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="senac-badge">
            <Sparkles size={16} style={{ marginRight: '8px', display: 'inline' }} />
            SENAC MARANHÃO • EXPO INDÚSTRIA 2025
          </div>
          <h1>Quiz Interativo</h1>
          <h2>Escolha seu eixo temático e teste seus conhecimentos</h2>
        </motion.div>
      </HeaderSection>

      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            color={category.color}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onCategorySelect(category.id)}
          >
            <div>
              <div className="category-icon">{category.icon}</div>
              <div className="category-name">{category.name}</div>
              <div className="category-description">{category.description}</div>
            </div>
            <button className="start-button">
              <Play size={18} />
              Iniciar Quiz
            </button>
          </CategoryCard>
        ))}
      </CategoriesGrid>

      <StatsBar>
        <StatItem
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="stat-number">35</span>
          <span className="stat-label">Questões</span>
        </StatItem>
        <StatItem
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="stat-number">5</span>
          <span className="stat-label">Eixos Temáticos</span>
        </StatItem>
        <StatItem
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="stat-number">7</span>
          <span className="stat-label">Questões por Eixo</span>
        </StatItem>
      </StatsBar>
    </SelectorContainer>
  );
};

export default CategorySelector;