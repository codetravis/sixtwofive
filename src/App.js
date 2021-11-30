import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import RandomWord from './components/RandomWord/RandomWord'
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/categories' element={ <Categories /> } />
          <Route path='/word' element={ <RandomWord /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
