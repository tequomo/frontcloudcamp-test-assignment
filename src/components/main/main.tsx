import * as S from './main.styled';
import Avatar from './components/avatar/avatar';
import UserInfo from './components/user-info/user-info';
import MainForm from './components/main-form/main-form';

function Main(): JSX.Element {
  return (
    <>
      <S.Header>
        <Avatar />
        <UserInfo />
      </S.Header>
      <MainForm />
    </>
  );

};

export default Main;
