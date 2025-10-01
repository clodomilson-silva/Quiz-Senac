import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock, ArrowLeft, Star } from 'lucide-react';
import styled from 'styled-components';
import { quizData } from '../data/quizData';

// Styled Components específicos para o novo design
const QuizContainer = styled.div`
  min-height: 100vh;
  height: auto;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 100%);
  background-attachment: fixed;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px; /* Adiciona espaço extra para garantir que o background se estenda */
  font-family: 'Poppins', 'Inter', system-ui, sans-serif;
  font-weight: 600;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.1"/></svg>') repeat;
    background-size: 30px 30px;
    background-attachment: fixed;
    z-index: -1;
  }
`;

const QuizHeader = styled.div`
  padding: clamp(15px, 3vw, 20px);
  padding-right: clamp(80px, 15vw, 100px); /* Espaço extra para não sobrepor com botão de configurações */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding-right: clamp(70px, 12vw, 85px);
  }

  .back-button {
    background: rgba(255,255,255,0.2);
    border: none;
    padding: clamp(10px, 2vw, 12px);
    border-radius: 50%;
    color: white;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(255,255,255,0.3);
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .category-info {
    text-align: center;
    color: white;
    flex: 1;
    min-width: 200px;

    .category-name {
      font-size: clamp(1.2rem, 4vw, 1.5rem);
      font-weight: 700;
      margin-bottom: 5px;
      line-height: 1.2;
    }

    .progress-info {
      font-size: clamp(0.8rem, 2vw, 0.9rem);
      opacity: 0.9;
    }
  }

  .timer {
    background: ${props => props.timeWarning ? 'rgba(220, 53, 69, 0.2)' : 'rgba(255,255,255,0.2)'};
    padding: clamp(12px 16px, 3vw, 15px 20px);
    border-radius: 50px;
    color: white;
    font-weight: 700;
    font-size: clamp(1rem, 2vw, 1.1rem);
    backdrop-filter: blur(10px);
    border: 2px solid ${props => props.timeWarning ? '#DC3545' : 'rgba(255,255,255,0.3)'};
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    min-width: fit-content;
    white-space: nowrap;
  }
`;

