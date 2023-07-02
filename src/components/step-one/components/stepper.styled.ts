import { styled } from "styled-components";

const Stepper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
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
    background-color: #A6A6A6;
    transform: translateY(-25%);
  }
  &::after {
    content: "";
    position: relative;
    top: 1.5rem;
    left: 50%;
    height: 8px;
    background-color: #e0e0e0;
    order: -1;
  }
  &:last-child::after {
    content: "";
    background-color: #e0e0e0;
    width: 0;
    position: relative;
    top: 1.5rem;
    left: 50%;
    height: 8px;
    order: -1;
  }
`;


const MainContainer = styled.div`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 0 15px;
`

const StepContainer = styled.ol`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
  list-style: none;
  padding: 0;

`



const StepWrapper = styled.li`
  flex: 1;
  position: relative;
  z-index: 1;
  &:not(:last-child)::before {
    content: '';
    position: absolute;
    background: rgba(0,0,0,0.08);
    height: 8px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`

const StepStyle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #A6A6A6;
  border: 0;
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StepCount = styled.span`
  font-size: 19px;
  color: #f3e7f3;
`

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StepLabel = styled.span`
  font-size: 19px;
  color: #4a154b;
`


export { Stepper, StepperItem, StepCount, StepLabel, StepStyle,StepWrapper,StepsLabelContainer, MainContainer, StepContainer };
