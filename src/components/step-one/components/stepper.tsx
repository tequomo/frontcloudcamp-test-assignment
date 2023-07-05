import * as S from './stepper.styled';


function Stepper(): JSX.Element {
  return (
    <>
      <S.Stepper>
        <S.StepperItem>
          <S.h3>1</S.h3>
        </S.StepperItem>
        <S.StepperItem>
          <S.h3>2</S.h3>
        </S.StepperItem>
        <S.StepperItem>
          <S.h3>3</S.h3>
        </S.StepperItem>
      </S.Stepper>
      {/* <S.MainContainer>
      <S.StepContainer>
        {[1, 2, 3].map((item) => (
          <S.StepWrapper>
            <S.StepStyle>
              <S.StepCount></S.StepCount>
            </S.StepStyle>
            <S.StepsLabelContainer>
              <S.StepLabel>{item}</S.StepLabel>
            </S.StepsLabelContainer>
          </S.StepWrapper>
        ))}
      </S.StepContainer>
    </S.MainContainer> */}
    </>

  );

};

export default Stepper;
