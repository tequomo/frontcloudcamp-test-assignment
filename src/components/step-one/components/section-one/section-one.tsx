import * as S from "./section-one.styled";

function SectionOne(): JSX.Element {
  return (
    <S.Section>
      <S.Form action="#">
        <S.FormWrapper>
          <S.Wrapper>
            <S.Label htmlFor="field-nickname">Nickname</S.Label>
            <S.Input type="text" name="nickname" id="field-nickname" />
            <S.Span>Tip</S.Span>
          </S.Wrapper>
          <S.Wrapper>
            <S.Label htmlFor="field-name">Name</S.Label>
            <S.Input type="text" name="name" id="field-name" />
            <S.Span>Tip</S.Span>
          </S.Wrapper>
          <S.Wrapper>
            <S.Label htmlFor="field-surname">Surname</S.Label>
            <S.Input type="text" name="surname" id="field-surname" />
            <S.Span>Tip</S.Span>
          </S.Wrapper>
          <S.Wrapper>
            <S.Label htmlFor="field-sex">Sex</S.Label>
            <S.Select name="sex" id="field-sex">
              <option value="Man" id="field-sex-option-man">Man</option>
              <option value="Woman" id="field-sex-option-woman">Woman</option>
            </S.Select>
            <S.Span>Tip</S.Span>
          </S.Wrapper>
        </S.FormWrapper>
        <div className="button-group">
          <button type="button">Назад</button>
          <button type="button">Далее</button>
        </div>
      </S.Form>
    </S.Section>
  );

};

export default SectionOne;
