import styled from "styled-components";
import CardComponent, { CardContainer } from "../../../CardComponent";
import StepTitleComponent from "../../StepTitleComponent";
import internal_ambient from '../../../../assets/internal_ambient.svg';
import external_ambient from '../../../../assets/external_ambient.svg'
import both_ambients from '../../../../assets/both_ambients.svg'

const StepContainer = styled.div`
width: 100%;
`;

export default function Step1() {

  const ambients = ['Ambiente Interno', 'Ambiente Externo', 'Ambiente Interno e Externo']
  return (
    <StepContainer>
      <StepTitleComponent props={'1. Qual será o ambiente a ser pintado?'} />
      <CardContainer>
        <CardComponent image={internal_ambient} title={ambients[0]} />
        <CardComponent image={external_ambient} title={ambients[1]} />
        <CardComponent image={both_ambients} title={ambients[2]} />
      </CardContainer>
    </StepContainer>
  );
} 