import styled from 'styled-components';

const Stepper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 86px;
  width: 100%;
  height: 48px;
`;

const StepperItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0;
  padding: 0;
  &::before {
    content: "";
    position: relative;
    z-index: 1;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin: 1rem auto 0;
    background-color: #000000;
  }
`;

export { Stepper, StepperItem };
