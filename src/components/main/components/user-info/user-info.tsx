import * as S from './user-info.styled';

function UserInfo(): JSX.Element {
  return (
    <S.UserData>
      <S.Title>Александр Помещенко</S.Title>
      <S.SocialList>
        <S.SocialItem>
          <S.SocialLink href='https://t.me/tequomo'>Telegram</S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink href='https://github.com/tequomo'>GitHub</S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink href='https://htmlacademy.ru/profile/id1665015'>Resume</S.SocialLink>
        </S.SocialItem>
      </S.SocialList>
    </S.UserData>
  );

};

export default UserInfo;
