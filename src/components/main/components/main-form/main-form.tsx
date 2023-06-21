import styled from 'styled-components';

const FormStart = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 400px;
  height: 168px;
  padding: 24px 0;
`;

const PhoneField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 400px;
  height: 72px;
`;

const EmailField = styled(PhoneField)``;

const PhoneLabel = styled.label`
  color: #333333;
  font-size: 14px;
  font-family: SB Sans Interface;
  line-height: 20px;
`;

const PhoneInput = styled.input`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: rgba(0, 0, 0, 0.04);
  color: rgba(0, 0, 0, 0.48);
  font-size: 14px;
  font-family: SB Sans Interface;
  line-height: 20px;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  &:focus, &:active {
    border: 1px solid rgba(0, 0, 0, 0.6);
    outline: none;
  }
`;

const EmailLabel = styled(PhoneLabel)``;

const EmailInput = styled(PhoneInput)``;

const ButtonStart = styled.button`
  width: 79px;
  height: 44px;
  display: flex;
  padding: 12px 16px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border-width: 0;
  background: #5558FA;
  color: #FFF;
  font-size: 14px;
  font-family: SB Sans Interface;
  line-height: 20px;
`

function MainForm(): JSX.Element {
  return (
    <section>
      <FormStart action="">
        <PhoneField>
          <PhoneLabel htmlFor="">Номер телефона</PhoneLabel>
          <PhoneInput type="tel" name="" id="" />
        </PhoneField>
        <EmailField>
          <EmailLabel htmlFor="">Email</EmailLabel>
          <EmailInput type="email" name="" id="" />
        </EmailField>
        <ButtonStart type="submit" id='button-start'>Начать</ButtonStart>
      </FormStart>
    </section>
  );

};

export default MainForm;
