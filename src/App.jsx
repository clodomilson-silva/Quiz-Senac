import React from 'react'
import AppMain from './components/AppMain'
import './App.css'

function App() {
  return (
    <div className="App" style={{ 
      background: 'transparent', 
      backgroundColor: 'transparent',
      margin: 0,
      padding: 0,
      height: 'fit-content',
      minHeight: 'auto',
      maxHeight: 'none',
      width: '100%',
      position: 'relative',
      overflow: 'visible',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <AppMain />
    </div>
  )
}

export default App
