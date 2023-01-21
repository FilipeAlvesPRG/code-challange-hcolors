import styled from "styled-components";
import internal_ambient from '../../../../assets/internal_ambient.svg'
import external_ambient from '../../../../assets/external_ambient.svg'
import both_ambients from '../../../../assets/both_ambients.svg'
import { useState } from "react";

const StepTitle = styled.h3`
font-family: ${props => props.theme.fonts[0]};
text-align: center;
`;

const StepContainer = styled.div`
width: 100%;

`;

const Card = styled.div`
border: 1px solid #8D8D8D;
border-radius: 10px;
background-color: #F9F9F9;
width: fit-content;
margin-left: 20px;
float: left;
`;

const CardRight = styled.div`
border: 1px solid #8D8D8D;
border-radius: 10px;
background-color: #F9F9F9;
width: fit-content;
margin-left: 20px;
float: left;
`;

const CardImage = styled.img`
padding: 20px;
`;

const CardContainer = styled.div`
 display: flex;
  justify-content: space-between;
  margin-left:80px;
  margin-right: 80px;
`;

const CardTitle = styled.h5`

`;

const CardRadioButton = styled.input`
float: center;
&:checked {
  background-color: #9BD9A7;
}
`;

const StepButton = styled.button`
  background: #9BD9A7;
  border-radius: 10px;
  border: none;
  padding: 10px;
 align-items: center;
 justify-content: center;
  color: #fff;
  width: 100px;
  position: absolute;
  bottom: 0 !important;
  cursor: pointer;
  margin-bottom: 50px;


`;

export default function Step1() {
  const ambients = ['Ambiente Interno', 'Ambiente Externo', 'Ambiente Interno e Externo']
  const [activeStep, setActiveStep] = useState(0);

  return (
    <StepContainer>
      <StepTitle>1. Qual será o ambiente a ser pintado?</StepTitle>
      <CardContainer>
        <Card>
          <CardImage src={internal_ambient} />
          <CardTitle>{ambients[0]}</CardTitle>
          <CardRadioButton type={'radio'} id={ambients[0]} name={'ambient_type'}></CardRadioButton>
        </Card>

        <Card>
          <CardImage src={external_ambient} />
          <CardTitle>{ambients[1]}</CardTitle>
          <CardRadioButton type='radio' id={ambients[1]} name={'ambient_type'}></CardRadioButton>
        </Card>

        <CardRight>
          <CardImage src={both_ambients} />
          <CardTitle>{ambients[2]}</CardTitle>
          <CardRadioButton type={'radio'} id={ambients[2]} name={'ambient_type'}></CardRadioButton>
        </CardRight>
      </CardContainer>
    </StepContainer>
  );
} 