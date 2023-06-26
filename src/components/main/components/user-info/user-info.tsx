import { SocialLink } from '../../../../const';
import * as S from './user-info.styled';

function UserInfo(): JSX.Element {
  return (
    <S.UserData>
      <S.Title>Александр Помещенко</S.Title>
      <S.SocialList>
        <S.SocialItem>
          <S.SocialLink href={SocialLink.Telegram}>Telegram</S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink href={SocialLink.GitHub}>GitHub</S.SocialLink>
        </S.SocialItem>
        <S.SocialItem>
          <S.SocialLink href={SocialLink.Resume}>Resume</S.SocialLink>
        </S.SocialItem>
      </S.SocialList>
    </S.UserData>
  );

};

export default UserInfo;
