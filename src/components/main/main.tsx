import React from 'react';
import styled from 'styled-components';
import Avatar from './components/avatar/avatar';
import UserInfo from './components/user-info/user-info';
import MainForm from './components/main-form/main-form';

const Container = styled.div`
  width: 900px;
  height: 704px;
  margin: auto;
  background: #FFFFFF;
  border-radius: 12px 12px 0px 0px;
  padding: 24px;
`;

const Header = styled.header`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding-bottom: 24px;
`;

function Main(): JSX.Element {
  return (
    <Container>
      <Header>
        <Avatar />
        <UserInfo />
      </Header>
      <MainForm />
    </Container>
  );

};

export default Main;
