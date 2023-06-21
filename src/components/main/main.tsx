import React from 'react';
import styled from 'styled-components';
import Avatar from './components/avatar/avatar';
import UserInfo from './components/user-info/user-info';

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
      <section>
        <form action="">
          <fieldset>
            <label htmlFor="">Номер телефона</label>
            <input type="tel" name="" id="" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </fieldset>
          <input type="submit" value="Далее" />
        </form>
      </section>
    </Container>
  );

};

export default Main;
