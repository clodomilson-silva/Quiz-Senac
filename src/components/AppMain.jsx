import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import styled from 'styled-components';
import Quiz from './Quiz';
import ConfigMenu from './ConfigMenu';
import CategorySelector from './CategorySelector';

const AppContainer = styled.div`
  width: 100vw;
  height: fit-content;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  background: transparent;
`;

const SettingsButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
  }
`;

const AppMain = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showConfigMenu, setShowConfigMenu] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const toggleConfigMenu = () => {
    setShowConfigMenu(!showConfigMenu);
  };

  return (
    <AppContainer>
      <SettingsButton onClick={toggleConfigMenu}>
        <Settings size={24} />
      </SettingsButton>

      {showConfigMenu && (
        <ConfigMenu onClose={() => setShowConfigMenu(false)} />
      )}

      {selectedCategory ? (
        <Quiz 
          selectedCategory={selectedCategory} 
          onBack={handleBackToCategories} 
        />
      ) : (
        <CategorySelector onCategorySelect={handleCategorySelect} />
      )}
    </AppContainer>
  );
};

export default AppMain;