const QuestionCard = styled(motion.div)`
  background: white;
  margin: clamp(10px, 3vw, 20px);
  border-radius: 25px;
  padding: clamp(25px, 5vw, 40px);
  position: relative;
  z-index: 5;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  box-sizing: border-box;

  @media (max-width: 480px) {
    margin: 10px 5px;
    padding: 20px 15px;
    border-radius: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 15px 10px;
    padding: 25px 20px;
  }

  .question-number {
    background: ${props => props.categoryColor || '#667eea'};
    color: white;
    width: clamp(40px, 8vw, 50px);
    height: clamp(40px, 8vw, 50px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: clamp(1rem, 3vw, 1.2rem);
    margin: 0 auto clamp(20px, 4vw, 25px) auto;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .question-text {
    font-size: clamp(1.1rem, 4vw, 1.4rem);
    color: #2d3748;
    text-align: center;
    margin-bottom: clamp(25px, 5vw, 35px);
    line-height: 1.5;
    font-weight: 600;
    hyphens: auto;
    word-wrap: break-word;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  gap: clamp(12px, 3vw, 15px);
  margin-bottom: clamp(25px, 5vw, 30px);
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const OptionCard = styled(motion.button)`
  background: ${props => {
    if (props.showResults) {
      if (props.isCorrect) return '#28A745';
      if (props.isSelected && !props.isCorrect) return '#DC3545';
      return '#f8f9fa';
    }
    return props.isSelected ? props.categoryColor || '#667eea' : '#f8f9fa';
  }};
  
  color: ${props => (props.showResults || props.isSelected) ? 'white' : '#2d3748'};
  border: 3px solid ${props => {
    if (props.showResults && props.isCorrect) return '#28A745';
    if (props.showResults && props.isSelected && !props.isCorrect) return '#DC3545';
    return props.isSelected ? props.categoryColor || '#667eea' : 'transparent';
  }};
  
  padding: clamp(15px, 4vw, 20px);
  border-radius: 15px;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 600;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  position: relative;
  overflow: hidden;
  min-height: clamp(60px, 12vw, 70px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  line-height: 1.4;
  hyphens: auto;
  word-wrap: break-word;

  &:hover {
    ${props => !props.disabled && !props.showResults && `
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      background: ${props.categoryColor || '#667eea'};
      color: white;
    `}
  }

  &:active {
    ${props => !props.disabled && `
      transform: translateY(0);
    `}
  }

  .option-icon {
    position: absolute;
    right: clamp(15px, 3vw, 20px);
    top: 50%;
    transform: translateY(-50%);
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 0.9rem;
    min-height: 60px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 18px;
    font-size: 0.95rem;
    min-height: 65px;
  }
`;

const ExplanationCard = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.categoryColor || '#667eea'}, ${props => props.categoryColor || '#764ba2'});
  color: white;
  padding: clamp(20px, 4vw, 25px);
  border-radius: 15px;
  margin: clamp(15px, 3vw, 20px) 0;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);

  .explanation-title {
    font-weight: 700;
    margin-bottom: clamp(12px, 3vw, 15px);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
  }

  .explanation-text {
    line-height: 1.6;
    opacity: 0.95;
    font-size: clamp(0.9rem, 2vw, 1rem);
    hyphens: auto;
    word-wrap: break-word;
  }
`;

const ActionButton = styled(motion.button)`
  background: ${props => props.variant === 'secondary' ? 'rgba(255,255,255,0.2)' : props.categoryColor || '#667eea'};
  color: white;
  border: none;
  padding: clamp(12px 25px, 3vw, 15px 30px);
  border-radius: 50px;
  font-weight: 600;
  font-size: clamp(0.9rem, 2vw, 1rem);
  cursor: pointer;
  backdrop-filter: blur(10px);
  border: 2px solid ${props => props.variant === 'secondary' ? 'rgba(255,255,255,0.3)' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
  min-height: 44px;
  min-width: 120px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ResultsContainer = styled.div`
  text-align: center;
  padding: clamp(30px, 6vw, 40px) clamp(15px, 3vw, 20px);

  .trophy-icon {
    font-size: clamp(3rem, 10vw, 5rem);
    margin-bottom: clamp(20px, 4vw, 25px);
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-30px); }
    60% { transform: translateY(-15px); }
  }

  .score-display {
    font-size: clamp(2rem, 8vw, 3rem);
    font-weight: 900;
    color: #2d3748;
    margin-bottom: clamp(12px, 3vw, 15px);
    line-height: 1;
  }

  .percentage-display {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
    color: ${props => props.categoryColor || '#667eea'};
    margin-bottom: clamp(20px, 4vw, 25px);
    font-weight: 700;
  }

  .result-message {
    font-size: clamp(1rem, 3vw, 1.2rem);
    color: #666;
    margin-bottom: clamp(25px, 5vw, 35px);
    font-weight: 600;
    line-height: 1.4;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .action-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }
