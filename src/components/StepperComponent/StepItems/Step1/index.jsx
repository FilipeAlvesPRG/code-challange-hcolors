import styled from "styled-components";
import CardComponent from "../../../CardComponent";
import StepTitleComponent from "../../StepTitleComponent";

const StepContainer = styled.div`
width: 100%;
`;

export default function Step1() {
  return (
    <StepContainer>
      <StepTitleComponent props={'1. Qual será o ambiente a ser pintado?'}/>
      <CardComponent />
    </StepContainer>
  );
} 