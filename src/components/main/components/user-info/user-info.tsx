import styled from 'styled-components';

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 228px;
  height: 50px;
  left: 128px;
  top: 38px;
`;

const Title = styled.div`
  font-family: 'SB Sans Interface';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #333333;
`

const SocialList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  gap: 16px;

  width: 228px;
  height: 16px;
`;

const SocialItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  gap: 4px;
  &::before {
    width: 14px;
    height: 12px;
    content: '';
    background-image: url(../../img/folder.svg);
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #5558FA;
  font-family: 'SB Sans Interface';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

function UserInfo(): JSX.Element {
  return (
    <UserData>
      <Title>Александр Помещенко</Title>
      <SocialList>
        <SocialItem>
          <SocialLink href='https://t.me/@tequomo'>Telegram</SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href='https://github.com/tequomo'>GitHub</SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink href='https://htmlacademy.ru/profile/id1665015'>Resume</SocialLink>
        </SocialItem>
      </SocialList>
    </UserData>
  );

};

export default UserInfo;
