import React from 'react';
import './App.css';
import HomeComponent from './components/Home';
import QuizComponent from './components/Quiz';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent/>
      <Result/>
    </div>
  );
}

export default App;