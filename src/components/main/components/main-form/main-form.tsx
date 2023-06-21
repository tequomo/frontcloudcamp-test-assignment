import * as S from './main-form.styled';

function MainForm(): JSX.Element {
  return (
    <section>
      <S.FormStart action="">
        <S.PhoneField>
          <S.PhoneLabel htmlFor="">Номер телефона</S.PhoneLabel>
          <S.PhoneInput type="tel" name="" id="" />
        </S.PhoneField>
        <S.EmailField>
          <S.EmailLabel htmlFor="">Email</S.EmailLabel>
          <S.EmailInput type="email" name="" id="" />
        </S.EmailField>
        <S.ButtonStart type="submit" id='button-start'>Начать</S.ButtonStart>
      </S.FormStart>
    </section>
  );

};

export default MainForm;
