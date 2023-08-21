import React from 'react';
import './App.css'
import Hero from './component/Hero';
import YourProject from './pages/YourProject'
import  {Routes, Route } from 'react-router-dom';
import SavedBooks from './pages/SavedBooks';
import ExploreBooks from './pages/ExploreBooks';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/your-Project" element={<YourProject/>}/>
        <Route path="/saved-books" element={<SavedBooks/>}/>
        <Route path="/explore-books" element={<ExploreBooks/>}/>
        
      </Routes>
  
    </div>
  )
}

export default App
