import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Main from './components/main/main';
import { AppRoute } from './const';
import * as S from './App.styled';
import StepOne from './components/step-one/step-one';

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Router>
        <S.Container>
          <Routes>
            <Route path={AppRoute.Main} element={<Main />} />
            <Route path={AppRoute.StepOne} element={<StepOne />} />
          </Routes>
        </S.Container>
      </Router>
    </>
  );
}

export default App;
