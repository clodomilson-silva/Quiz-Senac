import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Save, X } from 'lucide-react';
import {
  AppContainer,
  Header,
  QuizCard,
  Button,
  QuestionText,
  OptionsContainer,
  OptionButton,
  InfoBox
} from '../styles/StyledComponents';
import { quizData } from '../data/quizData';

const AdminPanel = ({ onBack }) => {
  const [questions, setQuestions] = useState(quizData.questions);
  const [editingId, setEditingId] = useState(null);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correct: 0,
    explanation: ''
  });

  const handleEditQuestion = (question) => {
    setEditingId(question.id);
    setNewQuestion({
      question: question.question,
      options: [...question.options],
      correct: question.correct,
      explanation: question.explanation
    });
  };

  const handleSaveQuestion = () => {
    if (editingId) {
      // Editar pergunta existente
      setQuestions(questions.map(q => 
        q.id === editingId 
          ? { ...q, ...newQuestion }
          : q
      ));
    } else {
      // Adicionar nova pergunta
      const newId = Math.max(...questions.map(q => q.id)) + 1;
      setQuestions([...questions, { id: newId, ...newQuestion }]);
    }
    
    resetForm();
  };

  const handleDeleteQuestion = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      setQuestions(questions.filter(q => q.id !== id));
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setNewQuestion({
      question: '',
      options: ['', '', '', ''],
      correct: 0,
      explanation: ''
    });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...newQuestion.options];
    newOptions[index] = value;
    setNewQuestion({ ...newQuestion, options: newOptions });
  };

  const exportQuestions = () => {
    const dataStr = JSON.stringify({ ...quizData, questions }, null, 2);
    const dataBlob = new Blob([`export const quizData = ${dataStr};`], {type: 'text/javascript'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'quizData.js';
    link.click();
  };

  const formStyle = {
    display: 'grid',
    gap: '20px',
    marginBottom: '30px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '10px'
  };

  const inputStyle = {
    padding: '12px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '16px',
    fontFamily: 'inherit'
  };

  const selectStyle = {
    ...inputStyle,
    background: 'white'
  };

  return (
    <AppContainer>
      <Header>
        <h1>Painel Administrativo - Quiz Senac</h1>
        <p>Gerencie as perguntas do quiz</p>
      </Header>

      <QuizCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <Button onClick={onBack} variant="secondary">
            ← Voltar ao Quiz
          </Button>
          <Button onClick={exportQuestions}>
            Exportar Perguntas
          </Button>
        </div>

        {/* Formulário para adicionar/editar pergunta */}
        <div style={formStyle}>
          <h3 style={{ margin: 0, color: '#E60012' }}>
            {editingId ? 'Editar Pergunta' : 'Adicionar Nova Pergunta'}
          </h3>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Pergunta:
            </label>
            <input
              type="text"
              value={newQuestion.question}
              onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
              placeholder="Digite a pergunta..."
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Opções de Resposta:
            </label>
            {newQuestion.options.map((option, index) => (
              <input
                key={index}
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Opção ${index + 1}...`}
                style={{ ...inputStyle, marginBottom: '8px' }}
              />
            ))}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Resposta Correta:
            </label>
            <select
              value={newQuestion.correct}
              onChange={(e) => setNewQuestion({ ...newQuestion, correct: parseInt(e.target.value) })}
              style={selectStyle}
            >
              {newQuestion.options.map((option, index) => (
                <option key={index} value={index}>
                  Opção {index + 1}: {option || 'Vazia'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Explicação:
            </label>
            <textarea
              value={newQuestion.explanation}
              onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
              placeholder="Explicação da resposta..."
              style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={handleSaveQuestion}>
              <Save size={20} style={{ marginRight: '8px' }} />
              {editingId ? 'Salvar Alterações' : 'Adicionar Pergunta'}
            </Button>
            {editingId && (
              <Button onClick={resetForm} variant="secondary">
                <X size={20} style={{ marginRight: '8px' }} />
                Cancelar
              </Button>
            )}
          </div>
        </div>

        {/* Lista de perguntas existentes */}
        <div>
          <h3 style={{ color: '#E60012', marginBottom: '20px' }}>
            Perguntas Existentes ({questions.length})
          </h3>
          
          {questions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: editingId === question.id ? '#fff3cd' : 'white',
                border: editingId === question.id ? '2px solid #ffc107' : '1px solid #e0e0e0',
                borderRadius: '10px',
                padding: '20px',
                marginBottom: '15px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <QuestionText style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
                    {index + 1}. {question.question}
                  </QuestionText>
                  
                  <OptionsContainer style={{ gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {question.options.map((option, optIndex) => (
                      <OptionButton
                        key={optIndex}
                        isCorrect={optIndex === question.correct}
                        showCorrect={true}
                        style={{
                          padding: '10px',
                          fontSize: '0.9rem',
                          cursor: 'default',
                          transform: 'none'
                        }}
                      >
                        {String.fromCharCode(65 + optIndex)}) {option}
                      </OptionButton>
                    ))}
                  </OptionsContainer>
                  
                  {question.explanation && (
                    <InfoBox style={{ marginTop: '15px' }}>
                      <p><strong>Explicação:</strong> {question.explanation}</p>
                    </InfoBox>
                  )}
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginLeft: '20px' }}>
                  <Button
                    onClick={() => handleEditQuestion(question)}
                    variant="secondary"
                    style={{ padding: '8px 12px', minWidth: 'auto' }}
                  >
                    <Edit3 size={16} />
                  </Button>
                  <Button
                    onClick={() => handleDeleteQuestion(question.id)}
                    variant="danger"
                    style={{ padding: '8px 12px', minWidth: 'auto' }}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {questions.length === 0 && (
          <InfoBox>
            <p>Nenhuma pergunta cadastrada. Adicione a primeira pergunta usando o formulário acima.</p>
          </InfoBox>
        )}
      </QuizCard>
    </AppContainer>
  );
};

export default AdminPanel;