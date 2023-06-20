import styled from 'styled-components';

const UserPic = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 24px;
  top: 25px;
  background: #D5E4F7;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Letters = styled.span`
  width: 53px;
  height: 52px;
  font-family: 'SB Sans Text', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  color: #212830;
  margin-right: 7px;
`

function Avatar(): JSX.Element {
  return (
    <UserPic>
      <Letters>АП</Letters>
    </UserPic>
  );

};

export default Avatar;
