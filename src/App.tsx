import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Main from './components/main/main';
import { AppRoute } from './const';
import * as S from './App.styled';
// import './App.css';

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Router>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
