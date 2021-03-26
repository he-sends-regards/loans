import React from 'react';
import './app.css';
import Header from '../header/header';
import MainPage from '../main-page/main-page';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainPage />
    </div>
  );
};

export default App;
