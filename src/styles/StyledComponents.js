import styled from 'styled-components';

// Cores do Senac (baseadas na identidade visual)
export const colors = {
  primary: '#E60012',      // Vermelho Senac
  secondary: '#0066CC',    // Azul
  success: '#28A745',      // Verde para respostas corretas
  warning: '#FFC107',      // Amarelo para atenção
  danger: '#DC3545',       // Vermelho para respostas incorretas
  light: '#F8F9FA',       // Cinza claro
  dark: '#343A40',         // Cinza escuro
  white: '#FFFFFF',
  gradient: 'linear-gradient(135deg, #E60012 0%, #FF4444 100%)'
};

// Container principal da aplicação
export const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 100%);
  font-family: 'Poppins', 'Inter', system-ui, sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Header com logo do Senac
export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    color: ${colors.primary};
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    color: ${colors.dark};
    font-size: 1.2rem;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// Card principal do quiz
export const QuizCard = styled.div`
  background: ${colors.white};
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${colors.gradient};
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin: 10px;
  }
`;

// Barra de progresso
export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${colors.light};
  border-radius: 4px;
  margin-bottom: 30px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: ${colors.gradient};
  border-radius: 4px;
  transition: width 0.5s ease;
  width: ${props => props.progress}%;
`;

// Botões estilizados
export const Button = styled.button`
  background: ${props => {
    if (props.variant === 'success') return colors.success;
    if (props.variant === 'danger') return colors.danger;
    if (props.variant === 'secondary') return colors.secondary;
    return colors.gradient;
  }};
  color: ${colors.white};
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
    min-width: 120px;
  }
`;

// Container para opções de resposta
export const OptionsContainer = styled.div`
  display: grid;
  gap: 15px;
  margin: 30px 0;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

// Opção de resposta individual
export const OptionButton = styled.button`
  background: ${props => {
    if (props.isSelected && props.isCorrect) return colors.success;
    if (props.isSelected && !props.isCorrect) return colors.danger;
    if (props.showCorrect && props.isCorrect) return colors.success;
    return colors.white;
  }};
  
  color: ${props => {
    if (props.isSelected || (props.showCorrect && props.isCorrect)) return colors.white;
    return colors.dark;
  }};
  
  border: 3px solid ${props => {
    if (props.isSelected && props.isCorrect) return colors.success;
    if (props.isSelected && !props.isCorrect) return colors.danger;
    if (props.showCorrect && props.isCorrect) return colors.success;
    return colors.light;
  }};
  
  padding: 20px;
  border-radius: 15px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  position: relative;
  
  &:hover {
    border-color: ${colors.primary};
    transform: translateX(10px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1rem;
  }
`;

// Texto da pergunta
export const QuestionText = styled.h2`
  color: ${colors.dark};
  font-size: 1.5rem;
  margin-bottom: 20px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

// Container de resultados
export const ResultContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  
  h2 {
    color: ${colors.primary};
    font-size: 2.5rem;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .score {
    font-size: 3rem;
    font-weight: bold;
    color: ${colors.secondary};
    margin: 20px 0;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .message {
    font-size: 1.3rem;
    color: ${colors.dark};
    margin: 20px 0;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

// Container de informações extras
export const InfoBox = styled.div`
  background: ${colors.light};
  border-left: 4px solid ${colors.primary};
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 5px;
  
  p {
    margin: 0;
    color: ${colors.dark};
    font-size: 1rem;
    line-height: 1.5;
  }
`;

// Container de navegação
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Badge de pontuação
export const ScoreBadge = styled.span`
  background: ${colors.gradient};
  color: ${colors.white};
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1rem;
`;

// Loading spinner
export const LoadingSpinner = styled.div`
  border: 4px solid ${colors.light};
  border-top: 4px solid ${colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;