`;

const Quiz = ({ selectedCategory, onBack, categoryColor }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const questions = quizData.questions[selectedCategory] || [];
  const currentQuestion = questions[currentQuestionIndex];
  const categoryInfo = quizData.categories.find(cat => cat.id === selectedCategory);

  const handleAnswerSubmit = React.useCallback(() => {
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setShowAnswer(true);
  }, [selectedAnswer, currentQuestion]);

  // Timer para cada pergunta
  useEffect(() => {
    let timer;
    if (!showAnswer && !showResults && timeLeft > 0 && currentQuestion) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showAnswer && currentQuestion) {
      handleAnswerSubmit();
    }
    
    return () => clearTimeout(timer);
  }, [timeLeft, showAnswer, showResults, currentQuestion, handleAnswerSubmit]);

  // Reset timer quando muda de pergunta
  useEffect(() => {
    if (!showResults) {
      setTimeLeft(30);
    }
  }, [currentQuestionIndex, showResults]);

  const handleOptionClick = (optionIndex) => {
    if (!showAnswer) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setShowResults(false);
    setTimeLeft(30);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    
    if (percentage >= 90) return quizData.scoring.excellent.message;
    if (percentage >= 70) return quizData.scoring.good.message;
    if (percentage >= 50) return quizData.scoring.average.message;
    return quizData.scoring.needsImprovement.message;
  };

  if (!currentQuestion && !showResults) {
    return (
      <QuizContainer>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          flexDirection: 'column',
          color: 'white',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h2>Carregando perguntas...</h2>
          <button 
            onClick={onBack}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '50px',
              color: 'white',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Voltar às Categorias
          </button>
        </div>
      </QuizContainer>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <QuizContainer>
        <QuizHeader>
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={20} />
          </button>
          <div className="category-info">
            <div className="category-name">{categoryInfo?.name}</div>
          </div>
          <div></div>
        </QuizHeader>

        <QuestionCard categoryColor={categoryColor}>
          <ResultsContainer categoryColor={categoryColor}>
            <div className="trophy-icon">🏆</div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="score-display">{score}/{questions.length}</div>
              <div className="percentage-display">{percentage}%</div>
              <div className="result-message">{getScoreMessage()}</div>
            </motion.div>

            <div className="action-buttons">
              <ActionButton 
                categoryColor={categoryColor}
                onClick={restartQuiz}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw size={20} />
                Tentar Novamente
              </ActionButton>
              
              <ActionButton 
                variant="secondary"
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={20} />
                Outras Categorias
              </ActionButton>
            </div>
          </ResultsContainer>
        </QuestionCard>
      </QuizContainer>
    );
  }

  return (
    <QuizContainer>
      <QuizHeader timeWarning={timeLeft <= 10}>
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
        </button>
        
        <div className="category-info">
          <div className="category-name">{categoryInfo?.name}</div>
          <div className="progress-info">
            Pergunta {currentQuestionIndex + 1} de {questions.length}
          </div>
        </div>
        
        <div className="timer">
          <Clock size={20} />
          {timeLeft}s
        </div>
      </QuizHeader>

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestionIndex}
          categoryColor={categoryColor}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="question-number">
            {currentQuestionIndex + 1}
          </div>
          
          <div className="question-text">
            {currentQuestion.question}
          </div>

          <OptionsGrid>
            {currentQuestion.options.map((option, index) => (
              <OptionCard
                key={index}
                isSelected={selectedAnswer === index}
                isCorrect={index === currentQuestion.correct}
                showResults={showAnswer}
                disabled={showAnswer}
                categoryColor={categoryColor}
                onClick={() => handleOptionClick(index)}
                whileHover={!showAnswer ? { scale: 1.02 } : {}}
                whileTap={!showAnswer ? { scale: 0.98 } : {}}
              >
                {option}
                {showAnswer && index === currentQuestion.correct && (
                  <div className="option-icon">
                    <CheckCircle size={24} />
                  </div>
                )}
                {showAnswer && selectedAnswer === index && index !== currentQuestion.correct && (
                  <div className="option-icon">
                    <XCircle size={24} />
                  </div>
                )}
              </OptionCard>
            ))}
          </OptionsGrid>

          {showAnswer && (
            <ExplanationCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="explanation-title">
                <Star size={20} />
                Explicação:
              </div>
              <div className="explanation-text">
                {currentQuestion.explanation}
              </div>
            </ExplanationCard>
          )}

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            {!showAnswer && selectedAnswer !== null && (
              <ActionButton 
                categoryColor={categoryColor}
                onClick={handleAnswerSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Confirmar Resposta
              </ActionButton>
            )}
            
            {showAnswer && (
              <ActionButton 
                categoryColor={categoryColor}
                onClick={handleNextQuestion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentQuestionIndex === questions.length - 1 ? (
                  <>
                    <Trophy size={20} />
                    Ver Resultado
                  </>
                ) : (
                  'Próxima Pergunta'
                )}
              </ActionButton>
            )}
          </div>
        </QuestionCard>
      </AnimatePresence>
    </QuizContainer>
  );
};

export default Quiz;