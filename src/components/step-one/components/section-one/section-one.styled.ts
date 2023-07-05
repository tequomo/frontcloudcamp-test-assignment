import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: flex;
  padding: 67px 0 0 0;
  margin: 0;
`;

const Form = styled.form`

`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  gap: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.label`
  color: #333;
  font-size: 14px;
  font-family: SB Sans Interface;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Input = styled.input`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: #FFF;
`;

const Span = styled.span`
  color: rgba(0, 0, 0, 0.48);
  font-size: 12px;
  font-family: SB Sans Interface;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

const Select = styled.select`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.16);
  background: #FFF;
`;

export { Section, Form, FormWrapper, Wrapper, Label, Input, Span, Select };
