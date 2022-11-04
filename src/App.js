import './App.css';
import Header from './components/header'
import NoteLIstPage from './pages/noteLIstPage';
import { Routes, Route } from 'react-router-dom';
import NotePage from './pages/notePage';
import React from 'react';

function App() {
  const[lightMode, setlightMode] = React.useState(false)

  function togglelightMode() {
    setlightMode(prevlightMode => !prevlightMode)
  }
  
  return (
    <div className="container dark">
      <div className='app'>
      <Header lightMode={lightMode} togglelightMode={togglelightMode}  />
      <Routes>
        <Route path='/' element={<NoteLIstPage lightMode={lightMode} />} />
        <Route path='/note/:id' element={<NotePage lightMode={lightMode} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
