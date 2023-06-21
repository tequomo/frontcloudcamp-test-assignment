import * as S from './step-one.styled';

function StepOne(): JSX.Element {
  return (
    <>
      <header>
        <S.Stepper>
          <S.StepperItem>
            <h3 className="c-stepper__title">1</h3>
          </S.StepperItem>
          <S.StepperItem>
            <h3 className="c-stepper__title">2</h3>
          </S.StepperItem>
          <S.StepperItem>
            <h3 className="c-stepper__title">3</h3>
          </S.StepperItem>
        </S.Stepper>
      </header>
      <section></section>
    </>
  );
};

export default StepOne;
